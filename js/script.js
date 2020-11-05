//Computer genera 5 numeri random univoci

  //creo array numeri random vuoto da popolare
  var randomNumbers = [];

  while (randomNumbers < 5) {
    var numeroRandom = randomGenNumb();
    if (randomNumbers.includes(numeroRandom) === false) {
      //pusho il numero se non è doppio
    }
  }
//parte un timer di 30secondi quando schiaccio ok sull'alert

//viene chiesto 5 volte all'utente di inserire un numero (univoco) in un prompt

  //se non sono numeri doppi me li pusho dentro un array vuoto

  //altrimenti, se sono numeri ripetuti non li pushi nell'array e mi richiedi ancora il numero

//infine il pc mi dice quanti e quali numeri ho azzeccato (eventuale bonus=punteggio)



//FUNZIONI GENERALI

//funzione che genera numeri random univoci

function randomGenNumb () {
  var rndNmb = Math.floor(Math.random()* 100) + 1;
  return rndNmb;
}
