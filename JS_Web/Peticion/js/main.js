this.oDom = {


    btnSaludar: document.querySelector("#btnSaludar"),
    pSaludo: document.querySelector("#saludo"),
}

//Ajax 1 : Instanciamos objeto
this.oAjax = new XMLHttpRequest();

function controller() {
    //Definicion de los manejadores de eventos 
    this.oDom.btnSaludar.addEventListener("click", this.actualizar.bind(this))


    // Ajax 2a Definicion de respuesta
    this.oAjax.onreadystatechange = this.actualizarbind(this);
}

//Ajax 3 realiza peticion al servidor
function pedirAjax() {
    this.oAjax.open('GET', "http://10.202.150.15:8080/Saludos.txt")
    this.oAjax.send(null);
}

//Ajax 2b Prepara funcion de respuesta
function actualizar() {


    if (this.oAjax.readyState == 4) {
        if (this.oAjax.status == 200) {
            this.oDom.pSaludo.innerHTML = this.oAjax.responseText;
        }

    }

}
//var obj = new XMLHttpRequest();