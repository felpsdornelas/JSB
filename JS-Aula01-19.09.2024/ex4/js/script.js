nome = prompt("Qual é o seu nome?")
exibirNome = parseInt(prompt("Quantas vezes você quer exibir o seu nome?"))

corNome = prompt("Qual cor você quer ver o seu nome?")

for (i = 0; i<exibirNome; i++)
     document.write(`<p style="color:${corNome}">${i+1} - ${nome}</p>`)