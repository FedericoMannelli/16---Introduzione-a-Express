

// Importa il modulo Express per creare un server web.
const express = require('express');

// Crea un'istanza di Express e assegna la variabile 'app'.
const app = express();

// Definizione di route per diverse URL.

// Route per l'URL di root ('/').
app.get('/', (req, res) => {
    // Risponde con il messaggio "Hello World".
    res.send('Hello World');
});

// Route per l'URL '/about'.
app.get('/about', (req, res) => {
    // Risponde con il messaggio "About".
    res.send('About');
});

// Route per l'URL '/Contatti'.
app.get('/Contatti', (req, res) => {
    // Risponde con il messaggio "Contatti".
    res.send('Contatti');
});

// Route catch-all per tutte le altre URL.
app.all('*', (req, res) => {
    // Risponde con un messaggio "Risorsa non trovata" in formato HTML.
    res.send('<h1>Risorsa non trovata</h1>');
});

// Avvia il server e fa ascoltare le richieste in arrivo sulla porta 3000.
app.listen(3000);



/*
1 - Viene importato il modulo Express per creare il server web: const express = require('express');.

2 - Viene creata un'istanza di Express e assegnata alla variabile app: const app = express();.

3 - Sono definiti diversi route per diverse URL utilizzando app.get(). 
Ciascun route gestisce una specifica URL.

4 - Nel primo route (/), quando si accede all'URL di root, 
il server risponde con il messaggio "Hello World".

5 - Nel secondo route (/about), quando si accede all'URL "/about", 
il server risponde con il messaggio "About".

6 - Nel terzo route (/Contatti), quando si accede all'URL "/Contatti", 
il server risponde con il messaggio "Contatti".

7 - È definito un route catch-all app.all('*', ...), che viene eseguito per tutte le altre URL che non corrispondono ai route precedenti. 
In questo caso, il server risponde con un messaggio "Risorsa non trovata" in formato HTML.

8 - Il server viene avviato e messo in ascolto sulla porta 3000 tramite app.listen(3000);. 
Una volta avviato, il server sarà pronto per gestire le richieste in arrivo sulla porta specificata.
*/


/*
const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Hello Word')
    })
app.get('/about', (req, res) => {
    res.send('About')
}) 

app.get('/Contatti', (req, res) => {
    res.send('Contatti')
})

app.all('*', (req, res) => {
    res.send('<h1>Risorsa non trovata<h1>')
})    
app.listen(3000);
*/