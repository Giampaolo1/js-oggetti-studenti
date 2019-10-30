//  - Creare un OGGETTO che descriva uno studente con le seguenti proprietà:
// NOME COGNOME ETA. STAMPARE a schermo attraverso il FOR in tutte le proprietà.

//  - Creare un ARRAY di OGGETTI di studenti.
// CICLARE su tutti gli studenti e STAMPARE per ognuno nome e cognome,
//  - Dare la possibilità all utente attraverso 3 PROMPT di aggiungere un nuovo
// OGGETTO STUDENTE inserendo nell ordine nome,cognome,età.

//  - Creare un OGGETTO che descriva uno studente con le seguenti proprietà:

var studente = {
  "Nome": "Fabio",
  "Cognome": "Rossi",
  "Età": "30"
};

// console.log(studente);

//  - Creare un ARRAY di OGGETTI di studenti.
var studenti = [stud1, stud2, stud3];

console.log(studenti)

// lista studenti
var stud1 = {
  "Nome": "Fabio",
  "Cognome": "Rossi",
  "Età": "30"
};
var stud2 = {
  "Nome": "Marco",
  "Cognome": "Bianchi",
  "Età": "31"
};
var stud3 = {
  "Nome": "Simone",
  "Cognome": "Verdi",
  "Età": "32"
};

//  - Dare la possibilità all utente attraverso 3 PROMPT di aggiungere un nuovo
// OGGETTO STUDENTE inserendo nell ordine nome,cognome,età.

var nuovoStudente = {
  "Nome": prompt("Nome:"),
  "Cognome": prompt("Cognome:"),
  "Età": prompt("Età:")
};

nuovoStudente.push(studenti);
