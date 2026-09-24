import { initializeApp } from 'https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js';
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from 'https://www.gstatic.com/firebasejs/12.19.0/firebase-auth.js';
import { firebaseConfig, isFirebaseConfigured } from './firebase-config.js';

const message = document.querySelector('#authMessage');
const configMessage = document.querySelector('#authConfig');
const buttons = [...document.querySelectorAll('[data-provider]')];
const credentialsForm = document.querySelector('#credentialsForm');
const credentialsButton = credentialsForm?.querySelector('button[type="submit"]');
const emailInput = document.querySelector('#email');

const setLoading = (loading) => {
  buttons.forEach((button) => { button.disabled = loading; });
  if (credentialsButton) credentialsButton.disabled = loading;
};

if (!isFirebaseConfigured) {
  configMessage.hidden = false;
  setLoading(true);
} else {
  const auth = getAuth(initializeApp(firebaseConfig));
  onAuthStateChanged(auth, (user) => { if (user) window.location.replace('index.html'); });
  const providers = { google: GoogleAuthProvider };

  buttons.forEach((button) => button.addEventListener('click', async () => {
    const provider = new providers[button.dataset.provider]();
    message.textContent = '';
    setLoading(true);
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      const errors = {
        'auth/popup-closed-by-user': 'La finestra di accesso è stata chiusa.',
        'auth/popup-blocked': 'Il browser ha bloccato la finestra. Consenti i popup e riprova.',
        'auth/account-exists-with-different-credential': 'Esiste già un account con un altro provider.',
      };
      message.textContent = errors[error.code] || 'Accesso non riuscito. Controlla la configurazione OAuth.';
      setLoading(false);
    }
  }));

  credentialsForm?.addEventListener('submit', async (event) => {
    event.preventDefault();
    message.textContent = '';
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, emailInput.value.trim(), credentialsForm.password.value);
    } catch (error) {
      const errors = {
        'auth/invalid-credential': 'Email o password non valide.',
        'auth/invalid-email': 'Inserisci un indirizzo email valido.',
        'auth/user-disabled': 'Questo account è stato disabilitato.',
      };
      message.textContent = errors[error.code] || 'Accesso non riuscito. Controlla le credenziali e riprova.';
      setLoading(false);
    }
  });
}
