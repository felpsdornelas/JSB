var letrasAleatorias = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var sorteio = "";

for(i = 0; i<4; i++){
     sorteio += letrasAleatorias[Math.floor(Math.random()*letrasAleatorias.length)];
}

document.write(sorteio);

for(var i = 0; i<4; i++){
     document.write(Math.floor(Math.random()*10));
}