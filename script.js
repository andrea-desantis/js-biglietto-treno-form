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

const kmElem = document.getElementById("km");
const etaElem = document.getElementById("eta");
const btnElem = document.querySelector("button");
const costoPerKm = 0.21 ;

let messaggioCosto = document.getElementById("prezzo");


btnElem.addEventListener("click", function(){
    
    const km = Number(kmElem.value);
    const eta = Number(etaElem.value);
    let risultato = km * costoPerKm;
    if(km <= 0 || eta <= 0 || isNaN(km) || isNaN(eta)){
        // eta non valida
        risultato = 'eta non valida';
        messaggioCosto.innerHTML= 'eta non valida';
    }

    if(eta < 18 && eta > 0){
        // sconto minorenni
        risultato = risultato * 0.8;
        risultato = risultato.toFixed(2);
        messaggioCosto.innerHTML= `${risultato} euro`;
    } else if(eta >= 65){
        // sconto over 65
        risultato = risultato * 0.6;
        risultato = risultato.toFixed(2);
        messaggioCosto.innerHTML= `${risultato} euro`;
    } else{
        risultato = risultato.toFixed(2);
        messaggioCosto.innerHTML= `${risultato} euro`;
        
        }
    
    
})
