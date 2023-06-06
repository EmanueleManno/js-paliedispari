//PROVO A VEDERE SE FUNZIONA
console.log('JS OK');

// # PALINDROMA #

//CHIEDERE ALL'UTENTE DI INSERIRE UNA PAROLA:
const userWord = prompt('Inserisci una parola, ti dirò se è palindroma o no');
console.log(userWord);

//RIBALTO LA PAROLA INSERITA DALL'UTENTE:
const reverseWord = "";

// VERIFICO SE SONO UGUALI DICHIARANDO LA FUNZIONE:
function palindroma(userWord, reverseWord) {

    for (let i = userWord.length - 1; i >= 0; i--) {
        reverseWord += userWord[i];
}
    if (reverseWord == userWord) {
        console.log(userWord + " è palindroma");
}
    else {
        console.log(userWord + " non è palindroma");
}
}

//ESEGUO LA FUNZIONE:
palindroma(userWord, reverseWord);



// # PARI E DISPARI #

//CHIEDERE ALL'UTENTE SE VUOLE SCEGLIERE TRA PARI O DISPARI:
const evenOrOdd = prompt("Scrivi pari o dispari");
console.log(evenOrOdd);

//CHIEDERE DI INSERIRE UN NUMERO DA 1 A 5:
const userNumber = parseInt(prompt("Scrivi un numero da 1 a 5"));
console.log(userNumber);

//RECUPERARE IL NUMERO DEL COMPUTER ESEGUENDO LA FUNZIONE: 
const cpuNumber = getRandomNumber(1,5);
console.log(cpuNumber);

//SOMMARE I DUE NUMERI:
const sum = userNumber + cpuNumber;

//FUNZIONE PER GENERARE UN NUMERO RANDOM DEL COMPUTER DICHIARANDO LA FUNZIONE:
function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// SE E' PARI (SE LO DIVIDO PER DUE MI DA RESTO ZERO):
if (sum % 2 == 0) {
  //ALLORA MI STAMPI CHE LA SOMMA E' PARI:
  console.log(sum + " è pari");
}
//ALTRIMENTI MI STAMPI CHE LA SOMMA E' DISPARI:
else {
  console.log(sum + " è dispari");
}