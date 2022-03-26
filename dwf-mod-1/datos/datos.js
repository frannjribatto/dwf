const fs = require("fs");

try {
  const p = console.log;
  const datos = fs.readFileSync("personas.json");
  p(datos);
} catch (err) {
  console.log(err);
}
// exports.getAll = function obtenerTodos() {};

// exports.getOlderThan = function mayoresDe() {};
