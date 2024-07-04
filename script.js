//defino una funcion que va a recibir texto por parametros y lo va a encriptar segun las reglas

function encriptarTexto(texto) {
    return texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
}

//defino una segunda funcion para poder desencriptar el texto que se pasa
function desencriptarTexto(texto) {
    return texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
}


//paso 1 seleccionar los botones del HTML para poder encriptar
document.getElementById("boton-encriptar").addEventListener("click", () => {
    const inputText = document.getElementById("input-text").value.toLowerCase();
    const encryptedText = encriptarTexto(inputText);
    document.getElementById("salida-texto").value = encryptedText;
});
 //paso 2 seleccionar los botones del HTML para poder desencriptar
document.getElementById("boton-desencriptar").addEventListener("click", () => {
    const inputText = document.getElementById("input-text").value.toLowerCase();
    const decryptedText = desencriptarTexto(inputText);
    document.getElementById("salida-texto").value = decryptedText;
});
//Paso 3 seleccionar los campos para poder compiar el texto
document.getElementById("copiar-texto").addEventListener("click", () => {
    const outputText = document.getElementById("salida-texto");
    outputText.select();
    document.execCommand("copy");
    alert("Texto copiado al portapapeles");
});