
function validacionjs() {
    var nombre = document.getElementById ("name").value;
    var tipomensaje = document.getElementById("type1").value;
/*aqui concatenamos las valiables email y cel phone */
    var mensaje = "";
    var correo = document.getElementById ("email").value;
    var numerocelular = document.getElementById ("celphone").value;


    if (tipomensaje =="") {
        alert ("Elegir una opcion en Tipo de Mensaje");
        document.getElementById("type1").focus();
    }
    if (nombre =="") {
        alert ("El campo nombre esta vacio");
        document.getElementById("name").focus();
    }

    /* de esta manera concatenamos las variables de esta manera \n significa salto de linea*/
    if (correo == "" || numerocelular == "") {
        if (correo =="") {
            mensaje += "El campo Email esta vacio, debe poner su correo"
        }
        if (numerocelular == "") { 
            mensaje += " & El campo Cel Phone esta avcio, debe poner su numero de celular"
    }
    alert(mensaje);  }
}
