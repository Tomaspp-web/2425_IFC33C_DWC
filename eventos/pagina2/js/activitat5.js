document.addEventListener('DOMContentLoaded', cargaDOM);

function cargaDOM(){

    let contenedor = document.getElementById('contenedor');
    let section = document.getElementById('seccion');
    let boton = document.getElementById('boton');


    contenedor.addEventListener("click", ()=>{
        console.log("div - captura")
    },true);
    section.addEventListener("click", ()=>{
        console.log("section - burbuja")
    },false);
    boton.addEventListener("click", (e)=>{
        console.log("boton - burbuja")
        e.stopPropagation();
    });

}
