function mostrarURLActual(){
    alert(window.location.href);
}

function irAtras(){
    window.history.back();
}

function irAdelante(){
    window.history.forward();
}

function mostrarInfoNavegador(){
    var info ="Nombre del navegador: " + navigator.userAgent +"\n";
    info += "Idioma del navegador: " + navigator.language +"\n";
    info += "El navegador esta en linia: " +navigator.onLine +"\n";
    alert(info) ;
}

function redirigirURL(){
    var url = document.getElementById("urlInput").value;
    if (url){
        window.location.assign(url);
    } else{
        alert("Per favor posa una Url valida. Gràcies")
    }
    
}


var mywindows;
function abrirPopup(){
   mywindows= window.open("https://www.softcatala.org",
    "softcatala","width=1000 , height=800");
}
function cerrarPopup() {
    mywindows.window.close();
}
