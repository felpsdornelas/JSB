// Solicita ao usuário a nota do 1º;
notaBimestre1 = parseFloat(prompt("Digite a nota do primeiro bimestre:"));

//Enquanto a nota 1 for menor do que 0, solicite novamente, pois a nota é inválida;
while(notaBimestre1 < 0){
     notaBimestre1 = parseFloat(prompt("Nota inválida, a nota deve ser maior do que zero. Digite novamente:"));
}

// Solicita ao usuário a nota do 2º;
notaBimestre2 = parseFloat(prompt("Digite a nota do segundo bimestre:"));

//Enquanto nota 2 for menor do que 0, solicite novamente, pois nota é inválida;
while(notaBimestre2 < 0){
     notaBimestre2 = parseFloat(prompt("Nota inválida, a nota deve ser maior do que zero. Digite novamente:"));
}

// Realiza a soma das notas do 1º e 2º bimestre;
somaNotas = notaBimestre1 + notaBimestre2; 

// Verifica se o aluno foi aprovado ou reprovado, Um aluno será aprovado se a soma das notas for maior ou igual a 60,0 pontos.
if (somaNotas >= 60.0)
     alert("Parabéns, você está aprovado(a)!")
else 
     alert(`Infelizmente você está reprovado(a), falta(m) ${60.0 - somaNotas} pontos para a aprovação`)