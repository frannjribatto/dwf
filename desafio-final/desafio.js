//ANTES DE EMPEZAR:
//Copia este código base completo en un nuevo archivo llamado desafio.js

//-----------------------------------------------------------------------//

//JUGADORES:
//No modificar los valores de estos objetos hasta el final del desafío

const jugadorUno = {
    nombre: "Marce",
    habilidades: {
        ataque: 74,
        velocidad: 30,
        vida: 60,
        magia: 120,
    },
    articulos: ["espada", "escudo", "varita"],
};

const jugadorDos = {
    nombre: "Flor",
    habilidades: {
        ataque: 73,
        velocidad: 30,
        vida: 80,
        magia: 100,
    },
    articulos: ["escudo", "varita", "capa", "pocion"],
};

  //-----------------------------------------------------------------------//

  //PUNTOS INICIALES DEL JUEGO:
  //Estas variables servirán para almacenar los puntos ganados por cada jugador.
  //Cada vez que un jugador gana en una habilidad determinada se deberá
  //sumar 1 punto en el contador correspondiente:
var contadorPuntosJug1 = 0;
var contadorPuntosJug2 = 0;

  //Ganador:
var ganador;

  //-----------------------------------------------------------------------//
  //La indicación ++ luego de la variable contadorPuntosJug suma 1 punto al
  //contador. Según la condición que se cumpla, se irán sumando los puntos.

  //EJEMPLO ESTRUCTURA DE COMPARACIÓN
// if (habilidadACompararJugador1 > habilidadACompararJugador2) {
//     contadorPuntosJug1 = contadorPuntosJug1 + 1;
// } else if (condiciónCasoContrario) {
//     contadorPuntosJug2++;
// } else {
//     contadorPuntosJug1++;
//     contadorPuntosJug2++;
// }


  //COMPARACIÓN POR PODER DE ATAQUE:
if (jugadorUno.habilidades.ataque > jugadorDos.habilidades.ataque) {
    contadorPuntosJug1 ++
}else if (jugadorUno.habilidades.ataque < jugadorDos.habilidades.ataque) {
    contadorPuntosJug2 ++
}else{
    contadorPuntosJug1 ++
    contadorPuntosJug2 ++ 
};
  //-----------------------------------------------------------------------//

  //COMPARACIÓN POR VELOCIDAD:
if (jugadorUno.habilidades.velocidad > jugadorDos.habilidades.velocidad) {
    contadorPuntosJug1 ++
}else if (jugadorUno.habilidades.velocidad < jugadorDos.habilidades.velocidad) {
    contadorPuntosJug2 ++
}else{
    contadorPuntosJug1 ++
    contadorPuntosJug2 ++ 
};
  //-----------------------------------------------------------------------//

  //COMPARACIÓN POR NIVEL DE VIDA:
if (jugadorUno.habilidades.velocidad > jugadorDos.habilidades.velocidad) {
    contadorPuntosJug1 ++
}else if (jugadorUno.habilidades.velocidad < jugadorDos.habilidades.velocidad) {
    contadorPuntosJug2 ++
}else{
    contadorPuntosJug1 ++
    contadorPuntosJug2 ++ 
};
  //-----------------------------------------------------------------------//

  //COMPARACIÓN POR MAGIA:
if (jugadorUno.habilidades.magia > jugadorDos.habilidades.magia) {
    contadorPuntosJug1 ++
}else if (jugadorUno.habilidades.magia < jugadorDos.habilidades.magia) {
    contadorPuntosJug2 ++
}else{
    contadorPuntosJug1 ++
    contadorPuntosJug2 ++ 
};

  //-----------------------------------------------------------------------//

  //COMPARACIÓN POR CANTIDAD DE ARTÍCULOS
if (jugadorUno.articulos.length > jugadorDos.articulos.length) {
    contadorPuntosJug1 ++
}else if (jugadorUno.articulos.length < jugadorDos.articulos.length) {
    contadorPuntosJug2 ++
}else{
    contadorPuntosJug1 ++
    contadorPuntosJug2 ++ 
};

  //-----------------------------------------------------------------------//

  //DEFINIENDO EL GANADOR DE LA PARTIDA
var nombreDeJug1 = jugadorUno.nombre;
var nombreDeJug2 = jugadorDos.nombre;
var ganador;

if (contadorPuntosJug1 > contadorPuntosJug2) {
    ganador = nombreDeJug1;
}else if (contadorPuntosJug1 < contadorPuntosJug2) {
    ganador = nombreDeJug2;
}else{
    ganador = "Es un empate";
}

var resultado = {
    [nombreDeJug1]: contadorPuntosJug1,
    [nombreDeJug2]: contadorPuntosJug2,
    ganador: ganador
};

console.log(resultado);

  // ejemplo:
  // var resultado = {
  //  [nombreDeJug1]: contadorPuntosJug1,
  //  [nombreDeJug2]: contadorPuntosJug2,
  //  ganador: nombreDeJug1
  // }
  // console.log(resultado)
