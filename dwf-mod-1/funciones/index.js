var listaPeliculas = [
  {
    nombre: "Sex and the City",
    rating: 7.8,
    plataforma: "Netflix",
    genero: "Comedia",
  },
  {
    nombre: "Lord of the Ring",
    rating: 9.0,
    plataforma: "Prime Video",
    genero: "Fantasia",
  },
  {
    nombre: "Liberen a Willy",
    rating: 8.0,
    plataforma: "Otras",
    genero: "Drama",
  },
  {
    nombre: "Titanic",
    rating: 10.0,
    plataforma: "Netflix",
    genero: "Drama",
  },
  {
    nombre: "Madagascar",
    rating: 9.7,
    plataforma: "Netflix",
    genero: "Animada",
  },
];

function ordenAlfabetico(lista) {
  var aux;
  for (var k = 1; k < lista.length; k++) {
    for (var i = 0; i < lista.length - 1; i++) {
      if (lista[i].nombre > lista[i + 1].nombre) {
        aux = lista[i].nombre;
        lista[i].nombre = lista[i + 1].nombre;
        lista[i + 1].nombre = aux;
      }
    }
  }
  return lista;
}

function comentar(pelicula, comentario) {
  pelicula.opiniones = comentario;
  return pelicula.opiniones;
}

function main() {
  const listaOrdenada = ordenAlfabetico(listaPeliculas);
  console.table(listaOrdenada);
  var pelicula = listaPeliculas[1];
  var opinion = "La pelicula tiene escenas muy epicas";
  const comentario = comentar(pelicula, opinion);
  console.log("Las opiniones sobre la", pelicula.nombre, "es: ", comentario);
}

main();
