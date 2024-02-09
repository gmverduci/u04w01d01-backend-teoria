/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/

let sum = 10 + 20;

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/

let random = Math.floor(Math.random() * 21);

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/

let me = {
  name: "Marcello",
  surname: "Verduci",
  age: 36,
};

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/

const ringiovaniscimi = (Obj) => {
  if (Obj.age !== undefined) {
    delete Obj.age;
  }
};

ringiovaniscimi(me);

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/

const skills = ["javascript", "java"];
//NdA: java lo conosco nel senso che so che esiste e che è un linguaggio di programmazione, ma lo scrivo come auspicio.

const epicode = (corsoFullStack) => {
  me.skills = corsoFullStack;
};

epicode(skills);

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/

const altreSkills = ["html", "css"];

const addSkills = (arrayAltreSkills) => {
  for (let i = 0; i < arrayAltreSkills.length; i++) {
    me.skills.push(arrayAltreSkills[i]);
  }
  return me;
};

addSkills(altreSkills);

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/

const disimpara = (index) => {
  me.skills.pop(index);
  return me;
};

disimpara(me.skills.length);

// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/

const dice = (min, max) => {
  let diceResult = Math.floor(Math.random() * (Math.abs(max - min) + 1)) + min; // ho aggiunto Math.Abs() dopo aver passato 10 minuti a cercare di capire perché a volte alcuni values di esercizio 8 risultavano negativi.
  return diceResult;
};

let diceDa1A6 = dice(1, 6);

console.log("Esercizio 1: " + diceDa1A6);

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/

const whoIsBigger = (num1, num2) => {
  let uguali = `${num1} e ${num2} sono uguali!`;
  if (num1 === num2) {
    return uguali;
  } else if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
};

console.log("Esercizio 2: " + whoIsBigger(dice(0, 10), dice(2, 15)));

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/

const generaStringaCasuale = (lunghezzaStringa) => {
  const campioneCaratteri = "qwe rtyui opasdfg hjklzx cvbnm";
  let stringaCasuale = "";
  for (let i = 0; i < lunghezzaStringa; i++) {
    stringaCasuale +=
      campioneCaratteri[Math.floor(Math.random() * campioneCaratteri.length)];
  }
  return stringaCasuale;
};

const splitMe = (string) => {
  const arrayStringa = string.split(" ");
  return arrayStringa;
};

console.log("Esercizio 3: " + splitMe(generaStringaCasuale(20)));

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/

const deleteOne = (string, boolean) => {
  if (boolean) {
    return string.substring(1);
  } else {
    return string.substring(0, string.length - 1);
  }
};

console.log("Esercizio 4: " + deleteOne("abcdef", true));

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/

const onlyLetters = (stringaInput) => {
  const stringaSporca = stringaInput.split("");
  const stringaPulita = stringaSporca.filter((carattere) =>
    isNaN(parseInt(carattere))
  );
  const stringaSenzaDoppiSpazi = [];
  for (let i = 0; i < stringaPulita.length; i++) {
    if (
      stringaPulita[i] !== " " ||
      (stringaPulita[i] === " " && stringaPulita[i + 1] !== " ")
    ) {
      // In base all'esempio, oltre ai numeri devo rimuovere eventuali doppi spazi
      stringaSenzaDoppiSpazi.push(stringaPulita[i]);
    }
  }
  return stringaSenzaDoppiSpazi.join("");
};

console.log("Esercizio 5: " + onlyLetters("i have 4 dogs"));

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/

const isThisAnEmail = (emailInput) => {
  const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return regexEmail.test(emailInput);
};

console.log("Esercizio 6: " + isThisAnEmail("marcello.verduci@gmail.it"));

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/

const whatDayIsIt = () => {
  // Array con i nomi dei giorni della settimana
  const settimana = [
    "Domenica",
    "Lunedì",
    "Martedì",
    "Mercoledì",
    "Giovedì",
    "Venerdì",
    "Sabato",
  ];
  const dataOra = new Date();
  const oggi = dataOra.getDay();
  const nomeGiorno = settimana[oggi];

  return nomeGiorno;
};

console.log("Esercizio 7: Oggi è " + whatDayIsIt());

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/

const rollTheDices = (numeroLanci) => {
  let sum = 0;
  let values = [];

  for (let i = 0; i < numeroLanci; i++) {
    // Correzione: cambiato <= con <
    let lancio = dice(
      Math.floor(Math.random() * 10 + 1),
      Math.floor(Math.random() * 10 + 1)
    );
    sum += lancio;
    values.push(lancio);
  }

  return {
    sum: sum,
    values: values,
  };
};

console.log("Esercizio 8: ", rollTheDices(Math.floor(Math.random() * 10) + 1));

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/

const howManyDays = (data) => {
  const dataDaStringa = data.split("/");
  const giorno = dataDaStringa[0];
  const mese = dataDaStringa[1];
  const anno = dataDaStringa[2];

  const dataInputAmericana = new Date(anno, mese - 1, giorno);
  const oggiMillisecondi = Date.now();
  const dataInputMillisecondi = dataInputAmericana.getTime();
  const deltaMillisecondi = oggiMillisecondi - dataInputMillisecondi;
  const deltaGiorni = parseInt(deltaMillisecondi / (1000 * 60 * 60 * 24));

  return deltaGiorni;
};

console.log(
  "Esercizio 9: dalla data inserita a oggi sono passati ",
  howManyDays("05/02/2024"),
  " giorni (arrotondando)"
);

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/

