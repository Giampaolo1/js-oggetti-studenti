//  - Creare un OGGETTO che descriva uno studente con le seguenti proprietà:
// NOME COGNOME ETA. STAMPARE a schermo attraverso il FOR in tutte le proprietà.

//  - Creare un ARRAY di OGGETTI di studenti.
// CICLARE su tutti gli studenti e STAMPARE per ognuno nome e cognome,
//  - Dare la possibilità all utente attraverso 3 PROMPT di aggiungere un nuovo
// OGGETTO STUDENTE inserendo nell ordine nome,cognome,età.

// ESERCIZIO 1

//  - Creare un OGGETTO che descriva uno studente con le seguenti proprietà:

var studente = {
  "Nome": "Fabio",
  "Cognome": "Rossi",
  "Età": "30"
};
console.log("Esercizio1");
// STAMPARE le prop via ciclo for.in
for (var prop in studente){
console.log(prop,":",studente[prop]);
}

// console.log("es1",studente);

// ESERCIZIO 2

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

var studenti = [stud1,stud2,stud3];
console.log("Esercizio2");
console.log("studenti prima del prompt", studenti);

//  - Dare la possibilità all utente attraverso 3 PROMPT di aggiungere un nuovo
// OGGETTO STUDENTE inserendo nell ordine nome,cognome,età.

//// ciclo for ----- stampo nome e cognome degli studenti nell ARRAY

for (var i = 0; i < studenti.length; i++) {
  // console.log(studenti[i].nome, studenti[i].cognome);
}

  var nuovoNome = prompt("Nome:");
  var nuovoCognome = prompt("Cognome:");
  var nuovaEtà = prompt("Età:");

  var nuovoStudente = {
    "Nome": nuovoNome,
    "Cognome": nuovoCognome,
    "Età": nuovaEtà
  };

  // pushare nell ARRAY

  studenti.push(nuovoStudente);
  console.log("studenti DOPO del prompt", studenti);

  // STAMPARE le prop via ciclo for.in
  // for (var prop in studente){
  //   console.log(prop,":",studente[prop]);
  // }



// nuovoStudente.push(studenti);
//
// console.log(studenti);
