window.addEventListener("DOMContentLoaded", function(){

     var segundos = document.getElementById("segundos");
     var segundosAleatorio = Math.floor(Math.random()* 6) + 5;
     var cont = segundosAleatorio;

     segundos.innerHTML = cont;

     setInterval(function(){     
          cont--;
          segundos.innerHTML = cont;    

          if(cont <= 3) {
               segundos.innerHTML = `<span style="color: red;">${cont}</span>`;
          } else {
               segundos.innerHTML = cont;
          }

          if(cont == 0) {
               linkarPaginas();
          }

     }, 1000);

     

     function linkarPaginas() {
          window.location.href = 'verVeiculo.html';
     }
});