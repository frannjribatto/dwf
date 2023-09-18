var edadDePersona = 26;

var edadDeCaro = "26";

// Array
// Posiciones
// Indices

var listaDeCosas = ["Caro", "Franco"];
const cantidadDeCosas = listaDeCosas.length;

// console.log(listaDeCosas[1]);
// console.log(listaDeCosas[0]);

// Objetos
// Keys/Key

var unObjeto = {
    // Propiedades
    nombre : "Franco Joel Ribatto", //Key : Value
    edad : 26,
    DNI : 38990507,
    mascotas : ["Luci","Frido","Diana","Serafin","Mecha","Kitty"],
    caracteristicas : {
        tieneAuto : true,
        tieneMascota: true
    }
};

// Collections (Array de Objetos)

const personas = [
    {
        nombre : "Franco", 
        apellido : "Ribatto"
    },
    {
        nombre : "Carolina",
        apellido : "Paz"
    }   
];

// console.log(unObjeto.caracteristicas);apellido
console.log(personas[0].nombre);
console.log(personas[1].nombre);