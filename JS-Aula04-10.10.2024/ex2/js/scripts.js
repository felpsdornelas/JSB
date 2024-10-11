function somar(a,b){
     return a+b;
}

function subtrair(a,b){
     return a-b;
}

function multiplicar(a,b){
     return a*b;
}

function dividir(a,b){
     return a/b;
}

function calcular (opcao, a, b){
     switch (opcao){
          case '+':
               return somar(a, b);

          case '-':
               return subtrair(a, b);
          case 'x':

               return multiplicar(a, b);
          case '÷':

               return dividir(a, b);
          default:

          return 'Operação inválida';
     }
}

function main(){

     var valor1 = parseInt(prompt('Digite o primeiro valor: '));
     var valor2 = parseInt(prompt('Digite o segundo valor: '));

     var opcao = prompt("MENU \n [+] Somar \n [-] Subtrair \n [x] Multiplicar \n [÷] Dividir")

     var resultado = calcular(opcao, valor1, valor2);
     alert(resultado);
}

main();