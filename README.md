# METRICHE-DI-YOUTUBE-REPORT-SETTIMANALE

Dashboard responsive per monitorare le performance settimanali di un canale YouTube.

## Avvio

Apri `index.html` nel browser oppure avvia un server statico nella cartella del progetto.

La dashboard include dati demo, grafici responsive, selettore del periodo e pulsante di
esportazione pronto per essere collegato a una generazione PDF o CSV.

## Autenticazione OAuth con Supabase

La dashboard usa Supabase Authentication con accesso Google.

1. Configura Google OAuth nella dashboard Supabase.
2. Inserisci gli URL autorizzati e il redirect URL del sito nelle impostazioni Supabase.
3. Verifica i valori pubblici in `supabase-config.js`.
4. Apri `auth.html` oppure pubblica la cartella su un hosting statico con HTTPS.

Il frontend usa solo il Project URL e la Publishable key, che sono valori pubblici. Non
inserire mai chiavi private o secret OAuth nel codice client.
