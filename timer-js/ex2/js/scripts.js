window.addEventListener("DOMContentLoaded", function() {

     var btnComecar = document.getElementById("btnComecar");
     var btnPausar = document.getElementById("btnPausar");
     var btnParar = document.getElementById("btnParar");
     var contador = this.document.getElementById("contador")

     var cont = 0;
     var idCronometro;

     btnComecar.addEventListener("click", function() {
          idCronometro = setInterval(adicionarContador, 100);
     });

     btnPausar.addEventListener("click", function(){
          clearInterval(idCronometro);
     });
     
     btnParar.addEventListener("click", function(){
          clearInterval(idCronometro);
          zerarContador();
     });



     function adicionarContador() {
          contador.innerHTML = ++cont;
     }

     function zerarContador() {
          cont = 0;
          contador.innerHTML = cont;
     }

});
