// Solicita ao usuário o nome;
nome = prompt("Qual é o seu nome?")

// Solicita ao usuário a idade;
idade = prompt("Qual a sua idade?")

// Se a idade for menor que 
if(idade < 18)
     alert(`${nome}, você não tem idade para tirar CNH`)
else(idade >= 18)
     alert(`${nome}, você tem idade para tirar CNH`)