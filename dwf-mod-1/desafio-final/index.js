const pelis = require("./pelis.js");

function trimArgument(argumento) {
  const result = {};
  argumento.forEach((value, i) => {
    if (value.charAt(0) == "-") {
      const newArg = value.slice(2);
      result[newArg] = argumento[i + 1];
    }
  });
  return result;
}

function main() {
  const args = process.argv.slice(2); //Una vez obtengo el argumento, lo trimeo

  const inputs = trimArgument(args);

  const output = pelis.searchByCriteria(inputs);

  console.table(output);
}

main();
