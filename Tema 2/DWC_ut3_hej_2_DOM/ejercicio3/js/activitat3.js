let tareas = [
    {nom:"Entregar projecte",categoria:"Estudios"},
    {nom:"pasetjar al ca",categoria:"Casa"},
    {nom:"reunions dema",categoria:"Trabajo"},
    { nom: 'fer el llit', categoria: 'Casa' },
    { nom: 'Preparar la presentació', categoria: 'Trabajo' },
    { nom: 'Revisar els documents', categoria: 'Trabajo' },
    { nom: 'Estudiar per el examen', categoria: 'Estudios' },
    { nom: 'llegir el capítol 3', categoria: 'Estudios' },
];

let contenedorTareas = document.getElementById('contenidor_tareas');

let categorias = [
    { nom: "Casa", lista: document.createElement("ul") },
    { nom: "Trabajo", lista: document.createElement("ul") },
    { nom: "Estudios", lista: document.createElement("ul") }
];

categorias.forEach(categoria => {
    let h2 = document.createElement("h2");
    h2.textContent = categoria.nom;
    contenedorTareas.appendChild(h2);
    contenedorTareas.appendChild(categoria.lista);
});

tareas.forEach(tarea =>{
    let categoria = categorias.find(nomc=> nomc.nom === tarea.categoria);
    if(categoria){
        let li = document.createElement("li");
        li.textContent = tarea.nom;
        categoria.lista.appendChild(li);
    }
});
