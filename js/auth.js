const { createClient } = supabase;
const sb = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Detecta la base del proyecto automáticamente
const BASE_URL = window.location.pathname.includes('/html/')
  ? '../'
  : './';

async function checkSession() {
  const { data: { session } } = await sb.auth.getSession();
  if (!session) {
    window.location.href = BASE_URL + 'index.html';
    return null;
  }
  return session;
}

async function logout() {
  await sb.auth.signOut();
  window.location.href = BASE_URL + 'index.html';
}