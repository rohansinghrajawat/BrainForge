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