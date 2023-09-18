const listaProductos = [
  {
    id: 1,
    nombre: "Isopropanol",
    stock: 3,
  },
  {
    id: 2,
    nombre: "Metanol",
    stock: 23,
  },
  {
    id: 3,
    nombre: "Tolueno",
    stock: 21,
  },
  {
    id: 4,
    nombre: "Acetona",
    stock: 1,
  },
  {
    id: 5,
    nombre: "Etanol",
    stock: 0,
  },
];

// function getOne(id) {
//   for (let i = 0; i < listaProductos.length; i++) {
//     if (listaProductos[i].id == id) {
//       return console.log(listaProductos[i]);
//     }
//   }
// }

exports.getOne = function getOne(id) {
  const resultado = listaProductos.find(function (objeto) {
    return objeto.id === id;
  });
  console.log(resultado);
};

exports.getAll = function getAll() {
  listaProductos.map(function (objeto) {
    console.log(objeto);
  });
};

exports.getAllWith = function getAllWith(minStock) {
  const unNuevoArray = listaProductos.filter(function (objeto) {
    return objeto.stock >= minStock;
  });
  console.log(unNuevoArray);
};
