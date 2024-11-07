var texto = prompt("Digite um texto: ");
var vetPartesTexto = texto.toLowerCase().split(" ");
var palavrasAgrupadas = {};

// Inicializa o objeto com todas as letras do alfabeto
for (var i = 97; i <= 122; i++) {
    palavrasAgrupadas[String.fromCharCode(i)] = [];
}

// Agrupa as palavras pela letra inicial
vetPartesTexto.forEach(function(palavra) {
    var letraInicial = palavra.charAt(0);
    
    if (letraInicial in palavrasAgrupadas) {
        palavrasAgrupadas[letraInicial].push(palavra);
    }
});

// Exibe as palavras agrupadas no formato solicitado
for (var letra in palavrasAgrupadas) {
    if (palavrasAgrupadas[letra].length > 0) {
        document.write("Palavras iniciadas com a letra " + letra + ":<br>");
        palavrasAgrupadas[letra].forEach(function(palavra) {
            document.write(" - " + palavra + "<br>");
        });
        document.write("<br>");
    }
}