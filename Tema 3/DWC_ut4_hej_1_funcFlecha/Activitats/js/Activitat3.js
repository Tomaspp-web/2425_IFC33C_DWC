let mostrarDimensionesVentana = () => {

    let ancho = window.innerWidth;
    let alto = window.innerHeight;

    let parrafo = document.createElement('p');

    parrafo.textContent = `Ancho de la ventana: ${ancho}px, Alto de la ventana: ${alto}px`;

    document.body.appendChild(parrafo);
};

mostrarDimensionesVentana();
