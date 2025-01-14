document.addEventListener("DOMContentLoaded", cargaDOM);

function cargaDOM() {
    let contenedor = document.getElementById("contenedor");
    let listabotones = document.querySelectorAll(".boton");

    contenedor.addEventListener("click", clickDiv);
    
    listabotones.forEach(boton => {
        boton.addEventListener("click", clickBoton);
    })
}

function clickDiv(e){
    if (e.target.classList.contains("boton")){
        console.log(`Click en ${e.target.textContent}`);
    }
}

function clickBoton(e){
    e.stopPropagation();
    console.log(`Evento detenido en ${e.target.textContent}`);
}