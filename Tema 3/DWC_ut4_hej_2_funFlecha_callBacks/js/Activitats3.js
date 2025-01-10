/** Mostrar propiedades del objeto window
Recorre las propiedades del objeto window y muestra las primeras 10 en una lista <ul>.
Ordena las propiedades alfabéticamente antes de mostrarlas.
Requisitos:
● Usa Object.keys() para obtener las propiedades de window.
● Usa sort con un callback.
● Usa forEach para recorrer las propiedades y manipular el DOM.
 */

let mostrarPropietatsWindow = () => {
    let propietas = Object.keys(window);
    let propietatswindowsort = propietas.sort((a,b)=>a.localeCompare(b));
    let propietatswindow10 = propietatswindowsort.slice(0, 10);
    let ul = document.createElement("ul");
    propietatswindow10.forEach((element) => {
        let li = document.createElement("li");
        li.textContent = element;
        ul.appendChild(li);
    });
    document.body.appendChild(ul);
}
mostrarPropietatsWindow();