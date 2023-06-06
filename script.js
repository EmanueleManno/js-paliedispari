//PROVO A VEDERE SE FUNZIONA
console.log('JS OK');

// # PALINDROMA

//CHIEDERE ALL'UTENTE DI INSERIRE UNA PAROLA:
const userWord = prompt('Inserisci una parola, ti dirò se è palindroma o no');
console.log(userWord);

//DIVIDO LA PAROLA IN PIU' STRINGHE CREANDO UN ARRAY CON LE LETTERE DELLA PAROLA:
const lettersUserWord = userWord.split('');
console.log(lettersUserWord);

//RIBALTO LE STRINGHE DELLA PAROLA GENERANDO UN NUOVO ARRAY CON LE LETTERE DELLA PAROLA AL CONTRARIO:
const reverseUserWord = lettersUserWord.reverse();
console.log(reverseUserWord);

//CONTROLLO SE LA PAROLA AL CONTRARIO CORRISPONDE CON LA PAROLA ORIGINALE:
if (lettersUserWord == reverseUserWord) {
    console.log('La parola è palindroma!');
} else if (lettersUserWord != reverseUserWord) {
    console.log('La parola non è palindroma!');
}