let ferTrampes = false;  // Esta variable se mantendrá hasta el recargado de la página

// Constructor para las cartas
function carta(nom, tipo, img) {
    this.nom = nom;
    this.tipo = tipo;
    this.img = img;
}

// Definición de la baraja de cartas
let baraja = [
    new carta("ace", "clubs"), new carta("2", "clubs"), new carta("3", "clubs"), new carta("4", "clubs"), new carta("5", "clubs"),
    new carta("6", "clubs"), new carta("7", "clubs"), new carta("8", "clubs"), new carta("9", "clubs"), new carta("10", "clubs"), 
    new carta("jack", "clubs"), new carta("queen", "clubs"), new carta("king", "clubs"),
    new carta("ace", "hearts"), new carta("2", "hearts"), new carta("3", "hearts"), new carta("4", "hearts"),
    new carta("5", "hearts"), new carta("6", "hearts"), new carta("7", "hearts"), new carta("8", "hearts"),
    new carta("9", "hearts"), new carta("10", "hearts"), new carta("jack", "hearts"), new carta("queen", "hearts"), new carta("king", "hearts"),
    new carta("ace", "spades"), new carta("2", "spades"), new carta("3", "spades"), new carta("4", "spades"), new carta("5", "spades"),
    new carta("6", "spades"), new carta("7", "spades"), new carta("8", "spades"), new carta("9", "spades"), new carta("10", "spades"),
    new carta("jack", "spades"), new carta("queen", "spades"), new carta("king", "spades"),
    new carta("ace", "diamonds"), new carta("2", "diamonds"), new carta("3", "diamonds"), new carta("4", "diamonds"), new carta("5", "diamonds"),
    new carta("6", "diamonds"), new carta("7", "diamonds"), new carta("8", "diamonds"), new carta("9", "diamonds"), new carta("10", "diamonds"),
    new carta("jack", "diamonds"), new carta("queen", "diamonds"), new carta("king", "diamonds"),
];

// Función para barajar las cartas
function barajar(baraja) {
    for (let i = baraja.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [baraja[i], baraja[j]] = [baraja[j], baraja[i]];  // Barajamos las cartas
    }
    return baraja;
}

// Función para repartir las cartas
function repartirCartes() {
    let valor = [];
    for (let i = 0; i < 5; i++) {
        valor[i] = baraja.pop();  // Sacamos 5 cartas para la jugada
    }
    return valor;
}

// Función para borrar las cartas anteriores de la página
function borrarCartes() {
    let element = document.querySelectorAll("img");
    for (let img of element) {
        img.remove();  // Eliminamos las cartas anteriores de la página
    }
}

// Función para mostrar las cartas
function mostrarCartes(valor) {
    let div = document.querySelector(".valor");
    div.innerHTML = '';  // Borramos el div antes de mostrar las nuevas cartas

    for (let carta of valor) {
        let x = document.createElement("img");
        x.setAttribute("src", `cards/${carta.nom}_of_${carta.tipo}.png`);  // Camí de la imatge
        x.setAttribute("alt", `${carta.nom} de ${carta.tipo}`);
        div.appendChild(x);
    }
}

// Función para comprobar si hay una pareja
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

// Función para iniciar el juego
function jugar() {
    if (!ferTrampes) {
        let trampes = prompt("Vols fer trampes? (SI/NO)").toLowerCase();
        
        if (trampes === "si") {
            alert("Estàs fent trampes! Guanyaràs sempre.");
            ferTrampes = true;  // Si dice "SI", marcamos que hace trampas
        } else {
            alert("Estàs jugant de forma normal.");
            ferTrampes = false;  // Si dice cualquier otra cosa, se juega normalmente
        }
    } else {
        alert("Ja estàs fent trampes! Guanyaràs sempre.");
    }

    barajar(baraja);
    let valor = repartirCartes();
    borrarCartes();

    // Mostrar las cartas solo en la zona de jugadas (.valor)
    mostrarCartes(valor);

    let parejas = comprovarParella(valor);

    let p = document.querySelector(".result");
    if (p) {
        if (ferTrampes) {
            p.innerHTML = "HAS GUANYAT SEMPRE";  // Mensaje si hace trampas
        } else {
            p.innerHTML = parejas ? "TENS UNA PARELLA" : "NO TENS CAP PARELLA";  // Mensaje normal
        }
    }
    localStorage.clear();
    localStorage.setItem('valor',JSON.stringify(valor));
    // Abrir la ventana emergente y cargar el archivo HTML
    let generarfinestra = window.open("solucio.html", "generarfinestra", "width=800,height=300");

    
}
