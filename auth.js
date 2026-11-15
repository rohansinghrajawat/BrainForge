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
  return normalizeUser(data.user);
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
  return normalizeUser(data.session?.user);
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
  db.auth.onAuthStateChange((event, session) => {
    cb(event, normalizeUser(session?.user));
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

  // 2. Fetch Subjects with Deep Joins (Lectures, Notes, Syllabus)
  const { data: subData, error: subErr } = await db.from('subjects').select(`
    *,
    lectures (*),
    notes (*),
    syllabus_modules ( *, syllabus_topics (*) )
  `);
  if (subErr) throw subErr;

  // 3. Fetch Mock Tests from DB
  const { data: testData, error: testErr } = await db.from('mock_tests').select('*');
  if (testErr) throw testErr;

  console.log("TESTS FROM DB:", testData); 

  // 4. Fetch Attendance for the logged-in user
  let attData = [];
  if (state.user) {
    const { data: att, error: attErr } = await db
      .from('attendance')
      .select('*')
      .eq('student_id', state.user.id);
    if (!attErr) attData = att || [];
  }

  // --- MAP DATA TO MATCH SCRIPT.JS EXPECTATIONS ---
  
  const faculty = {};
  (facData || []).forEach(f => { faculty[f.id] = { ...f, facultyId: f.id }; });

  // Inject DB tests into the global QUESTIONS object so the UI picks them up
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
    // Map Attendance
    const subjAtt = attData.filter(a => a.subject_id === s.id);
    const presentCount = subjAtt.filter(a => a.status === 'present').length;
    const totalCount = subjAtt.length;
    const history = subjAtt
      .sort((a,b) => new Date(b.date) - new Date(a.date))
      .map(a => ({ date: a.date, status: a.status }));

    // Map Syllabus
    const syllabus = (s.syllabus_modules || [])
      .sort((a,b) => a.order_index - b.order_index)
      .map(m => ({
        title: m.title,
        topics: (m.syllabus_topics || []).sort((a,b) => a.order_index - b.order_index).map(t => t.title)
      }));

    return {
      ...s,
      facultyId: s.faculty_id,      // snake_case to camelCase
      nextTest:  s.next_test,
      hue:       s.hue ?? 215,
      credits:   s.credits ?? 0,
      progress:  s.progress ?? 0,   // (we'll calculate real progress later)
      syllabus:  syllabus,
      lectures:  (s.lectures || []).map(l => ({ ...l, watched: false })), // default false
      notes:     s.notes || [],
      attendance: { present: presentCount, total: totalCount, history: history }
    };
  });

  return { faculty, subjects };
}