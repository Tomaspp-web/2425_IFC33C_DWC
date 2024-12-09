// CALLBACK HELL !!!!!
function tareaprincipal(callback) {
    setTimeout(() => {
        console.log("Realizando la tarea principal");
    }, 1000);
    callback();
}

function tareaSecundaria(callback) {
    setTimeout(() => {
        console.log("Realizando la segunda tarea");
    }, 1000);
    callback();
}

function tareaTercera(callback) {
    setTimeout(() => {
        console.log("Realizando la Tercera tarea");
    }, 1000);
    callback();
}

tareaprincipal(() => {
    tareaSecundaria(() => {
        tareaTercera(() => {
            setTimeout(() => {
            console.log("Hemos terminado todas las tareas");
            },1000);

        });
    });
});

// Promesas
function tareaPrincipal1() {
    return new Promise((resolucion) => {
        setTimeout(() => {
            console.log("Tarea Principal controlada");
            resolucion();
        }, 1000);
    });
}
function tareaSecundaria2() {
    return new Promise((resolucion) => {
        setTimeout(() => {
            console.log("Tarea Secundaria controlada");
            resolucion();
        }, 3000);
    });
}

function tareaTercera3() {
    return new Promise((resolucion) => {
        setTimeout(() => {
            console.log("Tarea Tercera controlada");
            resolucion();
        }, 1000);
    });
}

tareaPrincipal1()
    .then(tareaSecundaria2)
    .then(tareaTercera3).then(() => {
        setTimeout(() => {
        console.log("Hemos terminado todas las tareas");
        },5000);
    });
// ASYNC/AWAIT
// async function ejecutarTareas(){
//     await tareaPrincipal1();
//     await tareaSecundaria2();
//     await tareaTercera3();
//     console.log("Hemos terminado todas las tareas");
// }

// ejecutarTareas();