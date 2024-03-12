window.onload = function() {
    ocultarResultado();
    mostrarImagen();
};

function encriptarTexto(texto) {
    return texto.replace(/e/g, 'enter')
                .replace(/i/g, 'imes')
                .replace(/a/g, 'ai')
                .replace(/o/g, 'ober')
                .replace(/u/g, 'ufat');
}

function desencriptarTexto(texto) {
    return texto.replace(/enter/g, 'e')
                .replace(/imes/g, 'i')
                .replace(/ai/g, 'a')
                .replace(/ober/g, 'o')
                .replace(/ufat/g, 'u');
}

function actualizarBotonCopiar(texto) {
    const botonCopiar = document.getElementById("copiarBtn");

    if (texto) {
        botonCopiar.style.display = "block";
    } else {
        botonCopiar.style.display = "none";
    }
}

function encriptar() {
    const mensaje = document.getElementById("mensaje").value;
    const textoEncriptado = encriptarTexto(mensaje);
    document.getElementById("resultado").value = textoEncriptado;

    mostrarResultado();
    ocultarImagen();
    actualizarBotonCopiar(textoEncriptado);
}

function desencriptar() {
    const textoEncriptado = document.getElementById("resultado").value;
    const textoDesencriptado = desencriptarTexto(textoEncriptado);
    document.getElementById("resultado").value = textoDesencriptado;

    mostrarResultado();
    ocultarImagen();
    actualizarBotonCopiar(textoDesencriptado);
}

function copiarTexto() {
    const texto = document.getElementById("resultado").value;
    
    const elementoTemporal = document.createElement("textarea");
    elementoTemporal.value = texto;
    
    document.body.appendChild(elementoTemporal);
    elementoTemporal.select();
    
    document.execCommand("copy");
    document.body.removeChild(elementoTemporal);

    ocultarResultado();
    mostrarImagen();
}

function convertirMinusculas() {
    document.getElementById("mensaje").value = document.getElementById("mensaje").value.toLowerCase();
}

function mostrarResultado() {
    const resultadoContainer = document.getElementById("resultado-container");
    resultadoContainer.style.display = "flex";
    resultadoContainer.style.height = "512.273px";
    resultadoContainer.style.width = "409.992px";

    document.getElementById("resultado").style.display = "block";
}

function ocultarResultado() {
    const resultadoContainer = document.getElementById("resultado-container");
    resultadoContainer.style.display = "none";
}

function mostrarImagen() {
    document.getElementById("imagenResultado").style.display = "block";
}

function ocultarImagen() {
    document.getElementById("imagenResultado").style.display = "none";
}