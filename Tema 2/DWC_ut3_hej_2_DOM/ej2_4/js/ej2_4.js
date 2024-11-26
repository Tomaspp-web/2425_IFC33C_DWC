let jugadores = [
    {nombre:"Pepe", puntuacion:"40"},
    {nombre:"Juan", puntuacion:"80"},
    {nombre:"Antonio", puntuacion:"25"},
    {nombre:"Felipe", puntuacion:"92"},
    {nombre:"Daniel", puntuacion:"15"},
];

let cabeceras = ["nombre", "puntuación"];

jugadores.sort((jugador1, jugador2) => jugador2.puntuacion - jugador1.puntuacion);

let divElem = document.querySelectorAll("#tabla")[0];
let tablaNodo = document.createElement("table");
let tablaHead = document.createElement("thead");
let tablatr = document.createElement("tr");
let tablath;

for (let cabecera of cabeceras) {
    tablath = document.createElement("th");
    tablath.innerText = cabecera;
    tablatr.appendChild(tablath);
}

tablatr.appendChild(tablath);
tablaHead.appendChild(tablatr);
tablaNodo.appendChild(tablaHead);
divElem.appendChild(tablaNodo);

let tablaBody = document.createElement("tbody");
let tablatd;

for (let jugador of jugadores) {
    tablatr = document.createElement("tr");

    for (let clave of Object.values(jugador)){
        tablatd = document.createElement("td");
        tablatd.innerText = clave;
        tablatr.appendChild(tablatd);
    }

    tablaBody.appendChild(tablatr);
    
}

tablaNodo.appendChild(tablaBody);


