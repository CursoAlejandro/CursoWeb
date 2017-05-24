var oVentana;

document.addEventListener("DOMContenLoaded", abrirventana, false )


function abrirventana (){

	if(!oVentana){
		oVentana= window.open("", "", "top-200")

	oVentana.document.write("Mensajes emergentes en una ventana")
	}
	window.open("http://google.es")
}



function cerrarventana (){
	window.close("http://google.es")
}

abrirventana();

 var id= setInterval(cerrarventana, 1000);


