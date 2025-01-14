document.addEventListener('DOMContentLoaded', cargaDOM);    

function cargaDOM(){
    let formulario = document.getElementById('formulario');
    let boton = document.getElementById('boton');

    

    formulario.addEventListener("submit", (e) => {
        alert('Formulario enviado')
        console.log(e);
    });
    boton.addEventListener("click", (e) => {
        alert('Boton pulsado')
        // console.log(e);
        e.stopPropagation();
        e.preventDefault();
    });
}