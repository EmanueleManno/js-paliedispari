//PROVO A VEDERE SE FUNZIONA
console.log('JS OK');

// # PALINDROMA

//CHIEDERE ALL'UTENTE DI INSERIRE UNA PAROLA:
const userWord = prompt('Inserisci una parola, ti dirò se è palindroma o no');
console.log(userWord);

//RIBALTO LA PAROLA INSERITA DALL'UTENTE:
const reverseWord = userWord.split("").reverse().join("");

//VERIFICO SE LA PAROLA RIBALTATA E QUELLA INSERITA CORRISPONDONO:
if (userWord == reverseWord) {
  console.log(userWord + " è palindroma");
}

else {
  console.log(userWord + " non è palindroma");
}