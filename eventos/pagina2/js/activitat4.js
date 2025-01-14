document.addEventListener('DOMContentLoaded', cargaDOM);

function cargaDOM(){
    let enlace = document.querySelector('a');
    enlace.addEventListener("click", clicarenlace);


    let div = document.getElementById('div');
    div.addEventListener("click", clicarDiv);
}

function clicarenlace(e){
    alert('Has hecho clic en el enlace');
    e.preventDefault();
    e.stopPropagation();
}
function clicarDiv(){
    alert('Has hecho clic en el div');
}