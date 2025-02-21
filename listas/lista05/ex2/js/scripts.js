var nome = prompt("Digite o seu nome completo: ");

var qntCaracterNome = nome.length;

document.write(`<p> O seu nome é: ${nome}</p>`);
document.write(`<p>O seu nome possui ${qntCaracterNome} caracter(es).</p>`);