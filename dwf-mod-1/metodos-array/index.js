// Completar acá.
function soloObjetosConNombreYApellido(aCollection) {
  var corroboracion = function (objeto) {
    return objeto.nombre && objeto.apellido;
  };

  var respuesta = aCollection.filter(corroboracion);
  console.log(respuesta);
  return respuesta;
}

function soloLosNombres(aCollection) {
  var corrector = function (objeto) {
    const objTrimeado = objeto.nombre.trim();
    var objFinal = objTrimeado.charAt(0).toUpperCase() + objTrimeado.slice(1);
    objeto.nombre = objFinal;
    respuesta = objeto.nombre;

    return respuesta;
  };

  var respuesta = aCollection.map(corrector);
  console.log(respuesta);
  return respuesta;
}

// Tests. No modificar!
function testSoloObjetosConNombreYApellido() {
  const datosDePrueba = [
    { a: 1 },
    { nombre: true },
    { nombre: "Paula", apellido: "Gil" },
    { nombre: "Marce", apellido: "Zapaia" },
  ];
  const respuesta = soloObjetosConNombreYApellido(datosDePrueba);
  const hasPau = respuesta.find((r) => r.nombre == "Paula");
  const hasMarce = respuesta.find((r) => r.nombre == "Marce");

  if (respuesta.length == 2 && hasMarce && hasPau) {
    console.log("testSoloObjetosConNombreYApellido passed");
  } else {
    throw "testSoloObjetosConNombreYApellido failed";
  }
}

function testSoloLosNombres() {
  const datosDePrueba = [{ nombre: "paula" }, { nombre: "dana" }];

  const respuesta = soloLosNombres(datosDePrueba);

  if (respuesta.includes("Paula") && respuesta.includes("Dana")) {
    console.log("testSoloLosNombres passed");
  } else {
    throw "testSoloLosNombres failed";
  }
}

function main() {
  testSoloObjetosConNombreYApellido();
  testSoloLosNombres();
}

main();
