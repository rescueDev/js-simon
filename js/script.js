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
    timer();
    while (randomNumbers.length < 5) {
      var numeroRandom = randomGenNumb(); //variabile che mi salva il valore random generato dalla funzione
      if (randomNumbers.includes(numeroRandom) === false) {
        //se l'array non include un numero random già presente

        randomNumbers.push(numeroRandom); //pusho il numero se non è doppio
      }
    }
    //output numeri generati
    var numeriSeparati = randomNumbers.join(" - ");
    $(".campo").addClass("gen");
    $(".campo").text(numeriSeparati);

    timer();
    //timeout per memorizzare numeri
    setTimeout(function () {
      alert("Bene adesso devi indovinarli!! Clicca Ok per continuare");

      //funzione con prompt richiesta numeri
      askGame(); //chiedo i numeri all'utente

      //OUTPUT
      $(".match , .risultato").addClass("active");
      $(".risultati").text("Numeri matchati e indovinati: " + matchedNumber); //numeri indovinati
      $(".punteggio").text("Punteggio : " + matchedNumber.length); //Punteggio
      console.log("Match: " + matchedNumber); //Numeri indovinati
      console.log("Punteggio : " + matchedNumber.length); //Punteggio

      $(".reload").removeClass("invisible");
      $(".reload").addClass("visible");
    }, 31000);

    console.log(randomNumbers); //mostrami array con numeri random
  });

  //bottone che al click mi ricarica la pagina per giocare di nuovo
  $(".reload").click(function () {
    location.reload();
  });

  /*---------------------------------------------------------------------------------------------------------------- */

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

  //funzione per generare countdown visibile nella pagina
  function timer() {
    var counter = 30; //faccio partire il contatore
    setInterval(function () {
      counter--; //decremento il contatore ogni secondo

      //quando il tempo arriva a 0 faccio sparire sia tempo rimanente che il contatore
      if (counter >= 0) {
        $(".tempo-rim").text("Tempo rimanente: ");
        $(".timer").text(counter);
      }

      //quando il contatore raggiunge lo 0 faccio sparire tempo rimanente e lo 0
      if (counter === 0) {
        $(".timer , .tempo-rim , .campo").fadeOut(counter);
        clearInterval(counter); //azzero il timeout
      }
    }, 1000); //1 sec ogni decremento
  }
});
