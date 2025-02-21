// Solicita ao usuário o seu nome completo;
nome = prompt("Digite seu nome completo:").trim();

// Enquanto nome for vazio "" solicite novamente o nome;
while(nome === ""){
     nome = prompt("É necessário que você digite o seu nome:").trim();
}

// Transforma a variável maiúscula;
nomeMaiusculo = nome.toUpperCase(); 

//Imprime em formato alerta a variável nomeMaiusculo; 
alert(nomeMaiusculo);