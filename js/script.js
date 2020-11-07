$("document").ready(function () {
  //Computer genera 5 numeri random univoci

  //aggiungo button che al click mi genera i numeri random

  //creo array numeri random vuoto da popolare
  var randomNumbers = [];

  //creo array vuoto dei numeri che scrive l'utente
  var userNmbr = [];

  //creo array vuoto dove andranno i match di numeri finali
  var matchedNumber = [];

  //ciclo per creare 5 numeri finchè l'array non abbia lunghezza 5
  $(".generate").click(function () {
    while (randomNumbers.length < 5) {
      var numeroRandom = randomGenNumb(); //variabile che mi salva il valore random generato dalla funzione
      if (randomNumbers.includes(numeroRandom) === false) {
        //se l'array non include un numero random già presente

        randomNumbers.push(numeroRandom); //pusho il numero se non è doppio
      }
    }
    var numeriSeparati = randomNumbers.join(" - ");
    $(".campo").text("Numeri generati: " + numeriSeparati); //output numeri generati

    //timeout per memorizzare numeri
    // start fade out in one second, take 300ms to fade
    setTimeout(function () {
      $(".campo").fadeOut();
    }, 3000);

    console.log(randomNumbers); //mostrami array con numeri random

    setTimeout(function () {
      alert("Bene adesso devi indovinarli!! Clicca Ok per continuare");
      //funzione con prompt richiesta numeri
      askGame(); //chiedo i numeri all'utente

      //OUTPUT
      $(".risultati").text("Numeri matchati e indovinati: " + matchedNumber); //numeri indovinati
      $(".punteggio").text("Punteggio : " + matchedNumber.length); //Punteggio
      console.log("NUmeri matchati e indovinati: " + matchedNumber); //Numeri indovinati
      console.log("Punteggio : " + matchedNumber.length); //Punteggio
    }, 5000);
  });

  //infine il pc mi dice quanti e quali numeri ho azzeccato (eventuale bonus=punteggio)

  /* ---------------------------------------------------------------------------------------------------------------- */

  //FUNZIONI GENERALI

  //funzione che genera numeri random univoci
  function randomGenNumb() {
    var rndNmb = Math.floor(Math.random() * 100) + 1;
    return rndNmb;
  }

  //funzione che chiede i numeri all'utente con casi limite e risultato finale
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
  }
});
