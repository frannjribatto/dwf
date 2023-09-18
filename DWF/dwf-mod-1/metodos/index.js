// Completar acá.
// Escribir la función textosCortos y pasar el test.

function textosCortos(collections) {
  const newCollection = [];
  for (let i = 0; i < collections.length; i++) {
    const obj = collections[i];
    if (obj.texto.split(" ").length <= 10) {
      const titulo = obj.titulo;

      var titleTrim = titulo.trim();
      const finalTitle = titleTrim.charAt(0).toUpperCase() + titleTrim.slice(1);
      obj.titulo = finalTitle;
      newCollection.push(obj);
    }
  }
  return newCollection;
}
// test: no modificar
function testTextosCortos() {
  const textosDePrueba = [
    { titulo: " un titulo ", texto: "uno dos tres cuatro cinco" },
    {
      titulo: "what ever",
      texto: "uno dos tres cuatro cinco seis siete ocho nueve diez once",
    },
  ];
  const respuesta = textosCortos(textosDePrueba);

  if (respuesta.length == 1 && respuesta[0].titulo == "Un titulo") {
    console.log("testTextosCortos passed");
  } else {
    throw "testTextosCortos failed";
  }
}

function main() {
  testTextosCortos();
}

main();
