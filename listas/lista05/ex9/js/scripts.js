var texto = prompt("Digite um texto:");

// Remove espaços, pontuação e converte para minúsculas
var textoLimpo = texto.toLowerCase().replace(/[^a-z0-9]/g, "");

// Inverte o texto
var textoInvertido = textoLimpo.split("").reverse().join("");

// Verifica se é um palíndromo e exibe o resultado
if (textoLimpo === textoInvertido) {
    alert("O texto informado é um palíndromo!");
} else {
    alert("O texto informado não é um palíndromo.");
}