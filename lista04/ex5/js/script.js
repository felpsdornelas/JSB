var letrasAleatorias = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var sorteio = "";

for(i = 0; i<4; i++){
     sorteio += letrasAleatorias[Math.floor(Math.random()*letrasAleatorias.length)];
}

document.write(sorteio);