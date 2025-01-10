/**
 * Genera una lista ordenada con los números del 1 al 10. Usa una función flecha para crear 
 * cada elemento de la lista.
 */

// Función que crea una lista ordenada con los números del 1 al 10
let crearlistanumerica = () => {
    let list = document.createElement('ul'); 
    for (let i = 1; i <= 10; i++) {
        let item = document.createElement('li');
        item.textContent = i;
        list.appendChild(item);
    }
    document.body.appendChild(list); 
};

crearlistanumerica();