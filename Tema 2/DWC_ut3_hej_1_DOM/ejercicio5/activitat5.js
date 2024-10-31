let encabezados = document.querySelectorAll("h1, h2,h3,h4,h5,h6");

for (let encabezado of encabezados) {
    encabezado.style.color = "red";
    encabezado.style.fontSize = "40px";
    encabezado.style.fontFamily = "Arial";
}
