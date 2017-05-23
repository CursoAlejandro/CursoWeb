class Formulario {
	constructor() {

		//  Carcar Valores por defencto que actualizan el DOM

		this.oDOM = {
			fNombre: document.querySelector("#fNombre"),
			btnBorrar: document.querySelector("#btnBorrar"),
			spanNombre: document.querySelector("#nombre"),
			spanCurso: document.querySelector("#curso")
		}; // fin del objeto oDOM
	}



	controller() {

		// Valores por defencto que actualizan el DOM

		this.oDOM.fNombre.value = 'Pepe'
		this.oDOM.spanNombre.innerHTML = this.oDOM.fNombre.value;
		this.oDOM.spanCurso.innerHTML = "Desarrollo Web Front-End";
		console.dir(oDOM);

		// Definicion de los manejadores de eventos

		this.oDOM.fNombre.addEventListener("keyup", this.actualizarVista.bind(this));
		this.oDOM.btnBorrar.addEventListener("click", this.actualizarVista.bind(this))
	}
	actualizarVista(oEvent) {

		if (oEvent.currentTarget.id == "btnBorrar") {
			this.oDOM.fNombre.value = ''
		}
		this.oDOM.spanNombre.innerHTML = this.oDOM.fNombre.value;
		console.log(this.oDOM.fNombre.value);

	} // Fin de la funcion actualizarVista
}



const oFormulario = new Formulario();
oFormulario.controller();