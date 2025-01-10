/**
 * Crear una lista de enlaces
 * Dado un array de objetos con propiedades nombre y URL, genera una lista desordenada 
 * (donde cada nombre sea un enlace a la URL correspondiente.
 */

let lista = [
    { nombre: 'Google', url: 'http://www.google.com' },
    { nombre: 'Drive', url: 'http://drive.google.com' },
    { nombre: 'Gmail', url: 'http://mail.google.com' },
    { nombre: 'Youtube', url: 'http://www.youtube.com' },
];

let crearlistaenlaces = () => {
    let list = document.createElement('ul');
    for (let i = 0; i < lista.length; i++) {
        let item = document.createElement('li');
        let link = document.createElement('a');
        link.textContent = lista[i].nombre;
        link.href = lista[i].url;
        link.target = '_blank'; 
        item.appendChild(link);
        list.appendChild(item);
    }
    document.body.appendChild(list); 
};


crearlistaenlaces();
