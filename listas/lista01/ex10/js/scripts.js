// Solicita ao usuário um número inteiro;
numeroInt = parseInt(prompt("Digite um número interio maior do que zero:")); 

while(numeroInt < 0 || isNaN(numeroInt)){
     numeroInt = parseInt(prompt("Digite um número interio maior do que zero:")); 
}

// Solicita o nome ao usuário;
nome = prompt('Digite o seu nome completo:').trim();

// Enquanto o nome for vazio "", solicite novamente o nome do usuário;
while(nome === ""){
     nome = prompt('É necessário digitar o seu nome:').trim();
}

// 
for (i = 1; i<=numeroInt; i++){
     document.write(`${i}. ${nome}<br>`)
}