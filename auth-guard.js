import { initializeApp } from 'https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js';
import { getAuth, onAuthStateChanged, signOut } from 'https://www.gstatic.com/firebasejs/12.19.0/firebase-auth.js';
import { firebaseConfig, isFirebaseConfigured } from './firebase-config.js';
document.body.classList.add('auth-pending');
if (!isFirebaseConfigured) { window.location.replace('auth.html'); } else {
  const auth = getAuth(initializeApp(firebaseConfig));
  onAuthStateChanged(auth, (user) => {
    if (!user) { window.location.replace('auth.html'); return; }
    document.body.classList.remove('auth-pending');
    const name = user.displayName || user.email?.split('@')[0] || 'Utente';
    const userName = document.querySelector('[data-auth-user-name]'); const userAvatar = document.querySelector('[data-auth-user-avatar]');
    if (userName) userName.textContent = name;
    if (userAvatar) userAvatar.textContent = name.split(' ').map((part) => part[0]).join('').slice(0, 2).toUpperCase();
    document.querySelector('#logoutButton')?.addEventListener('click', () => signOut(auth));
  });
}
