let nombres = ['Juan', 'María', 'Pedro', 'Ana', 'Luis'];

let generarListaDinamica = (nombresArray) => {

    let lista = document.createElement('ul');

    nombresArray.forEach(nombre => {

        let elemento = document.createElement('li');

        elemento.textContent = nombre;

        lista.appendChild(elemento);
    });
    document.body.appendChild(lista);
};

generarListaDinamica(nombres);
