// Configurazione pubblica dell'app web Firebase.
// Sostituisci questi valori con quelli del tuo progetto Firebase.
export const firebaseConfig = {
  apiKey: 'INSERISCI_API_KEY',
  authDomain: 'INSERISCI_PROJECT_ID.firebaseapp.com',
  projectId: 'INSERISCI_PROJECT_ID',
  appId: 'INSERISCI_APP_ID',
};

export const isFirebaseConfigured = !Object.values(firebaseConfig)
  .some((value) => value.startsWith('INSERISCI_'));
