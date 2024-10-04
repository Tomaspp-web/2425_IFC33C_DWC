
const partitures = [
    {nom:"La Balanguera",notes:["DO", "RE", "MI", "FA", "FA", "SOL", "SOL", "LA#", "LA#"] },
    { nom: "Happy Birthday", notes: ["DO", "DO", "RE", "DO", "FA", "MI", "DO", "DO", "RE", "DO", "SOL", "FA"] },
    { nom: "Sant Antoni i el dimoni", notes: ["MI", "RE", "DO", "RE", "FA", "SOL", "FA", "MI"] }
];

const cerca = ["DO","RE"];

function Nota(nom, tipus){
    this.nom = nom;
    this.tipus = tipus;
}
function addcerca(nom){
    const novaNota = new Nota(nom);
    cerca.push[novaNota.nom + novaNota.tipus];
}
function cercador() {
    var resultats = [];

    partitures.forEach(partitura => {
        var notesPartitura = partitura.notes.join(" ");
        var notesCerca = cerca.join(" ");
        if (notesPartitura.includes(notesCerca)) {
            resultats.push(partitura.nom);
        }
    });

    if (resultats.length>0) {
        console.log("Partitures trobades: " + resultats.join(", "));
    } else{
        console.log("Sense resultats")
    }
}
cercador();
