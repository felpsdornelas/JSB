// Solicita o nome ao usuário;
nome = prompt('Digite o seu nome completo:').trim();

// Enquanto o nome for vazio "", solicite novamente o nome do usuário;
while(nome === ""){
     nome = prompt('É necessário digitar o seu nome:').trim();
}

// Solicita a idade ao usuário;
idade = prompt('Digite a sua idade');

// Enquanto a idade for menor/igual a zero ou maior/igual 130, solicite novamente a idade;
while(idade <=0 || idade >= 130){
     idade = prompt('A idade digtada é inválida. Digite uma idade de 1 à 129 anos:');
}

// Se idade for maior que 18 anos, está apto para tirar carteira 
if(idade >= 18)
     alert(`${nome}, você já POSSUI idade para tirar carteira.`)
// Se não, não está apto para tirar carteira  
else
     alert(`${nome}, você ainda NÃO POSSUI idade para tirar carteira, ainda falta(m) ${18 - idade} ano(s).`)