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

  /////////////////////////////// filtro contatti///////////////////////////////

  // salvo l'informazione della barra di ricerca
  var barraRicercaContatti = $(".box-ricerca-contatti input");
  // salvo l'info del blocco contatto/utente
  var contattoConversazione = $(".contatto");

// Dicono che l'evento deve avvenire sulla barra di ricerca dei contatti
// on serve a tenere attivo gli eventi ed input serve a fare in modo che prenda
// quello che scrivo all'interno in tempo reale

  barraRicercaContatti.on("input",
    function(){
      console.log("evento");
      // salvo il contenuto della barra (quello che scrivo)
      var testoDaRicercare = barraRicercaContatti.val();
      // per ogni contatto che ho nella lista utenti
      contattoConversazione.each(
        function(){
          // salvo l'info del nome utente
          var nomeUtenteConversazione = $(this).find("h4").text();
          // controllo se la key premuta è nel nome utente
          if (nomeUtenteConversazione.toLowerCase().includes(testoDaRicercare.toLowerCase())) {
            $(this).show();
          } else {
            $(this).hide();
          }
        }
      )
    }
  );
  // Click sul contatto mostra la conversazione del contatto cliccato
  // click sul contatto che ha data-attr che corrisponde a stesso data-attr in chat
 // salvo il valore dell'attr e lo usso per dire quale chat è attiva

 // salvo la finestra in una varaibile
 var finestraMessaggio = $(".finestra-messaggi");

// succede qualcosa al click del contatto
   contattoConversazione.click(
     function(){
       // togli la classe active a tutti i contatti conversazione
       contattoConversazione.removeClass("active");
       // inserisci la classe active solo al contatto cliccato
       $(this).addClass("active");
       // seleziono anche la finestra di messaggio corrispondente
       if ($(this).hasClass("active")) {
         var contattoSelezionato = $(this).attr("data-conversazione");
         var finestraSelezionata = finestraMessaggio.is(contattoSelezionato);
         console.log(finestraSelezionata);
       } else {
         console.log("NO");
       }

     }
   )

});
