# METRICHE-DI-YOUTUBE-REPORT-SETTIMANALE
 # Report settimanale metriche youtube

 Dashboard responsive per monitorare le performance settimanali di un canale YouTube.

 ## Avvio

 Apri `index.html` nel browser oppure avvia un server statico nella cartella del progetto.

La dashboard include dati demo, grafici responsive, selettore del periodo e pulsante di
esportazione pronto per essere collegato a una generazione PDF o CSV.

## Autenticazione OAuth

La dashboard è protetta da Firebase Authentication. Per abilitarla:

1. Crea un progetto su [Firebase Console](https://console.firebase.google.com/), aggiungi una Web App e copia la configurazione.
2. Incolla i valori nel file `firebase-config.js`.
3. In **Authentication → Sign-in method** abilita Google e, se necessari, GitHub e Microsoft.
4. In **Authentication → Settings → Authorized domains** aggiungi il dominio del sito (e `localhost` per lo sviluppo).
5. Apri `auth.html` oppure pubblica la cartella su un hosting statico con HTTPS.

Il file contiene solo la configurazione pubblica della Web App. Non inserire mai chiavi
private o secret OAuth nel frontend. I provider non configurati possono essere rimossi da
`auth.html` e da `auth.js`.
