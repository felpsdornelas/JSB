// Solicita ao usuário o seu nome completo;
nome = prompt("Digite seu nome completo:").trim();

// Enquanto nome for vazio "" solicite novamente o nome;
while(nome === ""){
     nome = prompt("É necessário que você digite o seu nome:").trim();
}

// Guarda a quantidade de caracter da variável nome em uma outra variavél;
qntCaracter = nome.length;

// Imprime na página web a quantidade de caracter que possui na variável nome;
document.write(`O seu nome: ${nome}, possui ${qntCaracter} caracteres.`);