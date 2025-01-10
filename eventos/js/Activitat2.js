document.addEventListener("DOMContentLoaded", (event) => {
    button.addEventListener("click", buttonclick(event));
  });

  function buttonclick(event) {
    alert("El texto del botón cambiará");
    event.innerText = "!Texto cambiado¡";
  }
  