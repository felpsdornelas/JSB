var passageirosHomens = [];
var passageirosMulheres = [];
var sexo, nome;


// Solicita ao usuário a quantidade de passageiros;
var totalPassageiros = prompt("Quantos passageiros?");


for (var i = 0; i < totalPassageiros; i++) {
     // Solicita ao usuário o sexo do passageiro;
     sexo = prompt(`Qual o sexo do passageiro ${i + 1} (M ou H)?`);

     // Solicia ao usuário os nomes dos passageiros;
     nome = prompt(`Qual o nome do passageiro ${i + 1}?`);

     if (sexo == "H")
          passageirosHomens.push(nome);
     else if (sexo == "M")
          passageirosMulheres.push(nome);
     else
          alert("Sexo inválido, digite H (Homem) ou M (Mulher).");
}
// Ordena os nomes nos vetores em ordem alfabética;
passageirosHomens.sort();
passageirosMulheres.sort();

var nroInteracoes;
if (passageirosHomens.length > passageirosMulheres.length)
     nroInteracoes = passageirosHomens.length;
else
     nroInteracoes = passageirosMulheres.length;


document.write(`<table border="1">`)
for (var i = 0; i < nroInteracoes; i++) {
     document.write(`    <tr>`)

     // Verifica se há uma mulher na posição atual
     if (i < passageirosMulheres.length) {
          document.write(`<td>${passageirosMulheres[i]}</td>`);
     } else {
          document.write(`<td>[-]</td>`); // Célula vazia se não houver mais mulheres
     }

     // Verifica se há um homem na posição atual
     if (i < passageirosHomens.length) {
          document.write(`<td>${passageirosHomens[i]}</td>`);
     } else {
          document.write(`<td>[-]</td>`); // Célula vazia se não houver mais homens
     }

     document.write(`    </tr>`)
}
document.write(`</table>`)