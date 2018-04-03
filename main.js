$(document).ready(function(){

  var nomiGiocatori = [];
  //Creo gli oggetti e gli assegno dei valori
  for (var i = 0; i < 100; i++) {
    var codiceGiocatore = creaCodice();
    var puntiFatti = Math.floor(Math.random() * 31);
    var rimbalzi = Math.floor(Math.random()*(55 - 20 + 1) + 20);
    var falli = Math.floor(Math.random() * 3);
    var percSuccDuePunti = Math.floor((Math.random() * 100) + 1);
    var percSuccTrePunti = Math.floor((Math.random() * 100) + 1);
    var nomeGiocatore = {
        "codice_Giocatore" : codiceGiocatore,
        "punti_Segnati" : puntiFatti,
        "num_Rimbalzi" : rimbalzi,
        "falli" : falli,
        "successo_duePunti" : percSuccDuePunti,
        "successo_trePunti" : percSuccTrePunti
    }
    nomiGiocatori.push(nomeGiocatore);
  }
  console.log(nomiGiocatori);

  //assegno ad una variabile la ul
  $("#searchButton").click(function(){
    //svuoto ogni volta il div perché voglio che sparisca il messaggio di errore
    $("#errorMsg").html("");
    $("#errorMsg").html("");
    $("#listOfStats").html("");
    $("#listOfValues").html("");
    //assegno alla variabile playerCode l'input inserito
    var playerCode = $("#playerCode").val();
    $("#playerCode").val("");
    //eseguo una ricerca del codice del giocatore
    var isFound = isFoundCode(nomiGiocatori, playerCode);
    if(isFound[0] == false){
      $("#errorMsg").html("Hai inserito un codice errato o inesistente. Riprova!");
    }
    else{
      var keylist = Object.keys(nomiGiocatori[isFound[1]]);
      for (var i = 0; i < keylist.length; i++) {
        $("#listOfStats").append("<li>" + keylist[i] + ":" + "</li>");
        $("#listOfValues").append("<li>" + nomiGiocatori[isFound[1]][keylist[i]] + "</li>");
      }
      $("#imageOfPlayer").attr("src", "http://cdn5.acolore.com/disegni/colori/201802/giovane-giocatore-di-basket-sport-pallacanestro-1133632.jpg");
    }
  })
  //FUNZIONI
  function creaCodice(){
    var codPlayer = "";
    var casualNumber = "";
    for (var i = 0; i < 3; i++) {
      //Genero una lettera casuale maiuscola prendendo i valori dall'unicode
      var casualLetter = String.fromCharCode(Math.floor((Math.random()*(90 - 65 + 1) + 65)));
      codPlayer += casualLetter;
    }
    for (var i = 0; i < 3; i++) {
      casualNumber = Math.floor((Math.random() * 9) + 1);
      codPlayer += casualNumber;
    }
    return codPlayer;
  }

  function isFoundCode(arrGiocatori, codGiocatore){
    //Ho creato un array perché oltre al vero e al falso devo vedere in quale posizione si trova il giocatore trovato
    var isCodeFound = [false , -1];
    var index = 0;
    while((isCodeFound[0] == false) && (index < arrGiocatori.length)){
      if(arrGiocatori[index].codice_Giocatore == codGiocatore){
        isCodeFound = [true, index];
        return isCodeFound;
      }
      index++;
    }
    if(isCodeFound[0] == false){
      return isCodeFound;
    }
  }
});
