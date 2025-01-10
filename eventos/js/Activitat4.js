document.addEventListener("DOMContentLoaded", (event) => {
    let increment = document.getElementById("incrementar");
    let reinici = document.getElementById("reiniciar");

    increment.addEventListener("click", incrementar);
    reinici.addEventListener("click", reiniciar);

});
let contador = 0;

function incrementar() {
    contador++;
    document.getElementById("contador").innerText = contador;
}
function reiniciar() {
    contador = 0;
    document.getElementById("contador").innerText = contador;
}

