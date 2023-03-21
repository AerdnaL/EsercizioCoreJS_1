// crea funzione che si chiede se la stringa è conenuta all'interno di autore e titolo
// ricerca case insensitive, anche se cerco Divina Commedia deve trovare divina commedia

const autore = "Dante Alighieri";
const titolo = "La Divina Commedia";
const stringa1 = "divina";
const stringa2 = "promessi";
const stringa3 = "CoMmEdIa";

function stringaInTitolo (autore, titolo, stringa) {
  const autoreTitolo = `${autore} ${titolo}`.toLowerCase();
  return autoreTitolo.includes(stringa.toLowerCase());
}

console.log(stringaInTitolo(autore, titolo, stringa1));
console.log(stringaInTitolo(autore, titolo, stringa2));
console.log(stringaInTitolo(autore, titolo, stringa3));

/* Soluzione ChatGPT
const author = "J.K. Rowling";
const title = "Harry Potter and the Philosopher's Stone";
const string1 = "philosopher";
const string2 = "chamber";

function checkStringInTitleAndAuthor(author, title, string) {
  const concatenatedValue = `${author} ${title}`.toLowerCase();
  return concatenatedValue.includes(string.toLowerCase());
}

console.log(checkStringInTitleAndAuthor(author, title, string1)); // Output: true
console.log(checkStringInTitleAndAuthor(author, title, string2)); // Output: false
*/