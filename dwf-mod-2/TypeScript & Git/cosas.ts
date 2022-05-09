const listaDeCosas = [
  {
    product: "Heladera",
    id: 1,
    tags: ["electrodomestico", "freezer", "ahorro de energia"],
  },
  {
    product: "Computadura",
    id: 2,
    tags: ["electrodomestico", "gamer", "didactico"],
  },
  {
    product: "Equipo de musica",
    id: 3,
    tags: ["electrodomestico", "musica", "entretenimiento"],
  },
];

function getAll() {
  const product = listaDeCosas;
  return product;
}

function getByID(id: number) {
  const product = listaDeCosas.filter((objeto) => objeto.id == id);

  return product;
}

export { getAll, getByID };
