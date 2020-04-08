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

  // filtro contatti
  //gestirte evento su tastiera (oppure su click di bottone di input ricerca)

  // salvo l'informazione della barra di ricerca
  var barraRicercaContatti = $(".box-ricerca-contatti input");
  // salvo l'info del blocco contatto/utente
  var contattoConversazione = $(".contatto");
  // salvo l'info del nome utente
  var nomeUtenteConversazione = $(".nome-utente");

// ad ogni pressione di lettera sulla tastiera
  barraRicercaContatti.keypress(function(){
    // salvo il contenuto della barra (quello che scrivo)
    var testoDaRicercare = barraRicercaContatti.val();
    // per ogni contatto che ho nella lista utenti
    contattoConversazione.each(
      function(){
        // salvo l'info del nome utente
        var nomeUtenteConversazione = $(".nome-utente");
        // controllo se la key premuta è nel nome utente
        if ($(this)) {

        } else {

        }
      }
    )


  });


  // salvarmi input utente in campo del filtro (stringa1)

  // selezionare tutti i blocchi di contatto e ciclare tra di essi (each())
    //salvo in una var il valore del testo del nome nel contatto (stringa2)

    // confronto per vedere se la stringa inserita nell'input è inclusa nel nome del contatto
      //stringa2.includes(stringa1)
      //se l'occorenza è stata trovata lascio il blocco di contatto visibile
      // altrimenti lo rendo non visibile (this)
});
