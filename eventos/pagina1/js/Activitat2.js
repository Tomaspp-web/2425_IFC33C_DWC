document.addEventListener("DOMContentLoaded", (event) => {
    button.addEventListener("click", buttonclick(event));
  });

  function buttonclick(event) {
    alert("El texto del botón cambiará");
    event.innerText = "!Texto cambiado¡";
  }
  document.addEventListener("DOMContentLoaded", cargaDom);

function cargaDom() {
    let boton = document.querySelectorAll("#boton1")[0];

  //  boton.onclick = () => {
  //   alert("El texto del boton cambiará!!");
  //   boton.innerText = "Boton cambiado";
  // }

  boton.addEventListener("click", () => {
    alert("El texto del boton cambiará!!");
    boton.innerText = "Boton cambiado";
  });
}