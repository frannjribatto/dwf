// Escribir acá la función cuentaPalabras
function cuentaPalabras(cadenaADividir) {
  var cadenaDividida = cadenaADividir.split(" ");
  var arrPalabra = [];
  for (var i = 0; i < cadenaDividida.length; i++) {
    if (cadenaDividida[i].charAt(0) === "a") {
      arrPalabra.push(cadenaDividida[i]);
    }
  }
  var resultado = {
    cantidadDePalabras: cadenaDividida.length,
    palabrasConA: arrPalabra.length,
  };
  return resultado;
}

// no modificar esta funcion
function testCuentaPalabras() {
  const texto =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste temporibus non, eligendi harum adipisci eos provident quaerat eveniet illo placeat distinctio omnis pariatur maiores et voluptates perferendis laborum quam facere.";
  const resultado = cuentaPalabras(texto);
  if (resultado.cantidadDePalabras == 30 && resultado.palabrasConA == 3) {
    console.log("testCuentaPalabras passed");
  } else {
    throw "testCuentaPalabras falló";
  }
}

function main() {
  testCuentaPalabras();
}

main();
