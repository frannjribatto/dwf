var listaDePersonas = [
    {
        nombre: "Franco",
        apellido: "Ribatto",
        DNI: 38990507,
        edad: 26,
        mascotas: ["Luci", "Frido", "Mecha", "Serafin", "Diana", "Kitty"],
        pareja: [true, "Carolina"],
        contactos: {
            email: "frannj.ribatto@gmail.com",
            celular: 1162449353,
            direccion: "Santa Ana 2359"
        }
    },
    {
        nombre: "Carolina",
        apellido: "Paz",
        DNI: 39765021,
        edad: 26,
        mascotas: ["Luci", "Frido", "Mecha", "Serafin", "Diana", "Kitty"],
        pareja: [true, "Franco"],
        contactos: {
            email: "pazcj.95@gmail.com",
            celular: 1131221596,
            direccion: "Madre Maria de Jesus Crucificado Petkovic"
        }
    }
];

if (listaDePersonas[1].edad > 18){
    console.log("La persona es mayor de edad");
}else{
    console.log("La persona es menor de edad");
};

console.log(" ");

if (listaDePersonas[1].pareja[0]) {
    console.log("La pareja de esta persona es " + listaDePersonas[0].nombre);
};

if (listaDePersonas[0].contactos.celular) {
    console.log(listaDePersonas[0].contactos.celular);
}

console.log(listaDePersonas);
