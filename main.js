$(document).ready(function(){
  // salvataggio e creazione variabili
  var tastoInvio = $(".tasto-invio");

  // al click c'è l'invio del messaggio
  tastoInvio.click(
    function(){
      var testoInput = $(".barra-scrittura input").val();
      $(".finestra-messaggi").append("<div class='mex-inviato'><p>" + testoInput + "</p></div>");
      $(".barra-scrittura input").val("Scrivi un messaggio");
    }
  )

  // function () {
  //    var input = $('input').val();
  //    // console.log(input);
  //    contenitore.append("<li>" + input + "</li>");
  //    $('input').val("");
  //  }



});
