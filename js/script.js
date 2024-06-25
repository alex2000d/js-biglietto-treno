let km = prompt("inserisci quanti km vuoi percorrere");

let eta = prompt("inserisci la tua eta");


let prezzo_biglietto = 0.21 * km;
 console.log(prezzo_biglietto);

if (eta < 18){
    sconto = 20;
}
else if (eta > 65){
    sconto = 40;
}