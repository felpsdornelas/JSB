var numeroMinimo = parseInt(prompt ("Digite um número mínimo:"));
var numeroMaximo = parseInt(prompt ("Digite um número máximo:"));

numeroAleatorio = (Math.random() * (numeroMaximo - numeroMinimo +1)) + numeroMinimo;

document.write(parseInt(numeroAleatorio)); 