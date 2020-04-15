$(document).ready(function(){
  // salvataggio e creazione variabili
  var tastoInvio = $(".tasto-invio");
  var barraInvioMessaggio = $(".barra-scrittura input");

  // fare in modo che quando clicco su qualsiasi


  // fare in modo che venga mostrata la freccia di invio al click (focus) nella barra di scrittura e nascosto il microfono e viceversa quando non c'è focus.

  // quando c'è focus
  barraInvioMessaggio.focus(
    function(){
      $("#mic").hide();
      $("#arrow").show();
    }
  );
  // quando non c'è focus
  barraInvioMessaggio.focusout(
    function(){
      $("#mic").show();
      $("#arrow").hide();
    }
  );


  //// variabili per utilizzo e attuazione del handlebars ////
  // Prendo quello che è contenuto nello script selezionandolo tramite id
  var source = $("#template-mex-inviato").html();
  // ciò che ho preso lo do a Handlebars e glielo faccio smaneggiare
  var template = Handlebars.compile(source);

  /////////////////// al click c'è l'invio del messaggio
  tastoInvio.click(
    function(){
      // prendo il valore presente nella barra di scrittura e lo salvo
      var testoInput = $(".barra-scrittura input").val();
      // se la barra non è vuota
      if (testoInput !== "") {
        // creo oggetto contente l'informaizone del messaggio che ci serve inserire, facendo attenzione a definire le key da sostituire all'interno dell'html
        var testoInputObject = {
          MessaggioChat: testoInput,
          TipoDiMessaggio: "mex-inviato"
        };
        // creo una variabile che contiene l'informazione completa del tamplate + il testo inserito dinamicamente
        var html = template(testoInputObject);
        // inserisco nella finestra messaggi ciò che è scritto nella barra di scrittura (quindi l'informazione presa prima)
        $(".selected").append(html);
        // azzero il valore della barra di scrittura
        $(".barra-scrittura input").val("");
        // invio di messaggio automatico - Rispetto a prima inserisco solo come messaggio l'ok ma non l'input inserito
        setTimeout(function(){
          var testoAutomaticoObject = {
            MessaggioChat: "ok dai",
            TipoDiMessaggio: "mex-ricevuto"
          };
          var html = template(testoAutomaticoObject);
          $(".selected").append(html);
        }, 1000);
      } else {
        alert("Non hai un microfono attivo");
      }
    }
  );

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
       // recupero la info riguardo il nome contatto e l'immagine
       var dataImmagineContatto = $(this).find("img").clone();
       var dataNomeContatto = $(this).find("h4").clone();
       // nascondo tutte le finestre
       finestraMessaggio.removeClass("selected");
       // seleziono anche la finestra di messaggio corrispondente
       var conversazioneDaMostrare = $(".finestra-messaggi[data-conversazione=" + dataConversazioneContatto + "]");
       // mostro la finestra corrispondete selezionata
       conversazioneDaMostrare.addClass("selected");
       // aggiungo il nome contatto e l'immagine del contatto
       // rimuovo
       $(".foto-profilo-selezionato").empty();
       $(".testo-contatto-selezionato").empty();
       // aggiungo
       $(".foto-profilo-selezionato").append(dataImmagineContatto);
       $(".testo-contatto-selezionato").append(dataNomeContatto);
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
      $(this).parent().remove();
    }
  );

});
