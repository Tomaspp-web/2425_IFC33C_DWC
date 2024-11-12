let images = [
    { url: 'img/cova.jpg', descripcion: 'Imagen 1' },
    { url: 'img/espai.jpg', descripcion: 'Imagen 2' },
    { url: 'img/spacex.jpg', descripcion: 'Imagen 3' },
    { url: 'img/spacex1.jpg', descripcion: 'Imagen 4' }
];

const gallery = document.getElementById('gallery');

function generargaleria(){
    images.forEach(image => {
        let imatge = document.createElement('div');
        
        let img = document.createElement('img');
        img.src = image.url;
        img.alt = image.descripcion;

        const descripcion = document.createElement('p');
        descripcion.textContent = image.descripcion;

        imatge.appendChild(img);
        imatge.appendChild(descripcion);

        gallery.appendChild(imatge);
    });
}

generargaleria();
