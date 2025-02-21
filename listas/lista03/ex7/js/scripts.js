var numeroAleatorio = (Math.random() * 6) +1;

numeroAleatorio = parseInt(numeroAleatorio);

if(numeroAleatorio == 1){
     document.write(`<img src="img/lado1.jpeg" alt="foto de um dado lado1">`); 
}else if(numeroAleatorio == 2){
     document.write(`<img src="img/lado2.jpeg" alt="foto de um dado lado2">`); 
}else if(numeroAleatorio == 3){
     document.write(`<img src="img/lado3.png" alt="foto de um dado lado3">`); 
}else if(numeroAleatorio == 4){
     document.write(`<img src="img/lado4.png" alt="foto de um dado lado4">`); 
}else if(numeroAleatorio == 5){
     document.write(`<img src="img/lado5.jpeg" alt="foto de um dado lado5">`); 
}else{
     (numeroAleatorio == 6)
     document.write(`<img src="img/lado6.png" alt="foto de um dado lado6">`); 
}