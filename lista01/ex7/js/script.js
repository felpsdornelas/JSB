cor1 = parseInt(prompt("Digite um valor no intervalo de [0,255]"));
while(cor1 < 0 || cor1 > 255){
     cor1 = parseInt(prompt("Valor inválido, digite novamente no intervalo de [0,255]"));
}

cor2 = parseInt(prompt("Digite um valor no intervalo de [0,255]"));
while(cor2 < 0 || cor1 > 255){
     cor2 = parseInt(prompt("Valor inválido, digite novamente no intervalo de [0,255]"));
}

cor3 = parseInt(prompt("Digite um valor no intervalo de [0,255]"));
while(cor3 < 0 || cor1 > 255){
     cor3 = parseInt(prompt("Valor inválido, digite novamente no intervalo de [0,255]"));
}

document.write(`<p style="color: rgb(${cor1}, ${cor2}, ${cor3})">Fundamentos de Web Design II</p>`)