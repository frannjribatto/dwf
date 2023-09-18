const { table } = require("console");
const fs = require("fs");
const data = fs.readFileSync(__dirname + "/pelis.json");
const cleanData = JSON.parse(data.toString());

const getAll = function () {
  // retorna todas las pelis (collection)
  // acá hay que leer el archivo y parsearlo
  return cleanData;
};

const sortBy = function (propiedad, arrayDePelis) {
  // recibe un array de pelis y las ordena por propiedad
  const list = arrayDePelis;
  // acá se ordena usando el método sort usando el parámetro "propiedad"
  const orderList = list.sort(function (a, b) {
    if (a[propiedad] > b[propiedad]) {
      return 1;
    }
    if (a[propiedad] < b[propiedad]) {
      return -1;
    }
    return 0;
  });
  // tiene que poder ordenar el array contemplando que me pueden pasar cualquier cosa en
  // el parámetro "propiedad", no solo rating y title
  // Pista: https://flaviocopes.com/how-to-sort-array-of-objects-by-property-javascript/
  return orderList;
};

const searchBy = function (texto, arrayDePelis) {
  // recibe un array de pelis y las filtra por texto
  const list = arrayDePelis;
  const filterList = list.filter(function (list) {
    return list.title.toLowerCase().includes(texto.toLowerCase());
  });
  // acá hay que usar el método filter de array
  return filterList;
};

const searchByTag = function (texto, arrayDePelis) {
  // recibe un array de pelis y las filtra por texto
  const filterList = arrayDePelis.filter(function (list) {
    return list.tags.includes(texto) || list.tags.includes(texto.toLowerCase());
  });
  // acá hay que usar el método filter de array
  return filterList;
};

const noFormat = function (arrayDePelis) {
  return JSON.stringify(arrayDePelis);
};

exports.searchByCriteria = function (criterios) {
  // comienzo un array vacio que voy a empezar a rellenar con las respuestas de las funciones
  let tmp = getAll();

  if (criterios.sort) {
    tmp = sortBy(criterios.sort, cleanData);
  }

  if (criterios.search) {
    tmp = searchBy(criterios.search, cleanData);
  }

  if (criterios.tag) {
    tmp = searchByTag(criterios.tag, cleanData);
  }

  if (criterios.hasOwnProperty("no-format")) {
    tmp = noFormat(cleanData);
  }
  // .. y asi
  return tmp;
};
