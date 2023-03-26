

// const prckm = 0.21;

// function getUserInput() {

//     let InputNameLastname = document.getElementById("InputNameLastname").value;
//     let Inputkm = document.getElementById("Inputkm").value;
//     let Inputage = document.getElementById("Inputage").value;

//     document.getElementById('OutName').innerHTML = InputNameLastname


//     document.getElementById('priceresult').innerHTML = (prckm * Inputkm ).toFixed(2);
//     if (Inputage < 18) {
//         document.getElementById('priceresult').innerHTML = ((prckm * Inputkm) * 0.8).toFixed(2);
//         document.getElementById('ticket').innerHTML = `Biglietto ridotto`;
//     } else if (Inputage > 65) {
//          document.getElementById('priceresult').innerHTML = ((prckm * Inputkm) * 0.6).toFixed(2);
//          document.getElementById('ticket').innerHTML = `Biglietto ridotto`;
//     }


//     document.getElementById('carriage').innerHTML = Math.floor(Math.random() * 10 + 1);
//     document.getElementById('code').innerHTML = Math.floor(Math.random() * 100000 + 1);

//     document.getElementById('DivOutput').classList.toggle('d-none');
// }

// function clearArea() {

//     document.getElementById("InputNameLastname").value = "";
//     document.getElementById("Inputkm").value = "";
//     document.getElementById("Inputage").value = ""; 
//     document.getElementById('DivOutput').classList.add('d-none');
// }


/*
Consegna:
Scrivi un programma che stampi in console i numeri da 1 a 100, ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”. Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per un altro? Abbiamo visto qualcosa di particolare che possiamo usare?
Consigli del giorno:
Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
BONUS 1: Crea un container nel DOM , aggiungendo (attraverso la funzione append()) un elemento html con il numero o la stringa corretta da mostrare.
BONUS 2: Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz. Se sei a corto di idee per lo stile, potresti prendere spunto dallo screenshot fornito in consegna. */