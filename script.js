// Scrivere un programma che chieda all’utente:
// Il numero di chilometri da percorrere,
// Età del passeggero,
// Sulla base di queste informazioni dovrà calcolare il prezzo totale 
// del biglietto di viaggio, secondo le seguenti regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km),
// va applicato uno sconto del 20% per i minorenni,
// va applicato uno sconto del 40% per gli over 65.,

// MILESTONE 1:
// Iniziamo implementando il programma senza alcuna estetica: usando 
// esclusivamente due input e un bottone (non stilizzati), realizziamo 
// le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa 
// da scrivere in console. 

// MILESTONE 2:
// Solo una volta che il milestone 1 sarà completo e funzionante allora 
// realizzeremo un form in pagina in cui l’utente potrà inserire i dati 
// e visualizzare il calcolo finale con il prezzo. 
// Il recap dei dati e l'output del prezzo finale, andranno quindi 
// stampati in pagina (il prezzo dovrà essere formattato con massimo due 
//     decimali, per indicare i centesimi sul prezzo). 

// Nota:
// Se non vi sentite particolarmente creativi, questa potrebbe essere un’implementazione 
// da seguire per il secondo milestone. Potete scegliere di implementare una soluzione 
// completamente diversa oppure simile, ma in ogni caso cercate di farla vostra.

const kmElem = document.getElementById(km);
const etaElem = document.getElementById(eta);
const costoPerKm = kmElem * 0.21 ;
let risultato = 0;


const btnElem = document.querySelector("button");
btnElem.addEventListener("click", function(){
    if(etaElem < 18 && etaElem > 0){
        // sconto minorenni
        risultato = costoPerKm / 100 * 80;
    } else 
    if(etaElem >= 65){
        // sconto over 65
        risultato = costoPerKm / 100 * 60;

    } else if(etaElem >= 18 && etaElem <65){
        // eta senza sconti 
        risultato = costoPerKm;
    } else{
        // eta non valida
        risultato = 'eta non valida';
    }
    console.log(risultato)
})