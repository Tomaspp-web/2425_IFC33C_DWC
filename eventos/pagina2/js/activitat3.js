document.addEventListener('DOMContentLoaded', cargaDOM);

function cargaDOM(){
    let listali = document.querySelectorAll('li');

    listali.forEach((li) => {
        li.addEventListener("click",addListener);
    });

    let boton = document.getElementById('boton');
    boton.addEventListener("click", addbutton);
}

function addbutton(){
    let ul = document.querySelector('ul');
    let nuevaTarea = document.createElement('li');
    nuevaTarea.innerHTML = `Tarea ${ul.children.length + 1}`;
    nuevaTarea.addEventListener("click",addListener);
    ul.appendChild(nuevaTarea);
}

function addListener(e){
    if (e.target.tagName === 'LI'){
        alert(`Seleccionaste: ${e.target.textContent}`)
    }
}
