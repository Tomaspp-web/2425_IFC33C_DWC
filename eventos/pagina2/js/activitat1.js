/**
 * Crea un documento HTML con tres elementos anidados: un div, un section y un button.
Utiliza JavaScript para agregar manejadores de eventos a cada uno de ellos. Estos
manejadores deben mostrar un mensaje en la consola con el nombre del elemento y la fase
en la que se encuentra (captura o burbuja).
Investiga y responde:
1. ¿En qué orden se ejecutan los eventos en la fase de captura?
2. ¿Qué sucede si detienes la propagación de eventos con stopPropagation() donde lo tienes hace la propagacion no sige?
3. ¿Cómo afecta la fase de burbuja al comportamiento general?
 */

document.addEventListener('DOMContentLoaded', cargaDOM);

function cargaDOM() {
    document.getElementById('div1').addEventListener('click', (event) => {
        logEvent('Div', 'captura');
    }, true);

    document.getElementById('div1').addEventListener('click', (event) => {
        logEvent('Div', 'burbuja');
    },false);

    document.getElementById('section1').addEventListener('click', (event) => {
        logEvent('Section', 'captura');
    }, true);

    document.getElementById('section1').addEventListener('click', (event) => {
        logEvent('Section', 'burbuja');
    },false);

    document.getElementById('button1').addEventListener('click', (event) => {
        logEvent('Button', 'captura');
        event.stopPropagation();
    }, true);

    document.getElementById('button1').addEventListener('click', (event) => {
        logEvent('Button', 'burbuja');
    },false);
}

function logEvent(element, phase) {
    console.log(`${element} - ${phase}`);
}


