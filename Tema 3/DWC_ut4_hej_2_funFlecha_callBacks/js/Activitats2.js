/** Dado un array de objetos (por ejemplo, personas con nombre y edad), crea una tabla HTML
que muestre estos datos.
Ordena las personas por edad usando sort con un callback.
Añade las filas de la tabla usando forEach.
Requisitos:
Usa funciones flecha para el callback en sort.
Usa el DOM para crear y agregar elementos de la tabla. 
 */

let personas = [
    { nombre: "Juan", edad: 25 },
    { nombre: "Ana", edad: 30 },
    { nombre: "Luis", edad: 20 },
    { nombre: "Elena", edad: 35 },
    { nombre: "Pedro", edad: 40 },
    { nombre: "María", edad: 45 },
    { nombre: "Carlos", edad: 50 }
];

let crearTablaPersonas = (personas) => {
    let arrayOrdenadoPersonasAsc = [...personas].sort((a, b) => a.edad - b.edad);
    let tabla = document.createElement("table");
    let thead = document.createElement("thead");
    let tbody = document.createElement("tbody");
    let trHead = document.createElement("tr");
    let th1 = document.createElement("th");
    let th2 = document.createElement("th");
    let th3 = document.createElement("th");
    th1.textContent = "Nombre";
    th2.textContent = "----";
    th3.textContent = "Edad";
    trHead.appendChild(th1);
    trHead.appendChild(th2);
    trHead.appendChild(th3);
    thead.appendChild(trHead);
    tabla.appendChild(thead);
    arrayOrdenadoPersonasAsc.forEach((persona) => {
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");
        td1.textContent = persona.nombre;
        td2.textContent = "==="; 
        td3.textContent = persona.edad;
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tbody.appendChild(tr);
    });
    tabla.appendChild(tbody);
    document.body.appendChild(tabla);
};
crearTablaPersonas(personas);
