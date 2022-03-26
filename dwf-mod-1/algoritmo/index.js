var unaLista = [];
var counter = 0;

while (counter < 40) {
  unaLista.push(Math.floor(Math.random() * 1000 - 0));
  counter++;
}

console.log(unaLista);

var aux;

for (var i = 1; i < unaLista.length; i++) {
  for (var k = 0; k < unaLista.length - i; k++) {
    if (unaLista[k] > unaLista[k + 1]) {
      aux = unaLista[k];
      unaLista[k] = unaLista[k + 1];
      unaLista[k + 1] = aux;
    }
  }
}

console.log(unaLista);
