
function mostrarAlerta(mensaje) {
    let fondo = document.createElement("div");
    fondo.className = "fondo-alerta";

    let caja = document.createElement("div");
    caja.className = "caja-alerta";

    let texto = document.createElement("p");
    texto.className = "texto-alerta";
    texto.textContent = mensaje;

    let boton = document.createElement("button");
    boton.textContent = "Aceptar";
    boton.onclick = function () {
        fondo.remove();
    };

    caja.appendChild(texto);
    caja.appendChild(boton);
    fondo.appendChild(caja);
    document.body.appendChild(fondo);
}

function verificarEdad() {
    let edad = document.getElementById("edad").value;

    if (edad === "") {
        mostrarAlerta("Por favor, ingresa tu edad.");
    } else if (isNaN(edad) || Number(edad) < 0) {
        mostrarAlerta("Ingresa una edad valida.");
    } else if (Number(edad) >= 18) {
        mostrarAlerta("Eres mayor de edad");
    } else {
        mostrarAlerta("Eres menor de edad");
    }
}
