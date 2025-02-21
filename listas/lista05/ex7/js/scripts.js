var letra = prompt("Digite uma letra: ")
var texto = prompt("Digite um texto : ")

var vetPartesTexto = texto.split(" ");
var palavrasFiltradas = [];

for (var i = 0; i < vetPartesTexto.length; i++) {
    if (vetPartesTexto[i].charAt(0).toLowerCase() === letra.toLowerCase()) {
        palavrasFiltradas.push(vetPartesTexto[i]);
    }
}

alert(palavrasFiltradas.join(" "));