const p = require("./Argumentos");

function main() {
  var args = process.argv.slice(2);

  p.Arguments(args);
}

main();
