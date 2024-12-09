const texto = "Este es un texto de ejemplo para contar cuántas palabras tiene.";

const contarPalabras = (texto) => {
    return texto.split(' ').length;
};

const resultado = contarPalabras(texto);

const parrafo = document.createElement('p');
parrafo.textContent = `El texto tiene ${resultado} palabras.`;

document.body.appendChild(parrafo);

