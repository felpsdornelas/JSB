var nome = prompt("Digite o seu nome completo: ", "Felipe Gabriel dos Santos Dornelas");

var vetPartesNomes = nome.split(" ");

var primeiroNomeMaiusculo = vetPartesNomes[0].charAt(0).toUpperCase() + nome.slice(1).toLowerCase();

alert(primeiroNomeMaiusculo);