const isTodayMyBirthday = (compleanno) => {
  const oggi = new Date();
  const dataCompleanno = new Date(compleanno);

  return (
    oggi.getDate() === dataCompleanno.getDate() &&
    oggi.getMonth() === dataCompleanno.getMonth()
  );
};

const mioCompleanno = "1987-11-26";
console.log(
  "Esercizio 10: Oggi è il mio compleanno? ",
  isTodayMyBirthday(mioCompleanno)
);

// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },

  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/

const deleteProp = (oggetto, proprietaDaEliminare) => {
  if (oggetto[proprietaDaEliminare] !== undefined) {
    delete oggetto[proprietaDaEliminare];
  }
  return oggetto;
};

const persona = {
  nome: "Mario",
  cognome: "Rossi",
  eta: 30,
};

const senzaEta = deleteProp(persona, "eta");
console.log("Esercizio 11:", senzaEta);

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/

const trovaFilmPiuRecente = (film) => {
  let filmPiuRecente = film[Math.floor(Math.random() * film.length)];
  film.forEach((element) => {
    if (Number(element.Year) < Number(filmPiuRecente.Year)) {
      filmPiuRecente = element;
    }
  });
  return filmPiuRecente;
};

const filmPiuRecente = trovaFilmPiuRecente(movies);
console.log(
  `Esercizio 12: il film più recente è: ${filmPiuRecente.Title} del ${filmPiuRecente.Year}`
);

/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/

const countMovies = (moviesList) => {
  let moviesNumber;
  return (moviesNumber = moviesList.length);
};

console.log("Esercizio 13: Il numero totale di film è", countMovies(movies));

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/

const onlyTheYears = () => {
  const moviesYear = movies.map((element) => {
    return element.Year;
  });
  return moviesYear;
};

console.log("Esercizio 14:", onlyTheYears(movies));

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/

const onlyInLastMillennium = (moviesList, maxYear) => {
  const filteredMovies = [];
  for (let i = 0; i < moviesList.length; i++) {
    if (moviesList[i].Year <= maxYear) {
      filteredMovies.push(moviesList[i]);
    }
  }
  return filteredMovies;
};

console.log(
  "Esercizio 15: I seguenti film sono stati prodotti nello scorso millennio:",
  onlyInLastMillennium(movies, 2000)
);

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/

const sumAllTheYears = (moviesList) => {
  let totalYears = 0;
  const moviesYear = onlyTheYears(movies);
  moviesYear.forEach((element) => (totalYears += parseInt(element)));
  return totalYears;
};

console.log(
  "Esercizio 16: Somma dei vari anni di uscita dei film in elenco:",
  sumAllTheYears(movies)
);

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/

const searchByTitle = (stringa, moviesList) => {
  const filmCorrispondenti = moviesList.filter((movie) =>
    movie.Title.toLowerCase().includes(stringa.toLowerCase())
  );

  return filmCorrispondenti;
};

console.log(
  'Esercizio 17: la stringa "il signore" è contenuta nei seguenti film:',
  searchByTitle("lord", movies)
);

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/

const searchAndDivide = (searchString, moviesList) => {
  const match = searchByTitle(searchString, moviesList);
  const unmatch = moviesList.filter((movie) => !match.includes(movie));

  return { match, unmatch };
};

console.log("Esercizio 18: ", searchAndDivide("lord", movies));

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/

const removeIndex = (index, moviesList) => {
  if (index < 0 || index >= moviesList.length) {
    return moviesList;
  }
  moviesList.splice(index, 1);

  return moviesList;
};

console.log("Esercizio 19:", removeIndex(2, movies));

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/

const selezionaContainer = () => {
  return document.getElementById("container");
};

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/

const selezionaTd = () => {
  return document.getElementsByTagName("td");
};

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/

const stampaTestoTagTD = () => {
  const tdTags = document.querySelectorAll("td");
  for (let i = 0; i < tdTags.length; i++) {
    console.log(tdTags[i].textContent);
  }
};

stampaTestoTagTD();

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/

const redLink = () => {
  const links = document.querySelectorAll("a");
  links.forEach((link) => {
    link.style.backgroundColor = "red";
  });
};

redLink();

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/

const addNewLi = () => {
  const myList = document.getElementById("myList");
  const newLi = document.createElement("li");
  myList.appendChild(newLi);
};

addNewLi();

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/

const svuotaLista = () => {
  const myList = document.getElementById("myList");
  myList.innerHTML = "";
};

svuotaLista();

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/

const testTr = () => {
  const tr = document.querySelectorAll("tr");
  tr.forEach((element) => {
    element.classList.add("test");
  });
};

testTr();

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/

const halfTree = (tronco) => {
  for (let i = 1; i <= tronco; i++) {
    let ramo = "";
    for (let j = 0; j < i; j++) {
      ramo += "*";
    }
    console.log(ramo);
  }
};

halfTree(3);

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/

const albero = (tronco) => {
  for (let i = 0; i < tronco; i++) {
    let ramo = "";
    for (let j = 0; j < tronco - i - 1; j++) {
      ramo += " ";
    }
    for (let q = 0; q < 2 * i + 1; q++) {
      ramo += "*";
    }
    console.log(ramo);
  }
};

albero(7);

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/

let numeroRandomConMoltiPrimi = Math.floor(Math.random() * 18) + 2;

const isItPrime = (numero) => {
  if (numero <= 1) {
    return false;
  }
  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
      return false;
    }
  }
  return true;
};

console.log(numeroRandomConMoltiPrimi, isItPrime(numeroRandomConMoltiPrimi));

