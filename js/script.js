// RACCOLTA DATI
// DOMANDE:
// 1 Quanti km devi percorrere?
// 2 Quanti anni hai?

// CALCOLI/RAGIONAMENTO:
// costo al km: 0.21
// prezzoTotaleViaggio
// scontoMinorenni 20% (se < 18)
// scontoOver65 40% (se >= 65)
// Totale da pagare (prezzoTotaleViaggio - sconto)

// OUTPUT
// Prezzo del biglietto scontato o non (in decimali)

let kmTotali;
do {
    kmTotali = parseFloat(prompt("Quanti km devi percorrere?"));
} while (isNaN(kmTotali) || kmTotali <= 0 || kmTotali > 500);
const costoAlKm = 0.21;
let età;
do {
    età = parseInt(prompt("Quanti anni hai?"));
} while (isNaN(età) || età <= 0 || età > 120);
const scontoMinorenni = 20;
const scontoOver65 = 40;

const prezzoTotaleViaggio = (kmTotali * costoAlKm);
console.log("Il prezzo totale è: €" + prezzoTotaleViaggio.toFixed(2));

let prezzoTotaleViaggioScontato = prezzoTotaleViaggio;

if (età < 18) {
    const sconto = (prezzoTotaleViaggio * scontoMinorenni / 100);
    prezzoTotaleViaggioScontato = prezzoTotaleViaggio - sconto;
    console.log("Sconto minorenne: €" + sconto.toFixed(2));   
}   else if (età >= 65) { 
    const sconto = (prezzoTotaleViaggio * scontoOver65 / 100);
    prezzoTotaleViaggioScontato = prezzoTotaleViaggio - sconto;
    console.log("Sconto OVER 65: €" + sconto.toFixed(2)); 
}

console.log("Totale da pagare: €" + prezzoTotaleViaggioScontato.toFixed(2));

