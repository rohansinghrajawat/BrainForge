/* ============================================================
   AUTH — Supabase-backed
   ============================================================ */

   const SUPABASE_URL = window.BRAINFORGE_CONFIG.SUPABASE_URL;
const SUPABASE_ANON_KEY = window.BRAINFORGE_CONFIG.SUPABASE_ANON_KEY;

const db = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

/* Normalize the raw Supabase user into the shape the app expects:
   { id, email, name, role } */
function normalizeUser(sbUser) {
  if (!sbUser) return null;
  return {
    id:     sbUser.id,
    email:  sbUser.email,
    name:   sbUser.user_metadata?.full_name || sbUser.email.split('@')[0],
    role:   sbUser.app_metadata?.role === 'admin' ? 'admin' : 'student',
    raw:    sbUser,
  };
}

/* --- Sign up --- */
async function signUp({ name, email, password }) {
  const { data, error } = await db.auth.signUp({
    email,
    password,
    options: { data: { full_name: name } },
  });
  if (error) throw error;
  return {
    user:    normalizeUser(data.user),
    session: data.session,
  };
}

/* --- Sign in --- */
async function signIn({ email, password }) {
  const { data, error } = await db.auth.signInWithPassword({ email, password });
  if (error) throw error;
  
  const user = normalizeUser(data.user);
  
  try {
    const { data: profile, error: profileErr } = await db.from('profiles').select('role, email').eq('id', user.id).single();
    
    console.log("PROFILE FETCHED DURING LOGIN:", profile); // <--- ADD THIS
    if (profileErr) console.error("PROFILE FETCH ERROR:", profileErr); // <--- ADD THIS

    if (profile) {
      user.role = profile.role === 'admin' ? 'admin' : 'student';
      if (profile.email) user.email = profile.email;
    }
  } catch (e) {
    console.warn("Could not fetch profile role", e);
  }
  
  return user;
}

/* --- Admin sign-in: reject non-admins --- */
async function adminSignIn({ email, password }) {
  const user = await signIn({ email, password });
  if (user.role !== 'admin') {
    await db.auth.signOut();
    throw new Error('This account does not have administrator access.');
  }
  return user;
}

/* --- Sign out --- */
async function signOut() {
  const { error } = await db.auth.signOut();
  if (error) throw error;
}

/* --- Restore session on page load --- */
async function getSession() {
  const { data } = await db.auth.getSession();
  if (!data.session?.user) return null;
  return await getFullUser(data.session.user); // Now fetches the real role!
}

/* --- Password reset email --- */
async function requestPasswordReset(email) {
  const { error } = await db.auth.resetPasswordForEmail(email, {
    redirectTo: `${window.location.origin}/#/reset-password`,
  });
  if (error) throw error;
}

/* --- Apply a new password --- */
async function updatePassword(newPassword) {
  const { error } = await db.auth.updateUser({ password: newPassword });
  if (error) throw error;
}

/* --- Subscribe to auth state changes --- */
function onAuthChange(cb) {
  db.auth.onAuthStateChange(async (event, session) => {
    const user = await getFullUser(session?.user); // Also fetches the real role!
    cb(event, user);
  });
}


/* --- Turn Supabase errors into friendly strings --- */
function friendlyError(err) {
  const msg = (err && err.message) || 'Something went wrong. Please try again.';
  const m = msg.toLowerCase();
  if (m.includes('invalid login credentials'))       return 'Incorrect email or password.';
  if (m.includes('email not confirmed'))             return 'Please confirm your email before signing in.';
  if (m.includes('user already registered'))         return 'An account with this email already exists. Try signing in.';
  if (m.includes('password should be at least'))     return 'Password must be at least 6 characters.';
  if (m.includes('unable to validate email'))        return 'That email address is not valid.';
  if (m.includes('rate limit') || m.includes('too many')) return 'Too many attempts. Wait a minute and try again.';
  if (m.includes('network'))                         return 'Network error. Check your connection.';
  return msg;
}

/* --- Data layer: subjects + faculty --- */

