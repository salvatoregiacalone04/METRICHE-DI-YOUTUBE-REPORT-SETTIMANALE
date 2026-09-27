import { supabaseConfig, isSupabaseConfigured } from './supabase-config.js';

document.body.classList.add('auth-pending');

const supabase = window.supabase?.createClient(
  supabaseConfig.url,
  supabaseConfig.publishableKey,
);

if (!isSupabaseConfigured || !supabase) {
  window.location.replace('auth.html');
} else {
  const loadUser = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session?.user) {
      window.location.replace('auth.html');
      return;
    }

    document.body.classList.remove('auth-pending');
    const user = session.user;
    const name = user.user_metadata?.full_name || user.user_metadata?.name || user.email?.split('@')[0] || 'Utente';
    const userName = document.querySelector('[data-auth-user-name]');
    const userAvatar = document.querySelector('[data-auth-user-avatar]');
    if (userName) userName.textContent = name;
    if (userAvatar) userAvatar.textContent = name.split(' ').map((part) => part[0]).join('').slice(0, 2).toUpperCase();
    document.querySelector('#logoutButton')?.addEventListener('click', () => supabase.auth.signOut());
  };

  loadUser();
}
