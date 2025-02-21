var numero = parseInt(prompt("Digite um valor inteiro positivo maior ou igual a 2: "));

// Verifica se o número é válido
if (isNaN(numero) || numero < 2) {
    alert("Por favor, insira um número inteiro maior ou igual a 2.");
} else {
    var tabela = "<table border='1'><tr><th>Base Decimal</th><th>Base Binária</th><th>Base Hexadecimal</th></tr>";
    
    // Preenche a tabela com valores de 0 até o número informado
    for (var i = 0; i <= numero; i++) {
        tabela += "<tr>";
        tabela += "<td>" + i + "</td>";                   
        tabela += "<td>" + i.toString(2) + "</td>";        
        tabela += "<td>" + i.toString(16).toUpperCase() + "</td>";
        tabela += "</tr>";
    }
    
    tabela += "</table>";
    
    // Exibe a tabela no corpo do documento
    document.write(tabela);
}