//Computer genera 5 numeri random univoci

//creo array numeri random vuoto da popolare
var randomNumbers = [];

//creo array vuoto dei numeri che scrive l'utente
var userNmbr = [];

//creo array vuoto dove andranno i match di numeri finali
var matchedNumber = [];

//ciclo per creare 5 numeri finchè l'array non abbia lunghezza 5
while (randomNumbers.length < 5) {
  var numeroRandom = randomGenNumb(); //variabile che mi salva il valore random generato dalla funzione
  if (randomNumbers.includes(numeroRandom) === false) {
    //se l'array non include un numero random già presente
    randomNumbers.push(numeroRandom); //pusho il numero se non è doppio
  }
}

console.log(randomNumbers); //mostrami array con numeri random

//alert mi mostra i 5 numeri
alert(
  "I numeri generati sono: " +
    randomNumbers +
    " Hai 30 secondi per memorizzarli !!"
);

//parte un timer di 30secondi quando schiaccio ok sull'alert

setTimeout(askGame, 3000); //viene chiesto 5 volte all'utente di inserire un numero (univoco) in un prompt

//FUNZIONI GENERALI

//funzione che genera numeri random univoci
function randomGenNumb() {
  var rndNmb = Math.floor(Math.random() * 100) + 1;
  return rndNmb;
}

//funzione che chiede i numeri all'utente con casi limite
function askGame() {
  var i = 0;
  while (userNmbr.length < 5) {
    var askNumb = parseInt(prompt("Inserisci il numero"));
    console.log(askNumb);

    // se numero è uguale a 0 o non viene inserito un numero
    if (askNumb === 0 || isNaN(askNumb)) {
      alert("Numero non valido"); //avvisa l'utente che deve riprovare

      // se il numero inserito è già stato inserito
    } else if (userNmbr.includes(askNumb) == true) {
      alert("Hai già inserito questo numero!!!"); //avvisa l'utente di riprovare

      //altrimenti popola l'array dell'utente con il numero
    } else if (userNmbr.includes(askNumb) == true) {
      alert("Hai già inserito questo numero!!!");
    } else {
      userNmbr.push(askNumb);
      console.log("Numeri utente: ", userNmbr);
      if (randomNumbers.includes(askNumb) === true) {
        matchedNumber.push(askNumb);
        console.log(matchedNumber);
      }
    }

    i++;
  }
  //infine il pc mi dice quanti e quali numeri ho azzeccato (eventuale bonus=punteggio)

  console.log("NUmeri matchati e indovinati: " + matchedNumber); //Numeri indovinati
  console.log("Punteggio : " + matchedNumber.length); //Punteggio
}
