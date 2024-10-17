var num = 10;

for (let i = 0; i <= num; i++) {
    if (i % 2 === 0) {
        console.log(i + " és parell");
    } else {
        continue
    }
}


console.log("--------------------")

 for (let z = 1;z<=num;z++){
    console.log("Taula del "+z);
    for(let i=1;i<=num;i++){
        let resultat= i*z;
        console.log(i + " x " + z +" = "+resultat );
    }
 }
let milla;
 let km = 5;
function pasarkmamillas(km){
    const millas = 0.621371; // 1 km = 0.621371 milla
    return km * millas;
}
console.log( km +" Km " + " = " + pasarkmamillas(km) + " millas");