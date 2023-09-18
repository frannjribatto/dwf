const productos = require("./Products");

function main() {
  console.log(productos.getAll());
  console.log(productos.getAllWith(10));
  console.log(productos.getOne(4));
}

main();
