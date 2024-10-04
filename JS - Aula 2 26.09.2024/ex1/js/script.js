var nomeDisciplina;

nomeDisciplina = "Java Script Básico";
console.log(nomeDisciplina);

nomeDisciplina = nomeDisciplina + " com Wilton Filho";
console.log(nomeDisciplina);

const INSTITUTO = "IFTM";
console.log(INSTITUTO);

var semDado;
console.log(semDado);

var idade = "10 anos";
console.log(idade);

var idadeInteiro = parseInt(idade);
console.log(idadeInteiro);

var y = "valor 20";
console.log(y);

var z = parseInt(y);
console.log(z);

// Exemplo 2 - Casas decimais 
var valor = 7;
var resultado = valor / 6;
console.log(resultado.toFixed(2));

// Array


var letras = [ "a", "d", "i", "m", "r"];

// console.log(letras[1]);

letras[1] = "b";
console.log(letras);

console.log(`${letras.length} letras`);

console.log(letras[0]); // Primeira letra
console.log(letras[1]); // Segunda letra
console.log(letras[letras.length-1]); // Imprime a última posição do vetor;

// Método pop - remove o último número

console.clear()

var vetor = [1, 2, 3];

itemRemovido = vetor.pop();

console.log(vetor);
console.log(itemRemovido);

// pop com reverse - remove o primeiro número

console.clear()

var vetor = [1, 2, 3, 4];

vetor.reverse();

itemRemovido = vetor.pop();

console.log(itemRemovido);

vetor.reverse();
console.log(vetor);

// Splice - Remove ou adiciona vetores, neste caso, remove o vetor 1,2 

console.clear()

var vetor = [1, 2, 3, 4];

itensRemovidos = vetor.splice(1, 2);

console.log(vetor); // Itens do meu vetor
console.log(itensRemovidos); // Itens removidos


// Splice - Adicionando números. (ADICIONE O ZERO PARA QUE A LINGUAGEM VEJA QUE É ADICIONAR E NÃO REMOVER);

console.clear()

var vetor = [1, 2, 3, 4];

itensAdicionados = vetor.splice(2,0,5); //(ADICIONE O ZERO PARA QUE A LINGUAGEM VEJA QUE É ADICIONAR E NÃO REMOVER)
console.log(vetor);

