$(document).ready(function(){
  // salvataggio e creazione variabili
  var tastoInvio = $(".tasto-invio");

  // al click c'è l'invio del messaggio
  tastoInvio.click(
    function(){
      // prendo il valore presente nella barra di scrittura e lo salvo
      var testoInput = $(".barra-scrittura input").val();
      // inserisco nella finestra messaggi ciò che è scritto nella barra di scrittura
      $(".selected").append( "<div class='mex-inviato' style=''><p>" + testoInput + "</p> <div class='mutendina'> Cancella </div></div>");
      // azzero il valore della barra di scrittura
      $(".barra-scrittura input").val("");
      // invio di messaggio automatico
      setTimeout(function(){
        $(".selected").append("<div class='mex-ricevuto' style=''><p> OK </p> <div class='mutendina'> Cancella </div></div>");
      }, 1000);
    }
  )

  /////////////////////////////// filtro contatti ///////////////////////////////

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

 // salvo la finestra in una varaibile
 var finestraMessaggio = $(".finestra-messaggi");

// succede qualcosa al click del contatto
   contattoConversazione.click(
     function(){
       // togli la classe active a tutti i contatti conversazione
       contattoConversazione.removeClass("active");
       // inserisci la classe active solo al contatto cliccato
       $(this).addClass("active");
       // recupero la info che riguarda il data attribute della conversazione
       var dataConversazioneContatto = $(this).attr("data-conversazione");
       // nascondo tutte le finestre
       finestraMessaggio.removeClass("selected");
       // seleziono anche la finestra di messaggio corrispondente
       var conversazioneDaMostrare = $(".finestra-messaggi[data-conversazione=" + dataConversazioneContatto + "]");
       conversazioneDaMostrare.addClass("selected");
     }
   )

   // se clicco sul messaggio si apre una tendina sotto con scritto
   // cancella

  var messaggioRicevuto = $(".mex-ricevuto");
  var messaggioInviato = $(".mex-inviato");

  // per messaggio inviato
  $(document).on("click", ".mex-inviato",
    function(){
      $(this).find(".mutendina").toggle();
    }
  );
  // anche per messaggio ricevuto
  $(document).on("click", ".mex-ricevuto",
    function(){
      $(this).find(".mutendina").toggle();
    }
  );

  // se clicco su cancella viene cancellato il messaggio.
  $(document).on("click", ".mutendina",
    function(){
      $(this).parent().hide();
    }
  );



   // Creare la freccetta all'hover del messaggio

   // var messaggioInviato = $(".mex-inviato p");
   // var messaggioRicevuto = $(".mex-ricevuto p");
   //
   // messaggioInviato.hover(
   //   function(){
   //     $(this).append('<i class="fas fa-chevron-down"></i>');
   //   }, function() {
   //     $(this).find("i").last().remove()
   //   }
   // );
   // messaggioRicevuto.hover(
   //   function(){
   //     $(this).append('<i class="fas fa-chevron-down"></i>');
   //   }, function() {
   //     $(this).find("i").last().remove()
   //   }
   // );


   // Cancella messaggio: cliccando sul messaggio appare un menu a tendina che permette di cancellare il messaggio selezionato
    // son riuascito ad agganciarte l'evento sul "delete" potrò dirgli una roba tipo this.padre.cancella();
    // $('.mex-inviato p').on("click", "i",
    //    function () {
    //      $(".mutendina").toggle();
    //     // $(this).hide();
    //    }
    //
    // );
    ///////////////////////////////////////////////////////////
  //   var messaggioInviato = $(".mex-inviato p");
  //   var messaggioRicevuto = $(".mex-ricevuto p");
  //
  //   $(document).on("click", ".mex-inviato p",
  //   function(){
  //     $(this).append('<i class="fas fa-chevron-down"></i>');
  //   }, function() {
  //     $(this).find("i").last().remove()
  //   }
  // );

});
