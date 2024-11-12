function generartablamultiplicar() {
    let num = 10;
    let table = document.createElement("table");

    let header = document.createElement("tr");
    let Cell = document.createElement("td"); 
    header.appendChild(Cell);
    
    for (let i = 1; i <= num; i++) {
        let td = document.createElement("td");
        td.textContent = i;
        header.appendChild(td);
    }
    table.appendChild(header);

    for (let z = 1; z <= num; z++) {
        let tr = document.createElement("tr");

        let row = document.createElement("td");
        row.textContent = z;
        tr.appendChild(row);

        for (let i = 1; i <= num; i++) {
            let td = document.createElement("td");
            td.textContent = i * z;
            tr.appendChild(td);
        }

        table.appendChild(tr);
    }

    document.body.appendChild(table); 
}

generartablamultiplicar();
