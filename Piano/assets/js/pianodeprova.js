// Les partitures que tenim ara.
let partitures = [
    {nom:"La Balanguera",notes:["DO", "RE", "MI", "FA", "FA", "SOL", "SOL", "LA#", "LA#"] },
    { nom: "Happy Birthday", notes: ["DO", "DO", "RE", "DO", "FA", "MI", "DO", "DO", "RE", "DO", "SOL", "FA"] },
    { nom: "Sant Antoni i el dimoni", notes: ["MI", "RE", "DO", "RE", "FA", "SOL", "FA", "MI"] }
];

let cerca = ["DO","RE","MI"];

//Constructor de l'objecte nota per quina nota, estam intentant cercar.
function Nota(nom, tipus){
    this.nom = nom;
    this.tipus = tipus;
}

//Funció per veure el que estam cercant.
function addcerca(nom){
    let novaNota = new Nota(nom);
    cerca.push[novaNota.nom + novaNota.tipus];
}

// Funció per cercar a quina cançó hi ha les notes
function cercador() {
    var resultats = [];

    //El que està fent és que a partitures s'està separant amb partitura. Després notespartitura agafa les notes de partitura.
    for (var i = 0;i<partitures.length;i++){
        var partitura = partitures[i];
        var notespartitura = partitura.notes;
        var trobatnotes = false;

        //Aquí el que feim es recorre cada partitura 
        for (var z = 0;z<notespartitura.length - cerca.length; z++ ){
            var coincidencia = true;

            // Aquí miram si les notes que cercam coincideixen amb el que hi ha dins la partitura d'aquell moment.
            for (var j= 0;j<cerca.length;j++){
                if(notespartitura[z+j]!==cerca[j]){
                    coincidencia= false;
                    break;
                }
            }
            // Aquí el que feim és que si trobam coincidència agafam el nom d'aquesta partitura.
            if(coincidencia){
                resultats.push(partitura.nom);
                trobatnotes = true;
                break;
            }
        }
    }
    // Aquí mostram el resultat a la consola tant si hem trobat el que cercàvem o no
    if (resultats.length > 0) {
        for (var i = 0; i < resultats.length; i++) {
           console.log("Partitura que coincideix: "+ resultats[i]);
        }
    } else {
        console.log("Sense resultats de cançons que tenc.");
    }
}

// Cridam a la funció cercador
cercador();

