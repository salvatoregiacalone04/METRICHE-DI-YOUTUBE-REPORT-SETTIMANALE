import { initializeApp } from 'https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js';
import { getAuth, GithubAuthProvider, GoogleAuthProvider, MicrosoftAuthProvider, onAuthStateChanged, signInWithPopup } from 'https://www.gstatic.com/firebasejs/12.19.0/firebase-auth.js';
import { firebaseConfig, isFirebaseConfigured } from './firebase-config.js';
const message = document.querySelector('#authMessage');
const configMessage = document.querySelector('#authConfig');
const buttons = [...document.querySelectorAll('[data-provider]')];
if (!isFirebaseConfigured) { configMessage.hidden = false; buttons.forEach((button) => { button.disabled = true; }); } else {
  const auth = getAuth(initializeApp(firebaseConfig));
  onAuthStateChanged(auth, (user) => { if (user) window.location.replace('index.html'); });
  const providers = { google: GoogleAuthProvider, github: GithubAuthProvider, microsoft: MicrosoftAuthProvider };
  buttons.forEach((button) => button.addEventListener('click', async () => {
    const provider = new providers[button.dataset.provider](); message.textContent = ''; buttons.forEach((item) => { item.disabled = true; });
    try { await signInWithPopup(auth, provider); } catch (error) {
      const errors = {'auth/popup-closed-by-user':'La finestra di accesso è stata chiusa.','auth/popup-blocked':'Il browser ha bloccato la finestra. Consenti i popup e riprova.','auth/account-exists-with-different-credential':'Esiste già un account con un altro provider.'};
      message.textContent = errors[error.code] || 'Accesso non riuscito. Controlla la configurazione OAuth.'; buttons.forEach((item) => { item.disabled = false; });
    }
  }));
}