async function fetchFaculty() {
  const { data, error } = await db.from('faculty').select('*');
  if (error) throw error;
  const map = {};
  (data || []).forEach(f => {
    map[f.id] = { ...f, facultyId: f.id };
  });
  return map;
}

async function fetchSubjects() {
  const { data, error } = await db.from('subjects').select('*');
  if (error) throw error;

  return (data || []).map(s => ({
    ...s,
    facultyId:  s.faculty_id,        // map snake_case → camelCase the UI expects
    nextTest:   s.next_test,
    hue:        s.hue        ?? 215,
    credits:    s.credits    ?? 0,
    progress:   s.progress   ?? 0,   // not in DB yet — safe default
    syllabus:   s.syllabus   ?? [],  // not in DB yet
    lectures:   s.lectures   ?? [],
    notes:      s.notes      ?? [],
    attendance: s.attendance ?? { present: 0, total: 0, history: [] },
  }));
}

async function loadAppData() {
  const [faculty, subjects] = await Promise.all([
    fetchFaculty(),
    fetchSubjects(),
  ]);
  FACULTY  = faculty;    // assigns to script.js globals
  SUBJECTS = subjects;
}


/* --- Data layer --- */

async function fetchAppData() {
  // 1. Fetch Faculty
  const { data: facData, error: facErr } = await db.from('faculty').select('*');
  if (facErr) throw facErr;

  // 2. Fetch Subjects (with lectures, notes, syllabus)
  const { data: subData, error: subErr } = await db.from('subjects').select(`
    *,
    lectures (*),
    notes (*),
    syllabus_modules ( *, syllabus_topics (*) )
  `);
  if (subErr) throw subErr;

  // 3. Fetch Mock Tests
  const { data: testData } = await db.from('mock_tests').select('*');

  // 4. Fetch Attendance and Progress
  let attData = [];
  let progData = [];
  
  if (state.user) {
    // ✨ THIS IS THE FIX: If Admin, fetch ALL attendance. If Student, fetch only their own.
    let attQuery = db.from('attendance').select('*');
    if (state.user.role !== 'admin') {
      attQuery = attQuery.eq('student_id', state.user.id);
    }
    const { data: att } = await attQuery;
    attData = att || [];

    // Progress is always only for the logged-in user
    const { data: prog } = await db.from('student_progress').select('*').eq('student_id', state.user.id);
    progData = prog || [];
  }

  // 5. Fetch Test Results and sync to LocalStorage
  if (state.user) {
    const { data: resultsData } = await db.from('test_results').select('*').eq('student_id', state.user.id);
      
    if (resultsData && resultsData.length > 0) {
      const localResults = {};
      resultsData.forEach(r => {
        const testDataObj = QUESTIONS[r.test_id];
        const reconstructedQuestions = testDataObj ? testDataObj.questions.map(q => ({
          ...q,
          chosen: r.answers && r.answers[q.id] !== undefined ? r.answers[q.id] : undefined
        })) : [];

        localResults[r.test_id] = {
          testId: r.test_id,
          title: testDataObj?.title || 'Mock Test',
          subjectId: testDataObj?.subjectId || '',
          score: r.score,
          total: r.total,
          accuracy: r.accuracy,
          timeTaken: r.time_taken,
          topics: typeof r.topics === 'string' ? JSON.parse(r.topics) : r.topics,
          answers: typeof r.answers === 'string' ? JSON.parse(r.answers) : r.answers,
          questions: reconstructedQuestions
        };
      });
      localStorage.setItem('bf_results', JSON.stringify(localResults));
    }
  }

  // --- MAP DATA ---
  const completedTopicIds = new Set(progData.map(p => p.topic_id));
  const faculty = {};
  (facData || []).forEach(f => { faculty[f.id] = { ...f, facultyId: f.id }; });

  if (typeof QUESTIONS !== 'undefined' && testData) {
    testData.forEach(t => {
      QUESTIONS[t.id] = {
        subjectId: t.subject_id,
        title: t.title,
        duration: t.duration,
        questions: typeof t.questions === 'string' ? JSON.parse(t.questions) : t.questions
      };
    });
  }

  const subjects = (subData || []).map(s => {
    const subjAtt = attData.filter(a => a.subject_id === s.id);
    const presentCount = subjAtt.filter(a => a.status === 'present').length;
    const totalCount = subjAtt.length;
    const history = subjAtt.sort((a,b) => new Date(b.date) - new Date(a.date)).map(a => ({ date: a.date, status: a.status }));

    let totalTopics = 0;
    let completedTopics = 0;
    
    const syllabus = (s.syllabus_modules || [])
      .sort((a,b) => a.order_index - b.order_index)
      .map(m => ({
        title: m.title,
        topics: (m.syllabus_topics || []).sort((a,b) => a.order_index - b.order_index).map(t => {
          totalTopics++;
          const isCompleted = completedTopicIds.has(t.id);
          if (isCompleted) completedTopics++;
          return { id: t.id, title: t.title, completed: isCompleted };
        })
      }));

    const progress = totalTopics > 0 ? Math.round((completedTopics / totalTopics) * 100) : 0;

    return {
      ...s,
      facultyId: s.faculty_id,
      nextTest:  s.next_test,
      hue:       s.hue ?? 215,
      credits:   s.credits ?? 0,
      progress:  progress,
      syllabus:  syllabus,
      lectures:  (s.lectures || []).map(l => ({ ...l, watched: false })),
      notes:     s.notes || [],
      attendance: { present: presentCount, total: totalCount, history: history }
    };
  });

  return { faculty, subjects };
}

