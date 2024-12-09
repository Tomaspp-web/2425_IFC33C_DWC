
let agregarParrafoDinamico = () => {

    let parrafo = document.createElement('p');

    parrafo.textContent = 'Este es un párrafo dinámico';

    document.body.appendChild(parrafo);
};


agregarParrafoDinamico();