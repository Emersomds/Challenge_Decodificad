function criptografar() {
    const inputText = document.getElementById('inputText').value;
    let outputText = inputText
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
    mostrarResultado(outputText);
}

function descriptografar() {
    const inputText = document.getElementById('inputText').value;
    let outputText = inputText
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    mostrarResultado(outputText);
}

function mostrarResultado(texto) {
    const placeholderImage = document.getElementById('placeholderImage');
    const outputText = document.getElementById('outputText');
    const copyButton = document.getElementById('copyButton');

    placeholderImage.style.display = 'none';
    outputText.style.display = 'block';
    outputText.value = texto;
    copyButton.style.display = 'block';
}

function copiarTexto() {
    const outputText = document.getElementById('outputText');
    outputText.select();
    document.execCommand('copy');
    alert('Texto copiado para a área de transferência!');
}
