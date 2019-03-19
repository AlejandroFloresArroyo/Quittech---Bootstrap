$(document).ready(inicio);

function inicio() {

    $("#error").hide();
    $("#exito").hide();

    $("span.help-block").hide;
    $("#nombre").keyup(validar_nombre);
    $("#telefono").keyup(validar_numero);
    $("#correo").keyup(validar_correo);
    $("#compania").keyup(validar_empresa);
    $("#descripcion").keyup(validar_descripcion);

    $("#btnvalidar").click(validar);
}

function validar_nombre() {
    var nombre = document.getElementById("nombre").value;


    if (nombre == null || nombre.length == 0 || /^\s+$/.test(nombre)) {
        $("#nombre").parent().parent().attr("class", "form-group has-danger has-feedback");
        $("#nombre").parent().parent().children("span").text("Debe ingresar su nombre").show();
        return false;
    } else {
        $("#nombre").parent().parent().attr("class", "form-group has-success has-feedback");
        $("#nombre").parent().parent().children("span").hide();
    }
}

function validar_numero() {

    var telefono = document.getElementById("telefono").value;

    if (isNaN(telefono) || telefono == null || telefono.length == 0 || /^\s+$/.test(telefono)) {
        $("#telefono").parent().parent().attr("class", "form-group has-danger has-feedback");
        $("#telefono").parent().parent().children("span").text("Ingrese solo números").show();
        return false;
    } else {
        $("#telefono").parent().parent().attr("class", "form-group has-success has-feedback");
        $("#telefono").parent().parent().children("span").hide();
    }
}


function validar_empresa() {

    var compania = document.getElementById("compania").value;

    if (compania == null || compania.length == 0 || /^\s+$/.test(compania)) {
        $("#compania").parent().parent().attr("class", "form-group has-danger has-feedback");
        $("#compania").parent().parent().children("span").text("Por favor, ingrese el nombre de su compañia").show();
        return false;
    } else {
        $("#compania").parent().parent().attr("class", "form-group has-success has-feedback");
        $("#compania").parent().parent().children("span").hide();
    }
}

function validar_correo() {

    var correo = document.getElementById("correo").value;

    if (correo == null || correo.length == 0 || /^\s+$/.test(correo) || !(/\S+@\S+\.\S+/.test(correo))) {
        $("#correo").parent().parent().attr("class", "form-group has-danger has-feedback");
        $("#correo").parent().parent().children("span").text("Ingrese un correo valido").show();
        return false;
    } else {
        $("#correo").parent().parent().attr("class", "form-group has-success has-feedback");
        $("#correo").parent().parent().children("span").hide();
    }
}

function validar_descripcion() {

    var problema = document.getElementById("descripcion").value;

    if (problema == null || problema.length == 0 || /^\s+$/.test(problema)) {
        $("#descripcion").parent().attr("class", "form-group has-danger has-feedback");
        $("#descripcion").parent().children("span").text("Por favor, escriba un mensaje").show();
        return false;
    } else {
        $("#descripcion").parent().attr("class", "form-group has-success has-feedback");
        $("#descripcion").parent().children("span").hide();
    }
}

function validar() {
    validar_correo();
    validar_descripcion();
    validar_empresa();
    validar_nombre();
    validar_numero();

    if (validar_correo() === false || validar_descripcion() === false || validar_empresa() === false || validar_nombre() === false || validar_numero() === false) {
        $("#error").show().addClass('animated fadeInUp');

        $("#exito").hide();
    } else {
        $("#exito").show().addClass('animated fadeInUp');

        $("#error").hide();

        enviar();
    }
}


function enviar() {

    var nombre = document.getElementById("nombre").value;
    var telefono = document.getElementById("telefono").value;
    var correo = document.getElementById("correo").value;
    var compania = document.getElementById("compania").value;
    var problema = document.getElementById("descripcion").value;
    var datos = 'nombre= ' + nombre + ' \ntelefono= ' + telefono + ' \ncorreo= ' + correo + ' \ncompania= ' + compania +  '\nproblema= ' + problema;
    console.log(datos);
    $.ajax({
        type: "POST",
        url: "emplu-mail.php",
        data: datos,
    });
}