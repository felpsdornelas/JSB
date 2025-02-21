var numeros = [];

while (numeros.length < 6) {
    var numeroAleatorio = (Math.random() * 60) + 1;
    var numeroInteiro = parseInt(numeroAleatorio);
    
    
    if (numeroInteiro >= 1 && numeroInteiro <= 60 && !numeros.includes(numeroInteiro)) { 
        numeros.push(numeroInteiro); 
    }
}

document.write(numeros.join(', '));
