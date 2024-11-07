var nome = prompt("Digite o seu nome completo: ", "Felipe Gabriel dos Santos Dornelas");

var totalCaracter = nome.length;
var caracterInicial = nome.charAt(0);
var caracterMaiusculo = nome.toUpperCase();
var caracterMinusculo = nome.toLowerCase();

var vetPartesNome = nome.split(" ");

var primeiroNome = vetPartesNome[0];
var ultimoNome = vetPartesNome[vetPartesNome.length-1];
var primeiroUltimoNome = `${primeiroNome} ${ultimoNome}`;
var primeiroUltimoMaiusculo = primeiroUltimoNome.toUpperCase();
var qntPalavrasNome = vetPartesNome.length;
var iniciaisNome = " "; 

document.write(`<p> O nome <b>${nome}</b> possui ${totalCaracter} caracteres <p>`);
document.write(`<p> A primeira letra do nome <b>${nome}</b> é: ${caracterInicial}`);
document.write(`<p> O nome <b>${nome}</b> maiúsculo é: ${caracterMaiusculo}`);
document.write(`<p> O nome <b>${nome}</b> minúsculo é: ${caracterMinusculo}`);
document.write(`<p> O primeiro nome é: ${primeiroNome}`); 
document.write(`<p> O último nome é: ${ultimoNome}`); 
document.write(`<p> O primeiro e o último nome é: ${primeiroUltimoNome}`);
document.write(`<p> O primeiro e o último nome é: ${primeiroUltimoMaiusculo}`);
document.write(`<p> O seu nome possuí ${qntPalavrasNome} palavras`);

// Imprime na tela as inicias dos nomes dados;
for (var j in vetPartesNome)
     iniciaisNome += vetPartesNome[j].charAt(0);
document.write(`<p>${iniciaisNome.toUpperCase()}</p>`);

var texto = "O carro quebrou na estrada de São Paulo. O carro foi levado para a oficina"
var palVelha = "carro";
var palNova = "caminhão";

document.write(`<p> ${texto.replace(palVelha, palNova)}<p>`);
document.write(`<p> ${texto.replaceAll(palVelha, palNova)}<p>`);
// expressão regular







