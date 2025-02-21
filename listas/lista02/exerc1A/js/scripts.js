// new Date pega a data atual; 
const dataAtual = new Date();

// 0 = Domingo e 6 = Sábado;  
const diaSemana = dataAtual.getDay(); // o uso da função .getDay(); pega o dia da semana em números (0-6);

// Se o dia da semana for igual a algum caso, imprima qual é o dia da semana que se refere;  
switch (diaSemana) {
     case 0:
          document.write("Hoje é Domigo");
          break;
     case 1:
          document.write("Hoje é Segunda-Feira");
          break;
     case 2:
          document.write("Hoje é Terça-Feira");
          break;
     case 3:
          document.write("Hoje é Quarta-Feira");
          break;
     case 4:
          document.write("Hoje é Quinta-Feira");
          break;
     case 5:
          document.write("Hoje é Sexta-Feira");
          break;
     default:
          document.write("Hoje é Sábado");
}

