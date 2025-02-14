window.addEventListener("DOMContentLoaded", function(){
     // Obtém a referência ao elemento HTML com id no documento JS;
     const selectNivel = document.getElementById("nivel");
     const tempoAtual = document.getElementById("tempo");
     const btnIniciar = document.getElementById("btnIniciar");
     const btnPausar = document.getElementById("btnPausar");
     const btnParar = document.getElementById("btnParar");
     const numAleatorio = document.getElementById("numAleatorio");
     const qntAcertos = document.getElementById("qntAcertos");
     const qntErros = document.getElementById("qntErros");
     const qntNumPares = document.getElementById("qntNumPares");
     const numAcertosPorcentagem = document.getElementById("porcentagemAcertos");

     // Declaração de variáiveis;
     var cronometro = 0;
     var sorteioNumAleatorio = 0;
     var contadorAcerto = 0;
     var contadorErro = 0;
     var contadorPares = 0;
     var porcentagemAcertos = 0;

     // Ao mudar o select altera o cronômetro e habilita ou desabilita os botões;
     selectNivel.addEventListener("change", function() {          
          if (selectNivel.value == "selecione") {
               resetarJogo("00:00");
          } else if (selectNivel.value == "facil") {
               resetarJogo("01:45");

          } else if (selectNivel.value == "medio") {
               resetarJogo("01:15");
          } else {
               resetarJogo("00:30");
          }               
     });

     // Ao clicar no botão "Iniciar" será gerados números aleátorios na tela e irá dimunuir o tempo de acordo com o nível;
     btnIniciar.addEventListener("click", function(){

          // Realiza uma verificação do nível para a determinação dos valores do cronômetro e do sorteio;
          if(selectNivel.value == "selecione"){
               alert("Selecione um nível para jogar!")          
          } else if (selectNivel.value == "facil") {
               // Chama a função "sortearNumPorSegundo" para sortear números de 1 a 1 segundo;
               sortearNumPorSegundo("1000", "1000");
          } else if (selectNivel.value == "medio") {
               // Chama a função "sortearNumPorSegundo" para sortear números de 0,25 a 0,25 milissegundos;
               sortearNumPorSegundo("1000", "250");
          } else {
               // Chama a função "sortearNumPorSegundo" para sortear números de 0,10 a 0,10 milissegundos;
               sortearNumPorSegundo("1000", "150");
          }         
     });

     // Ao clicar no botão "Pausar" irá pausar o cronômetro e o sorteio de números aleátorios;
     btnPausar.addEventListener("click", function(){
          if(selectNivel.value == "selecione") {
               alert("Selecione um nível para jogar!");
          } else {
               clearInterval(cronometro);
               clearInterval(sorteioNumAleatorio);
               btnIniciar.disabled = false;
               numAleatorio.innerHTML = '<p><span class="pausado">Pause</span></p>';
          }
     });

     btnParar.addEventListener("click", function() {
          if (selectNivel.value == "selecione") {
               resetarJogo("00:00");
          } else if (selectNivel.value == "facil") {
               resetarJogo("01:45");

          } else if (selectNivel.value == "medio") {
               resetarJogo("01:15");
          } else {
               resetarJogo("00:30");
          }            
     });

     // Ao clicar nos números gerados aleatoriamente na tela, atribuí ao contador certo ou errado e as correspondentes cores;
     numAleatorio.addEventListener("click", function (){
          // Transforma o elemento HTML em inteiro;
          numInteiroAleatorio = parseInt(numAleatorio.innerHTML);

          if(isNaN(numInteiroAleatorio)) {
               console.log("Ignorar número NaN");
          } else if (parseInt(numInteiroAleatorio) % 2 == 0){ // Acerto
               contadorAcerto ++;
               qntAcertos.innerHTML = contadorAcerto;
               numAleatorio.innerHTML = `<p><span class="acerto">${numInteiroAleatorio}</span></p>`;
          } else { // Erro
               contadorErro ++;
               qntErros.innerHTML = contadorErro;
               numAleatorio.innerHTML = `<p><span class="erro">${numInteiroAleatorio}</span></p>`;
          }
     });

     // Função que gera números aleátorios de 1 a 100;
     function gerarNumAleatorios() {
          numAleatorio.innerHTML = Math.floor(Math.random() * 101);

          numAleatorioInteiro = parseInt(numAleatorio.innerHTML)

          if(numAleatorioInteiro % 2 == 0)
          contadorPares++;
          qntNumPares.innerHTML = contadorPares;    
          
          porcentagemAcertos = ((contadorAcerto/contadorPares * 100).toFixed(1));
          numAcertosPorcentagem.innerHTML = porcentagemAcertos;
     }

     // Função que realiza a diminução do tempo em Minutos:Segundos;
     function diminuirTempo() {
          var tempo = tempoAtual.innerHTML;
          var [minutos, segundos] = tempo.split(":").map(Number);

          if(minutos == 0 && segundos == 0) {
               if(selectNivel.value == "facil") {
                    alert("Fim de jogo");
                    resetarJogo("01:45");                 
               } else if (selectNivel.value == "medio") {
                    alert("Fim de jogo");
                    resetarJogo("01:15"); 
               } else if (selectNivel.value == "dificil") {
                    alert("Fim de jogo");
                    resetarJogo("00:30"); 
               }
               return;
          }

          if(segundos > 0) {
               segundos --;
          } else if (minutos > 0) {
               minutos --;
               segundos = 59;
          }

          // Atualiza o tempo no formato MM:SS
          document.getElementById("tempo").innerHTML =
          (minutos < 10 ? "0" + minutos : minutos) + ":" +
          (segundos < 10 ? "0" + segundos : segundos);               
     }

     // Função que reseta o jogo passando o parâmetro de tempo;
     function resetarJogo(tempo) {
          // Para o cronômetro e o sorteio de números aleátorios;
          clearInterval(cronometro);
          clearInterval(sorteioNumAleatorio);
          // Volta as configurações de origem do cronômetro e dos números aleátorios;
          tempoAtual.innerHTML = tempo;
          numAleatorio.innerHTML = "-";
          // Zera o contador de acertos, erros, números pares e porcentagem de números pares;
          contadorAcerto = 0;
          qntAcertos.innerHTML = 0;
          contadorErro = 0;
          qntErros.innerHTML = 0;
          contadorPares = 0;
          qntNumPares.innerHTML = 0;
          porcentagemAcertos = 0;
          numAcertosPorcentagem.innerHTML = 0;
          // Habilita o botão iniciar ao chamar a função;
          btnIniciar.disabled = false;
          btnPausar.disabled = true;
     }

     // Função que sorteia números aleátorios por segundo;
     function sortearNumPorSegundo(segundos, numPorSegundo) {
          cronometro = setInterval(diminuirTempo, segundos);
          sorteioNumAleatorio = setInterval(gerarNumAleatorios, numPorSegundo);    
          btnIniciar.disabled = true;
          btnPausar.disabled = false;
     }
});