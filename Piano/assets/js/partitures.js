// Les partitures que tenim ara
let partitures = [
    {nom: "La Balanguera", idioma: "ca"},
    {nom: "Merry Christmas", idioma: "en"},
    {nom: "Joyeux No Nadall", idioma: "fr"},
    {nom: "Schöne Weihnachten", idioma: "de"},
    {nom: "Sant Antoni i el Dimoni", idioma: "ca"},
    {nom: "Ull de Tigre", idioma: "ca"},
    {nom: "Eye of the Tiger", idioma: "en"},
    {nom: "L'Œil du Tigre", idioma: "fr"},
    {nom: "Auge des Tigers", idioma: "de"},
    {nom: "Perdre's", idioma: "ca"},
    {nom: "Lose Yourself", idioma: "en"},
    {nom: "Perdre soi-même", idioma: "fr"},
    {nom: "Verlier dich selbst", idioma: "de"},
    {nom: "Bohemian Rhapsody", idioma: "en"},
    {nom: "Imagine", idioma: "en"}
];

// Funció per barallar l'array de partitures aleatòriament
function barallarArray(array) {
    array.sort(() => Math.random() - 0.5);
}

// Funció per esborrar la partitura
function esborrarPartitura(nom, event) {
    // Confirmar l'eliminació
    if (confirm("Vols esborrar la partitura " + nom + "?")) {
        let fila = event.target.closest("tr"); // Troba la fila on es troba el botó
        fila.remove(); // Elimina la fila de la taula

        // Mostrar un alert després d'eliminar la partitura
        alert("La partitura '" + nom + "' ha estat eliminada.");
    }
}

// Funció per crear la taula de partitures
function crearTaula() {
    // Barallar les partitures aleatòriament
    barallarArray(partitures);

    // Crear la taula i els seus elements
    let taula = document.createElement('table');
    taula.id = 'partituresTable'; // Assignar un id per poder aplicar estils

    // Crear el capçal de la taula amb h2 o h3 en lloc de th
    let thead = document.createElement('thead');
    let headerRow = document.createElement('tr');
    headerRow.innerHTML = `
        <td><h2>Títol</h2></td>
        <td><h2>Idioma Original</h2></td>
        <td><h2>Accions</h2></td>
    `;
    thead.appendChild(headerRow);
    taula.appendChild(thead);

    // Crear el cos de la taula (tbody)
    let tbody = document.createElement('tbody');
    taula.appendChild(tbody);

    // Trobar el div del botó "Nova partitura" per afegir la taula després d'ell
    let divBoton = document.querySelector('.center-button');

    // Afegir la taula al cos del document just després del botó
    divBoton.parentNode.insertBefore(taula, divBoton.nextSibling);

    // Omplir la taula amb les partitures barallades
    for (let i = 0; i < partitures.length; i++) {
        let partitura = partitures[i]; // Obtenim la partitura aleatòria
        let fila = document.createElement("tr");

        // Crear les cel·les per a cada columna
        let titol = document.createElement("td");
        titol.textContent = partitura.nom;

        let idioma = document.createElement("td");
        idioma.textContent = partitura.idioma;

        let accions = document.createElement("td");

        // Crear el botó "Editar"
        let btnEditar = document.createElement("button");
        btnEditar.setAttribute("onclick", "editarPartitura('" + partitura.nom + "')"); // Estableix la funció i el paràmetre
        let iEditar = document.createElement("i");
        iEditar.setAttribute("class", "fas fa-edit"); // Afegir la icona d'editar
        btnEditar.appendChild(iEditar);
        btnEditar.innerHTML += " Editar"; // Afegir el text "Editar"

        // Crear el botó "Esborrar"
        let btnEsborrar = document.createElement("button");
        btnEsborrar.setAttribute("onclick", "esborrarPartitura('" + partitura.nom + "', event)");
        let iEsborrar = document.createElement("i");
        iEsborrar.setAttribute("class", "fas fa-trash-alt"); // Afegir la icona d'esborrar
        btnEsborrar.appendChild(iEsborrar);
        btnEsborrar.innerHTML += " Esborrar"; // Afegir el text "Esborrar"

        // Afegir els botons a la columna d'accions
        accions.appendChild(btnEditar);
        accions.appendChild(btnEsborrar);

        // Afegir les cel·les a la fila
        fila.appendChild(titol);
        fila.appendChild(idioma);
        fila.appendChild(accions);

        // Afegir la fila a la taula
        tbody.appendChild(fila);
    }
}

// Funció per editar la partitura (per exemple, mostra un missatge)
function editarPartitura(nom) {
    alert("Editant la partitura: " + nom);
}

// Cridar la funció per crear la taula quan el document estigui carregat
document.addEventListener("DOMContentLoaded", function() {
    crearTaula();
});
