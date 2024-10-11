var pessoas = [

{nome: "Felipe Dornelas", sexo: "Masculino", profissao: "Pedreiro"},
{nome: "Pedro Dornelas", sexo: "Masculino", profissao: "Técnico"}

]

var triangulos = [

     {lado1:10, lado2:10, lado3:10},
     {lado1:10, lado2:20, lado3:30},
     {lado1:10, lado2:10, lado3:20}

]

// console.log(parseInt(Math.random()*27)+1); // Gera um número de 1 a 27

var cartaSorteada = parseInt(Math.random()*27)+1;

document.write(`<img src="cartas/cartas${cartaSorteada}.png">`)

// usar splice 