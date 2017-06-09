function validar() {
	var nombre, apellidos, email, usuario, clave, clave2, expresion;
	nombre = document.getElementById("nombre").value;
	apellidos = document.getElementById("apellidos").value;
	email = document.getElementById("email").value;
	usuario = document.getElementById("usuario").value;
	clave = document.getElementById("clave").value;
	clave2 = document.getElementById("clave2").value;

	if (nombre === "" || apellidos === "" || email === "" || usuario === "" || clave === "") {
		alert("Esta vacio uno o mas campos");
		return false;
	}
	// Maximo de caracteres
	else if (nombre.length > 15) {
		alert("Nombre muy largo")
		return false;
	}
	else if (apellidos.length > 30) {
		alert("Apellidos muy largo")
		return false;
	}
	else if (usuario.length > 12) {
		alert("Usuario muy largo")
		return false;
	}
	else if (clave.length > 12) {
		alert("Clave muy larga")
		return false;
	}

 // Validacion de claves
	if (clave != clave2) {
		alert("No has puesto la misma clave")
		return false;
	} else if (clave === clave2){
		alert("Registro Exitoso")
		return true;
	}
}
