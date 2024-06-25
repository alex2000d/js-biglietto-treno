let km = prompt("inserisci quanti km vuoi percorrere");
let eta = prompt("inserisci la tua eta");

let prezzo_biglietto = 0.21 * km;
 console.log(prezzo_biglietto);
 let perc_sconto = 0;


if (eta < 18) {
    perc_sconto = 20;
}
else if (eta > 65) {
    perc_sconto = 40;
}

if (perc_sconto != 0){
     let sconto = prezzo_biglietto * perc_sconto / 100;
     prezzo = prezzo_biglietto - sconto;
}


console.log(prezzo);