function comprobaranagrama(texto1,texto2) {
let resultat;

    texto1 = texto1.split("").sort().join("");
    console.log(texto1);
    texto2 = texto2.split("").sort().join("");
    console.log(texto2);

    if (texto1 === texto2) {
        resultat = true;
    }
    return resultat
}
comprobaranagrama("mani","iman");