function Carta(nom, tipo, img) {
    this.nom = nom;
    this.tipo = tipo;
    this.img = img;
}

let baraja = [
    //clubs
    new Carta("ace", "clubs"), new Carta("2", "clubs"), new Carta("3", "clubs"), new Carta("4", "clubs"), new Carta("5", "clubs"),
     new Carta("6", "clubs"), new Carta("7", "clubs"), new Carta("8", "clubs"), new Carta("9", "clubs"), new Carta("10", "clubs"), 
     new Carta("jack", "clubs"), new Carta("queen", "clubs"), new Carta("king", "clubs"),
     //hearts
    new Carta("ace", "hearts"), new Carta("2", "hearts"), new Carta("3", "hearts"), new Carta("4", "hearts"), 
    new Carta("5", "hearts"), new Carta("6", "hearts"), new Carta("7", "hearts"), new Carta("8", "hearts"), 
    new Carta("9", "hearts"), new Carta("10", "hearts"), new Carta("jack", "hearts"), new Carta("queen", "hearts"), new Carta("king", "hearts"),
    //spades
    new Carta("ace", "spades"), new Carta("2", "spades"), new Carta("3", "spades"), new Carta("4", "spades"), new Carta("5", "spades"), 
    new Carta("6", "spades"), new Carta("7", "spades"), new Carta("8", "spades"), new Carta("9", "spades"), new Carta("10", "spades"), 
    new Carta("jack", "spades"), new Carta("queen", "spades"), new Carta("king", "spades"),
    //diamonds
    new Carta("ace", "diamonds"), new Carta("2", "diamonds"), new Carta("3", "diamonds"), new Carta("4", "diamonds"), new Carta("5", "diamonds"), 
    new Carta("6", "diamonds"), new Carta("7", "diamonds"), new Carta("8", "diamonds"), new Carta("9", "diamonds"), new Carta("10", "diamonds"), 
    new Carta("jack", "diamonds"), new Carta("queen", "diamonds"), new Carta("king", "diamonds"),
];

function barajar(baraja) {
    return baraja.sort(() => 0.5 - Math.random());
}

function repartircarta() {
    let carta = [];
    for (let i = 0; i < 5; i++) {
        carta.push(baraja.pop());
    }
    return carta;
}

function repartirMano() {
    let mano = [];
    for (let i = 0; i < 2; i++) {
        mano.push(baraja.pop());
    }
    return mano;
}

function borrarcarta() {
    let elements = document.querySelectorAll("img");
    for (let img of elements) {
        img.remove();
    }
}

function jugar() {
    barajar(baraja);
    let carta = repartircarta();
    borrarcarta();
    mostrarcarta(carta);
    let parejas = comprovarParella(carta);

    let p = document.querySelector("#resultat");
    p.innerHTML = parejas ? "TENS UNA PARELLA" : "NO TENS CAP PARELLA";
}

function comprovarParella(carta) {
    let parejas = false;
    for (let i = 0; i < carta.length - 1; i++) {
        for (let j = i + 1; j < carta.length; j++) {
            if (carta[i].nom === carta[j].nom) {
                parejas = true;
                break;
            }
        }
        if (parejas) break;
    }
    return parejas;
}

function mostrarcarta(carta) {
    let div = document.querySelector(".carta");
    div.innerHTML = '';
    for (let carta of carta) {
        let x = document.createElement("img");
        x.setAttribute("src", `cards/${carta.nom}_of_${carta.tipo}.png`);
        x.setAttribute("alt", `${carta.nom} de ${carta.tipo}`);
        div.appendChild(x);
    }
}

