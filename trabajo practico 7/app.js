let edad1 = 20;

let parrafo1 = document.getElementById("parrafo1");
let boton1 = document.getElementById("boton1");

boton1.addEventListener("click", function () {

    if (edad1 >= 18) {
        parrafo1.textContent = "Eres mayor de edad";
    } else {
        parrafo1.textContent = "Eres menor de edad";
    }

});

let nombreUsuario2 = "Nahuel";

let parrafo2 = document.getElementById("parrafo2");
let boton2 = document.getElementById("boton2");

boton2.addEventListener("click", function () {

    if (nombreUsuario2 === "Nahuel") {
        parrafo2.textContent = "Bienvenido Nahuel, ¿cómo estás?";
    } else {
        parrafo2.textContent = "Bienvenido usuario";
    }

});

let nombreUsuario3 = "Marcos";

let parrafo3 = document.getElementById("parrafo3");
let boton3 = document.getElementById("boton3");

boton3.addEventListener("click", function () {

    if (nombreUsuario3 === "Nahuel" || nombreUsuario3 === "Marcos") {
        parrafo3.textContent = "Bienvenido " + nombreUsuario3 + " ¿cómo estás?";
    } else {
        parrafo3.textContent = "Bienvenido " + nombreUsuario3;
    }

});

let dia = "sabado";

let parrafo6 = document.getElementById("parrafo6");
let boton6 = document.getElementById("boton6");

boton6.addEventListener("click", function () {

    if (
        dia === "lunes" ||
        dia === "martes" ||
        dia === "miercoles" ||
        dia === "jueves" ||
        dia === "viernes"
    ) {
        parrafo6.textContent = "Es un día laborable";
    } else if (dia === "sabado" || dia === "domingo") {
        parrafo6.textContent = "Es fin de semana";
    } else {
        parrafo6.textContent = "Día no válido";
    }

});

let edad5 = 25;

let parrafo5 = document.getElementById("parrafo5");
let boton5 = document.getElementById("boton5");

boton5.addEventListener("click", function () {

    if (edad5 >= 6 && edad5 <= 11) {
        parrafo5.textContent = "Niño";
    } else if (edad5 >= 12 && edad5 <= 18) {
        parrafo5.textContent = "Adolescente";
    } else if (edad5 >= 19 && edad5 <= 26) {
        parrafo5.textContent = "Joven";
    } else if (edad5 >= 27 && edad5 <= 59) {
        parrafo5.textContent = "Adulto";
    } else if (edad5 >= 60) {
        parrafo5.textContent = "Anciano";
    } else {
        parrafo5.textContent = "Edad fuera de las categorías";
    }

});

let dia = "sabado";

let parrafo6 = document.getElementById("parrafo6");
let boton6 = document.getElementById("boton6");

boton6.addEventListener("click", function () {

    if (
        dia === "lunes" ||
        dia === "martes" ||
        dia === "miercoles" ||
        dia === "jueves" ||
        dia === "viernes"
    ) {
        parrafo6.textContent = "Es un día laborable";
    } else if (dia === "sabado" || dia === "domingo") {
        parrafo6.textContent = "Es fin de semana";
    } else {
        parrafo6.textContent = "Día no válido";
    }

});

let contrasenia = "secreto";

let parrafo7 = document.getElementById("parrafo7");
let boton7 = document.getElementById("boton7");

boton7.addEventListener("click", function () {

    if (contrasenia === "secreto") {
        parrafo7.textContent = "Acceso concedido";
    } else {
        parrafo7.textContent = "Acceso denegado";
    }

});