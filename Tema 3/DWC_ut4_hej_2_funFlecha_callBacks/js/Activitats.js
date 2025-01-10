/**
 * Ejercicio 1: Ordenar y mostrar una lista estática
 * Crea un array de números y ordénalo en orden ascendente y descendente.
 * Luego, muestra los números en el DOM dentro de una lista <ul>.
 * Requisitos:
 * Usa sort con una función flecha como callback para definir el criterio de orden.
 * Recorre el array con forEach para crear los elementos <li> y añadirlos al DOM.
 * Manipula el DOM sin utilizar eventos.
 */
let listanumeros = [5,3,48,1,9,2,7,4,120,6,55,23,28,21,50,86,2,123];

let ordenar = (listanumeros) => {
    
    let arrayAsc = [...listanumeros].sort((a, b) => a - b);
    let arrayDesc = [...listanumeros].sort((a, b) => b - a);
    return [arrayAsc, arrayDesc];
};

let mostrarArrayPantalla = (titulo, array) => {
    let container = document.createElement("div");
    let h3 = document.createElement("h3");
    h3.textContent = titulo;
    container.appendChild(h3);

    let ul = document.createElement("ul");
    array.forEach((element) => {
        let li = document.createElement("li");
        li.textContent = element;
        ul.appendChild(li);
    });

    container.appendChild(ul);
    document.body.appendChild(container);
};

let [ascendente, descendente] = ordenar(listanumeros);

mostrarArrayPantalla("Orden Ascendente", ascendente);
mostrarArrayPantalla("Orden Descendente", descendente);

