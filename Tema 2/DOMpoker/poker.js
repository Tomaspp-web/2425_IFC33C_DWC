function carta(nom, tipo, img) {
    this.nom = nom;
    this.tipo = tipo;
    this.img = img;
}

let baraja = [
    //clubs
    new carta("ace", "clubs"), new carta("2", "clubs"), new carta("3", "clubs"), new carta("4", "clubs"), new carta("5", "clubs"),
    new carta("6", "clubs"), new carta("7", "clubs"), new carta("8", "clubs"), new carta("9", "clubs"), new carta("10", "clubs"), 
    new carta("jack", "clubs"), new carta("queen", "clubs"), new carta("king", "clubs"),
    //hearts
    new carta("ace", "hearts"), new carta("2", "hearts"), new carta("3", "hearts"), new carta("4", "hearts"), 
    new carta("5", "hearts"), new carta("6", "hearts"), new carta("7", "hearts"), new carta("8", "hearts"), 
    new carta("9", "hearts"), new carta("10", "hearts"), new carta("jack", "hearts"), new carta("queen", "hearts"), new carta("king", "hearts"),
    //spades
    new carta("ace", "spades"), new carta("2", "spades"), new carta("3", "spades"), new carta("4", "spades"), new carta("5", "spades"), 
    new carta("6", "spades"), new carta("7", "spades"), new carta("8", "spades"), new carta("9", "spades"), new carta("10", "spades"), 
    new carta("jack", "spades"), new carta("queen", "spades"), new carta("king", "spades"),
    //diamonds
    new carta("ace", "diamonds"), new carta("2", "diamonds"), new carta("3", "diamonds"), new carta("4", "diamonds"), new carta("5", "diamonds"), 
    new carta("6", "diamonds"), new carta("7", "diamonds"), new carta("8", "diamonds"), new carta("9", "diamonds"), new carta("10", "diamonds"), 
    new carta("jack", "diamonds"), new carta("queen", "diamonds"), new carta("king", "diamonds"),
];

function barajar(baraja) {
    for (let i = baraja.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [baraja[i], baraja[j]] = [baraja[j], baraja[i]];
    }
    return baraja;
}

function repartirCartes() {
    let valor = [];
    for (let i = 0; i < 5; i++) {
        valor[i] = baraja.pop(); // Use pop() without arguments
    }
    return valor;
}

function repartirMano() {
    let mano = [];
    for (let i = 0; i < 2; i++) {
        mano[i] = baraja.pop(); // Use pop() without arguments
    }
    return mano;
}

function borrarCartes() {
    let element = document.querySelectorAll("img");
    for (let img of element) {
        img.remove();
    }
}

function jugar() {
    barajar(baraja);
    let valor = repartirCartes();
    borrarCartes();
    mostrarCartes(valor);
    let parejas = comprovarParella(valor);

    let p = document.querySelector(".result");
    if (p) {
        p.innerHTML = parejas ? "TENS UNA PARELLA" : "NO TENS CAP PARELLA";
    }
}

function comprovarParella(valor) {
    let parejas = false;

    for (let i = 0; i < valor.length - 1; i++) {
        for (let j = i + 1; j < valor.length; j++) {
            if (valor[i].nom === valor[j].nom) {
                parejas = true;
                break;
            }
        }
        if (parejas) break;   
    }

    return parejas;
}

function mostrarCartes(valor) {
    let div = document.querySelector(".valor");
    div.innerHTML = '';
    for (let carta of valor) {
        let x = document.createElement("img");
        x.setAttribute("src", `cards/${carta.nom}_of_${carta.tipo}.png`);
        x.setAttribute("alt", `${carta.nom} de ${carta.tipo}`);
        div.appendChild(x);
    }
}


/**
* var arratValores = ["ace","2","3","4","5","6","7","8","9","10","jack","queen","King"];
* var arraypalos = ["clubs","diamonds","Hearts","spades"];
* 
* var baraja = [];
* 
* for(let palo of arrayPalos){
*   for(let valor of arrayValores){
*       baraja.push(new carta(valor,palo));
*   }
* }
* 
* function barajar(baraja){
*   return baraja.sort(
*   function(){
*       return Math.random() - 0.5;
*       }
*   )
* }
*

 */