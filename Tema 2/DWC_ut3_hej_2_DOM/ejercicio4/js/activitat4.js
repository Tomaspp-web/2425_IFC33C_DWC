let jugadores = [
    { nom: "Luka", puntuació: 95 },
    { nom: "Lebron", puntuació: 93 },
    { nom: "Klay", puntuació: 85 },
    { nom: "Santi", puntuació: 79 },
    { nom: "Dereck", puntuació: 82 },
    { nom: "Curry", puntuació: 90 },
    { nom: "Budy", puntuació: 81 }
];

function creartaulaordenada(jugadores) {
    // Ordenamos el array en función de las puntuaciones de mayor a menor
    let jugadoresordenados = jugadores.sort((a, b) => b.puntuació - a.puntuació);

    // Crear elementos HTML
    let tabla = document.createElement("table");
    tabla.style.border = "1px solid black";
    tabla.style.borderCollapse = "collapse";
    tabla.style.width = "50%";

    // Crear encabezado de la tabla
    let encabezado = tabla.insertRow();
    let th1 = document.createElement("th");
    let th2 = document.createElement("th");
    th1.textContent = "Nombre";
    th2.textContent = "Puntuación";
    th1.style.border = th2.style.border = "1px solid black";
    encabezado.appendChild(th1);
    encabezado.appendChild(th2);

    // Llenar filas con los datos de los jugadores
    for (let jugador of jugadoresordenados) {
        let fila = tabla.insertRow();
        let celdaNombre = fila.insertCell();
        let celdaPuntuacion = fila.insertCell();
        celdaNombre.textContent = jugador.nom;
        celdaPuntuacion.textContent = jugador.puntuació;
        celdaNombre.style.border = celdaPuntuacion.style.border = "1px solid black";
        celdaNombre.style.textAlign = celdaPuntuacion.style.textAlign = "center";
    }

    // Insertar la tabla en el DOM
    document.body.appendChild(tabla);

    return jugadoresordenados; // Por si quieres devolver los datos ordenados
}

// Llamamos a la función
console.log(creartaulaordenada(jugadores));
