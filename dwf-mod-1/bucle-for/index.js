const min = 10;
const max = 90;
var par = 0;
var impar = 0;
var counter = 0;
var unaLista = [];

while (counter < 87) {
  const numbRandom = Math.random();
  const numbRango = numbRandom * max + min;
  const numbFinal = Math.floor(numbRango);

  unaLista.push(numbFinal);
  counter++;
}

console.table(unaLista);

console.table(unaLista.length);

for (var i = 0; i < unaLista.length; i++) {
  if (unaLista[i] % 2 == 0) {
    par++;
  } else {
    impar++;
  }
}

console.log("La cantidad de numeros pares es: %i", par);
console.log("La cantidad de numeros impares es: %i", impar);
