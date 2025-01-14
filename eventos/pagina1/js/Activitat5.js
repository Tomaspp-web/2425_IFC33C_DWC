document.addEventListener("DOMContentLoaded", (event) => {
    let elementos = document.querySelectorAll("li");

    elementos.forEach(elemento => {
        elemento.addEventListener("click", () => mostrarTexto(elemento));
    });
});

function mostrarTexto(elemento) {
    alert(`Has hecho clic en: ${elemento.innerText}`);
    elemento.innerText = "Seleccionado";
}



