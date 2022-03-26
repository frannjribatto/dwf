var unaLista = [
  {
    titulo: " este es un titulo ",
    texto: "este es un texto con menos de diez palabras",
  },
];

function arreglo(lista, indice) {
  var newText = lista[indice].texto;
  var newTitle = lista[indice].titulo;

  if (lista[indice].texto.split(" ").length < 10) {
    newText = lista[indice].texto;
  } else {
    console.log("el atributo del texto es muy largo");
  }

  if (
    lista[indice].titulo.charAt(0) ==
      lista[indice].titulo.charAt(0).toUpperCase() &&
    lista[indice].titulo.charAt(0) != " "
  ) {
    newTitle = lista[indice].titulo;
  } else {
    console.log("El titulo no esta bien escrito");
  }

  var respuesta = {
    titulo: newTitle,
    texto: newText,
  };
  return respuesta;
}

function main() {
  for (let i = 0; i < unaLista.length; i++) {
    arreglo(unaLista, i);
  }
}