// Add this new function at the bottom of auth.js
async function toggleTopicProgress(topicId, currentlyCompleted) {
  if (currentlyCompleted) {
    const { error } = await db.from('student_progress')
      .delete()
      .match({ student_id: state.user.id, topic_id: topicId });
    if (error) throw error;
  } else {
    const { error } = await db.from('student_progress')
      .insert({ student_id: state.user.id, topic_id: topicId });
    if (error) throw error;
  }
}


async function fetchAdminStudents() {
  const { data, error } = await db
    .from('profiles')
    .select('*')
    .eq('role', 'student'); // Only get students, not admins
    
  if (error) throw error;
  
  // Format them to match what the UI expects
  return (data || []).map(s => ({
    id: s.id,
    name: s.name || s.email.split('@')[0], // fallback if name is missing
    email: s.email,
    year: 'N/A', // Your profiles table doesn't have these yet
    batch: 'N/A',
    attendance: 0, // Hardcoded for now
    status: 'active'
  }));
}

async function dbAddFaculty(data) {
  const { error } = await db.from('faculty').insert(data);
  if (error) throw error;
}

async function dbAddSubject(data) {
  const { error } = await db.from('subjects').insert(data);
  if (error) throw error;
}

async function dbAddLecture(data) {
  console.log("sending to supabase!");
  const { error } = await db.from('lectures').insert(data);
  if (error) throw error;
}

async function dbAddNote(data) {
  console.log("Notes sent to supabase");
  const { error } = await db.from('notes').insert(data);
  if (error) throw error;
}

async function getFullUser(sbUser) {
  if (!sbUser) return null;
  const user = normalizeUser(sbUser);
  try {
    const { data: profile } = await db.from('profiles').select('role').eq('id', user.id).single();
    if (profile) {
      user.role = profile.role === 'admin' ? 'admin' : 'student';
    }
  } catch (e) { /* Ignore profile fetch errors */ }
  return user;
}

async function dbDeleteFaculty(id) {
  const { error } = await db.from('faculty').delete().eq('id', id);
  if (error) throw error;
}
async function dbUpdateFaculty(id, data) {
  const { error } = await db.from('faculty').update(data).eq('id', id);
  if (error) throw error;
}
async function dbDeleteStudent(id) {
  const { error } = await db.from('profiles').delete().eq('id', id);
  if (error) throw error;
}

async function dbAddAttendance(data) {
  const { error } = await db.from('attendance').insert(data);
  if (error) throw error;
}

async function dbAddModule(data) {
  const { data: res, error } = await db.from('syllabus_modules').insert(data).select().single();
  if (error) throw error;
  return res;
}

async function dbAddTopic(data) {
  const { error } = await db.from('syllabus_topics').insert(data);
  if (error) throw error;
}