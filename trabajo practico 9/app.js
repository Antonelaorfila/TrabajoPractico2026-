function numeroMayor() {
    let num1 = Number(document.getElementById("num1Mayor").value);
    let num2 = Number(document.getElementById("num2Mayor").value);

    if (num1 > num2) {
        document.getElementById("resultadoMayor").innerHTML =
            "El número mayor es: " + num1;
    } 
    else if (num2 > num1) {
        document.getElementById("resultadoMayor").innerHTML =
            "El número mayor es: " + num2;
    } 
    else {
        document.getElementById("resultadoMayor").innerHTML =
            "Los dos números son iguales.";
    }
}

function numeroMenor() {
    let num1 = Number(document.getElementById("num1Menor").value);
    let num2 = Number(document.getElementById("num2Menor").value);

    if (num1 < num2) {
        document.getElementById("resultadoMenor").innerHTML =
            "El número menor es: " + num1;
    } else if (num2 < num1) {
        document.getElementById("resultadoMenor").innerHTML =
            "El número menor es: " + num2;
    } else {
        document.getElementById("resultadoMenor").innerHTML =
            "Los dos números son iguales.";
    }
}

function numerosIguales() {
    let num1 = Number(document.getElementById("num1Iguales").value);
    let num2 = Number(document.getElementById("num2Iguales").value);

    if (num1 === num2) {
        document.getElementById("resultadoIguales").innerHTML =
            "Los dos números son iguales.";
    } else {
        document.getElementById("resultadoIguales").innerHTML =
            "Los dos números son diferentes.";
    }
}

function calcularIVA() {
    let compra = Number(document.getElementById("valorCompra").value);

    let iva = compra * 0.21;

    document.getElementById("resultadoIVA").innerHTML =
        "El IVA es: $" + iva;
}

function saludar() {
    let nombre = document.getElementById("nombre").value;

    document.getElementById("resultadoSaludo").innerHTML =
        "Hola " + nombre + ", ¡bienvenido/a!";
}

function modoOscuro() {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
}

function modoClaro() {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
}