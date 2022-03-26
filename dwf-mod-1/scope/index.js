var listaAmigos = [
  {
    nombre: "Ignacion",
    edad: 31,
  },
  {
    nombre: "Micaela",
    edad: 25,
  },
  {
    nombre: "Juan Pablo",
    edad: 24,
  },
  {
    nombre: "Rocio",
    edad: 21,
  },
  {
    nombre: "Eliana",
    edad: 26,
  },
  {
    nombre: "Agustin",
    edad: 25,
  },
  {
    nombre: "German",
    edad: 26,
  },
  {
    nombre: "Mauro",
    edad: 26,
  },
  {
    nombre: "Fabian",
    edad: 25,
  },
  {
    nombre: "Franco",
    edad: 24,
  },
  {
    nombre: "Santiago",
    edad: 23,
  },
  {
    nombre: "Agostina",
    edad: 25,
  },
  {
    nombre: "Milagros",
    edad: 25,
  },
  {
    nombre: "Sergio",
    edad: 26,
  },
  {
    nombre: "Juan",
    edad: 43,
  },
  {
    nombre: "Sebastian",
    edad: 30,
  },
  {
    nombre: "Javier",
    edad: 26,
  },
  {
    nombre: "Elias",
    edad: 27,
  },
  {
    nombre: "Leandro",
    edad: 27,
  },
  {
    nombre: "Nicolas",
    edad: 29,
  },
];
var edadPares = [];

function edadesPares(lista) {
  for (let i = 0; i < lista.length; i++) {
    if (lista[i].edad % 2 == 0) {
      edadPares.push(lista[i]);
    }
  }
  return edadPares;
}

function main() {
  edadesPares(listaAmigos);
  console.log(listaAmigos);
  console.log(edadPares);
}

main();
