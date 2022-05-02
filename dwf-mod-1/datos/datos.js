const fs = require("fs");

function getDatos() {
  const datos = fs.readFileSync("datos.json");
  const parsedData = JSON.parse(datos.toString());
  return parsedData;
}

// console.log(getDatos());

exports.getAll = function () {
  const datos = getDatos();
  return datos;
};

exports.getOlderThan = function (mayor) {
  const datos = getDatos();
  const mayoresQue = datos.filter(function (item) {
    return item.edad > mayor;
  });
  return mayoresQue;
};
