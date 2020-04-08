$(document).ready(function(){
  // salvataggio e creazione variabili
  var tastoInvio = $(".tasto-invio");

  // al click c'è l'invio del messaggio
  tastoInvio.click(
    function(){
      // prendo il valore presente nella barra di scrittura e lo salvo
      var testoInput = $(".barra-scrittura input").val();
      // inserisco nella finestra messaggi ciò che è scritto nella barra di scrittura
      $(".finestra-messaggi").append("<div class='mex-inviato'><p>" + testoInput + "</p></div>");
      // azzero il valore della barra di scrittura
      $(".barra-scrittura input").val("Scrivi un messaggio");
      // invio di messaggio automatico
      setTimeout(function(){
        $(".finestra-messaggi").append("<div class='mex-ricevuto'><p> Sae </p></div>");
      }, 1000);
    }
  )
});
