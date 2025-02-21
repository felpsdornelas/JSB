var nome = prompt("Qual o seu primeiro nome?");
var sobrenome = prompt("Qual o seu sobrenome?");
var numRepeticoes = prompt("Quantas vezes deseja repetir seu nome e sobrenome?");
var corNome = prompt("Digite a cor em inglês que deseja ver o seu nome: ");

for (i = 1; i <= numRepeticoes; i++) {
     if(i % 2 == 1){
          document.write(`<p> ${i}º - ${nome} ${sobrenome}`);
     }else{
          document.write(`<p style="color: ${corNome}"> ${i}º - ${nome} ${sobrenome}`);
     }

}