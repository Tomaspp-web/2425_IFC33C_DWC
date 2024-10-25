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


function sumar_matriu(matriu){
    let suma =0;
    for (let fila of matriu){
        for(let element of fila){
            suma += element;
        }
    }
    return suma;
}

let matriu = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

const resultat= sumar_matriu(matriu);
console.log("la suma dels elemets de la"+ resultat);


let x = "h o l a,  soc, e  n t o m a  s";

function eliminarespais(x){
    console.log(x.replace(/\s/g,""))
}
eliminarespais(x);

let array = [
    1.1,2.2,3.4,-4,-9,6.1,7.3,8.5,5.4,-8  
]

array.reverse();

console.log(array); // Resultado: [5, 4, 3, 2, 1]

array.sort(
    function menoramayor(a,b){
    return a - b
});
console.log(array);

array.sort(
    function mayoramenor(a,b){
    return b - a
});
console.log(array);