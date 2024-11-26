function mostrarURLActual(){
    alert(window.location.href);
}

function irAtras(){
    if (history.length > 1){
        history.back();
    } else {
        alert("no hay páginas para ir hacia atrás");
    }
    
}

function irAdelante(){
    try{
        history.forward();
    } catch (e){
        alert("no ha páginas para ir hacia adelanter");
    }
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
       try{
        window.location.assign(url);
       }catch(e){
        alert("Url invalida")
       }
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
