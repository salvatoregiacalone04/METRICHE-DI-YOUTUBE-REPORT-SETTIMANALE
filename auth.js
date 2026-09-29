import { supabaseConfig, isSupabaseConfigured } from './supabase-config.js';

const message = document.querySelector('#authMessage');
const configMessage = document.querySelector('#authConfig');
const buttons = [...document.querySelectorAll('[data-provider]')];
const supabase = window.supabase?.createClient(
  supabaseConfig.url,
  supabaseConfig.publishableKey,
);

const setLoading = (loading) => {
  buttons.forEach((button) => { button.disabled = loading; });
};

if (!isSupabaseConfigured || !supabase) {
  configMessage.hidden = false;
  setLoading(true);
} else {
  supabase.auth.onAuthStateChange((event, session) => {
    if (session?.user && event !== 'SIGNED_OUT') window.location.replace('index.html');
  });

  buttons.forEach((button) => button.addEventListener('click', async () => {
    message.textContent = '';
    setLoading(true);

    const { error } = await supabase.auth.signInWithOAuth({
      provider: button.dataset.provider,
      options: {
        redirectTo: `${window.location.origin}/index.html`,
        queryParams: {
          access_type: 'offline',
        },
      },
    });

    if (error) {
      message.textContent = 'Accesso non riuscito. Controlla la configurazione OAuth di Supabase.';
      setLoading(false);
    }
  }));
}
