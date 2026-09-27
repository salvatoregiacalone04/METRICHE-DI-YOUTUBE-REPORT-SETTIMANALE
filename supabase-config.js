// Configurazione pubblica di Supabase.
// Inserisci qui il Project URL e la Publishable key del progetto Supabase.
export const supabaseConfig = {
  url: 'https://bsbtfokaihnyqozozmpt.supabase.co',
  publishableKey: 'sb_publishable_-flvgpNkWrX8lkdep868Tw_IcWJMhBL',
};

export const isSupabaseConfigured = !Object.values(supabaseConfig)
  .some((value) => value.startsWith('INSERISCI_'));
