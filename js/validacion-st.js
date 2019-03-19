$(document).ready(inicio);

function inicio() {

    $("#error").hide();
    $("#exito").hide();

    $("span.help-block").hide;
    $("#nombre-cliente").keyup(validar_nombre);
    $("#telefono-cliente").keyup(validar_numero);
    $("#correo-cliente").keyup(validar_correo);
    $("#compania-cliente").keyup(validar_empresa);
    $("#nombre-pagina").keyup(validar_pagina);
    $("#descripcion-problema").keyup(validar_descripcion);

    $("#btnvalidar").click(validar);
}

function validar_nombre() {
    var nombre = document.getElementById("nombre-cliente").value;


    if (nombre == null || nombre.length == 0 || /^\s+$/.test(nombre)) {
        $("#nombre-cliente").parent().parent().attr("class", "form-group has-danger has-feedback");
        $("#nombre-cliente").parent().parent().children("span").text("Debe ingresar su nombre").show();
        return false;
    } else {
        $("#nombre-cliente").parent().parent().attr("class", "form-group has-success has-feedback");
        $("#nombre-cliente").parent().parent().children("span").hide();
    }
}

function validar_numero() {

    var telefono = document.getElementById("telefono-cliente").value;

    if (isNaN(telefono) || telefono == null || telefono.length == 0 || /^\s+$/.test(telefono)) {
        $("#telefono-cliente").parent().parent().attr("class", "form-group has-danger has-feedback");
        $("#telefono-cliente").parent().parent().children("span").text("Ingrese solo números").show();
        return false;
    } else {
        $("#telefono-cliente").parent().parent().attr("class", "form-group has-success has-feedback");
        $("#telefono-cliente").parent().parent().children("span").hide();
    }
}

function validar_correo() {

    var correo = document.getElementById("correo-cliente").value;

    if (correo == null || correo.length == 0 || /^\s+$/.test(correo) || !(/\S+@\S+\.\S+/.test(correo))) {
        $("#correo-cliente").parent().parent().attr("class", "form-group has-danger has-feedback");
        $("#correo-cliente").parent().parent().children("span").text("Ingrese un correo valido").show();
        return false;
    } else {
        $("#correo-cliente").parent().parent().attr("class", "form-group has-success has-feedback");
        $("#correo-cliente").parent().parent().children("span").hide();
    }
}

function validar_empresa() {

    var compania = document.getElementById("compania-cliente").value;

    if (compania == null || compania.length == 0 || /^\s+$/.test(compania)) {
        $("#compania-cliente").parent().parent().attr("class", "form-group has-danger has-feedback");
        $("#compania-cliente").parent().parent().children("span").text("Por favor, ingrese el nombre de su compañia").show();
        return false;
    } else {
        $("#compania-cliente").parent().parent().attr("class", "form-group has-success has-feedback");
        $("#compania-cliente").parent().parent().children("span").hide();
    }
}

function validar_pagina() {

    var pweb = document.getElementById("nombre-pagina").value;

    if (pweb == null || pweb.length == 0 || /^\s+$/.test(pweb)) {
        $("#nombre-pagina").parent().parent().attr("class", "form-group has-danger has-feedback");
        $("#nombre-pagina").parent().parent().children("span").text("Por favor, ingrese el nombre de su página web").show();
        return false;
    } else {
        $("#nombre-pagina").parent().parent().attr("class", "form-group has-success has-feedback");
        $("#nombre-pagina").parent().parent().children("span").hide();
    }
}

function validar_descripcion() {

    var problema = document.getElementById("descripcion-problema").value;

    if (problema == null || problema.length == 0 || /^\s+$/.test(problema)) {
        $("#descripcion-problema").parent().attr("class", "form-group has-danger has-feedback");
        $("#descripcion-problema").parent().children("span").text("Por favor, describa el problema que presenta su página web").show();
        return false;
    } else {
        $("#descripcion-problema").parent().attr("class", "form-group has-success has-feedback");
        $("#descripcion-problema").parent().children("span").hide();
    }
}

function validar() {
    validar_correo();
    validar_descripcion();
    validar_empresa();
    validar_nombre();
    validar_numero();
    validar_pagina();

    if (validar_correo() === false || validar_descripcion() === false || validar_empresa() === false || validar_nombre() === false || validar_numero() === false || validar_pagina() === false) {
        $("#error").show().addClass('animated fadeInUp');

        $("#exito").hide();
    } else {
        $("#exito").show().addClass('animated fadeInUp');

        $("#error").hide();

        enviar();
    }
}

function enviar() {

    var nombre = document.getElementById("nombre-cliente").value;
    var telefono = document.getElementById("telefono-cliente").value;
    var correo = document.getElementById("correo-cliente").value;
    var compania = document.getElementById("compania-cliente").value;
    var pweb = document.getElementById("nombre-pagina").value;
    var problema = document.getElementById("descripcion-problema").value;
    var datos = 'nombre= ' + nombre + ' \ntelefono= ' + telefono + ' \ncorreo= ' + correo + ' \ncompania= ' + compania + '\npagina= ' + pweb + '\nproblema= ' + problema;
    console.log(datos);
    $.ajax({
        type: "POST",
        url: "st.php",
        data: datos,
    });
}
