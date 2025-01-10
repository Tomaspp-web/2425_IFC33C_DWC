/** Crea un programa que muestre el nombre del navegador (navigator.userAgent) y el idioma
(navigator.language) en dos párrafos separados. Usa una función flecha para construir el
contenido.
*/

let mostrarInfoNavegador = () => {
    let parrafo1 = document.createElement('p');
    parrafo1.textContent = `El navegador es: ${navigator.userAgent}`;
    let parrafo2 = document.createElement('p');
    parrafo2.textContent = `El idioma es: ${navigator.language}`;
    
    document.body.appendChild(parrafo1);
    document.body.appendChild(parrafo2);
};

mostrarInfoNavegador();