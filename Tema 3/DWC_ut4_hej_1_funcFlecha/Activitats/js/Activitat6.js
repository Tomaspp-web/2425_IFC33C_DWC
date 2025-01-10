/** Ejercicio 6: Crear una tabla de multiplicar
Genera una tabla HTML que muestre la tabla de multiplicar del número 5 (del 1 al 10). Usa
una función flecha para generar cada fila de la tabla.
*/

let i = 4;
let table = document.createElement('table');

let creartaulamultiplicar = (i) => {
    for (let j = 1; j <= 10; j++) {
        let row = document.createElement('tr');

        let cell1 = document.createElement('td');
        let cell2 = document.createElement('td');

        cell1.textContent = `${i} x ${j}`;
        cell2.textContent = i * j;

        row.appendChild(cell1);
        row.appendChild(cell2);

        table.appendChild(row);
    }
    return table;
}

document.body.appendChild(creartaulamultiplicar(i));


