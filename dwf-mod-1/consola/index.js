const msg = "enviar";
const msg1 = "varios";
const msg2 = "mensajes";
const msg3 = "randoms";

// console.log("Esto es un intento de %s %s %s %s", msg, msg1, msg2, msg3);

var listaDePeliculas = [
  ["Tolkien", "El señor de los anillos"],
  ["Tolkien", "El hobbit"],
  ["George Martin", "Game of Thrones"],
];

// console.table(listaDePeliculas);

var listaDeOtrasPelis = [
  {
    nombre: "El señor de los anillos",
    rating: 9.2,
    plataforma: "HBO Max",
  },
  {
    nombre: "El hobbit",
    rating: 8.7,
    plataforma: "HBO Max",
  },
  {
    nombre: "El padrino",
    rating: 9.0,
    plataforma: "Amazone Prime",
  },
];

console.table(listaDeOtrasPelis);
