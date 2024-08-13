let textarea = document.querySelector(".text__area");
let mensagem = document.querySelector(".text__area__mensagem");


// As "chaves" de criptografia que utilizaremos são:
// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"

function encryptedMessage() {
    let textoEncriptado = encriptar(textarea.value);
    mensagem.value = textoEncriptado;
    textarea.value = "";
}


function encriptar(stringEncriptada) {
    let matrizCodigo = [["e","enter"] , ["i","imes"] , ["a","ai"] , ["o","obter"] , ["u","ufat"]];
    console.table(matrizCodigo);
    stringEncriptada = stringEncriptada.toLowerCase();
    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i] [0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;
}


function decryptedMessage() {
    let textoDesencriptado = desencriptar(textarea.value);
    mensagem.value = textoDesencriptado;
    textarea.value = "";
}

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["e","enter"] , ["i","imes"] , ["a","ai"] , ["o","obter"] , ["u","ufat"]];
    console.table(matrizCodigo);
    stringDesencriptada = stringDesencriptada.toLowerCase();
    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptada.includes(matrizCodigo[i] [1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i] [1], matrizCodigo[i] [0]);
        }
    }
    return stringDesencriptada;
}


function copiarTexto() {
    mensagem.select();
    document.execCommand("copy");
    alert("Texto copiado para a área de transferência!");
}