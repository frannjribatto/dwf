//estructura mock
const operaciones = require("./operaciones");

const regExp = /[+  -  *  /]/;
const simboloRequerido = process.argv[2].search(regExp);
const elVerdaderoSimbolo = process.argv[2].substring(simboloRequerido, 3);

function parsearTerminos(texto) {
  return {
    primerTermino: parseInt(texto[0]),
    segundoTermino: parseInt(texto[1]),
    operacion: elVerdaderoSimbolo,
  };
}

function ejecutarOperacion(objetoOperacion) {
  const diccionario = {
    "+": operaciones.suma,
    "-": operaciones.resta,
    "*": operaciones.multiplicacion,
    "/": operaciones.division,
  };

  const simbolo = objetoOperacion.operacion;
  const ejecutor = diccionario[simbolo];

  return ejecutor(
    objetoOperacion.primerTermino,
    objetoOperacion.segundoTermino
  );
}

function main() {
  const operacionParceada = parsearTerminos(process.argv[2].split(regExp));
  const resultado = ejecutarOperacion(operacionParceada);
  console.log(resultado);
}

main();
