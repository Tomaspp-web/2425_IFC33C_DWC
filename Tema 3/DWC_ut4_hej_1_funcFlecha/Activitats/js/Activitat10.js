/**
 * Calcular el promedio de un array 
 * Dado un array de números, usa una función flecha para calcular su promedio y muestra el
 * resultado en un párrafo
 */



let array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19];

let calcularPromedioArray = () => {
    let sumar= 0;
    for (let i = 0; i < array.length; i++) {
        sumar += array[i];
    }
    console.log(sumar);
    console.log(array.length);
    let promedio = sumar / array.length;
    let parrafo = document.createElement('p');
    parrafo.textContent = `El promedio del array es ${promedio}`;
    document.body.appendChild(parrafo);
}

calcularPromedioArray(array);