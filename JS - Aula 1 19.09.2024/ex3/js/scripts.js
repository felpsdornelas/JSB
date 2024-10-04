nome = prompt("Digite seu nome:");
nota1 = parseFloat(prompt("Informe sua nota do 1º bimestre:"))
nota2 = parseFloat(prompt("Informe sua nota do 2º bimestre:"))

soma = nota1 + nota2

if (soma >= 60)    
     alert(`${nome}, você foi APROVADO sua nota final é igual a ${soma} pontos`)
else 
     alert(`${nome}, você foi REPROVADO, ainda faltam ${60 - soma} pontos`)   