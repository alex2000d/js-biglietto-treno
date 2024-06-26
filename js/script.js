let km = prompt("inserisci quanti km vuoi percorrere");
let eta = prompt("inserisci la tua eta");

let prezzo_biglietto = 0.21 * km;
 console.log(prezzo_biglietto);
  let prezzo_finale = prezzo_biglietto;


if (eta < 18) {
    
    let sconto = prezzo_biglietto * 0.2;
    prezzo_finale = prezzo_finale - sconto;
}
else if (eta > 65) {
    
    let sconto = prezzo_biglietto * 0.4;
    prezzo_finale = prezzo_finale - sconto;
}


let prezzo = prezzo_finale.toFixed(2);
console.log(prezzo);