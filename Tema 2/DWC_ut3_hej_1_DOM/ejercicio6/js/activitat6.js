let persones = [
    {nombre: "tomas",edad:"21",email:"tomassamo@hotmail.com",telefon:"972554994"},
    {nombre: "miquel",edad:"18",email:"miquel43@hotmail.com",telefon:"974532134"},
    {nombre: "pedro",edad:"40",email:"pedro123@hotmail.com",telefon:"97258756"},
    {nombre: "mateu",edad:"35",email:"mateutorres@hotmail.com",telefon:"972552349"},
    {nombre: "jaume",edad:"45",email:"jaumeoficial@hotmail.com",telefon:"972550981"},
    {nombre: "samael",edad:"74",email:"samael20@hotmail.com",telefon:"972550120"}
];

let table = document.createElement("table");
let head = ["nombre","edad","email","telefon"]
let td;
let tr;

for (let persona of persones) {
    let tr = document.createElement("tr");
    for (let propiedad of head) {
        let td = document.createElement("td");
        td.textContent = persona[propiedad];
        tr.appendChild(td);
    }
    table.appendChild(tr);
}
    
document.body.appendChild(table);


/**
 * for (let persona of persones) {
}
for (let valor of Object.values (persona)) {
}
 */