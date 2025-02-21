usuario = document.getElementById("usuario");
senha = document.getElementById("senha");

btnEntrar = document.getElementById("btnEntrar");
btnLimpar = document.getElementById("btnLimpar");

btnLimpar.addEventListener("click", function() {
     usuario.value = "";
     senha.value = "";
});

btnEntrar.addEventListener("click", function () {

     letrasUsuarioUniversal = usuario.value.toLowerCase();
     
     if (usuario.value == "" && senha.value == "") {
          alert("É necessário digitar o usuário e a senha");
     }else if (usuario.value == "") {
          alert("É necessário digitar o usuário");

     }else if (senha.value == "") {
          alert("É necessário digitar a senha");

     }else {
          window.location.href = 'construcao.html';
     }     

     if(letrasUsuarioUniversal == "visitante" && senha.value != ""){
          window.location.href = 'visitante.html';
     }
});

document.addEventListener("DOMContentLoaded", function() {

     btnClicar1 = document.getElementById("clicar1");
     btnColocar = document.getElementById("colocar");
     btnColoqueTire = document.getElementById("coloqueTire");
     btnClicar2 = document.getElementById("clicar2");
     imgAlterar = document.getElementById("imgVis");

     btnClicar1.addEventListener("click", function() {
          alert("Hello");
          imgAlterar.src = "img/emoji1.jpg";
     });
     
     btnColocar.addEventListener("mouseenter", function() {
          imgAlterar.src = "img/emoji2.jpg";
     });
     
     btnColoqueTire.addEventListener("mouseout", function() {
          imgAlterar.src = "img/emoji3.jpg";
     });
     
     btnClicar2.addEventListener("click", function() {
          imgAlterar.src = "img/emoji4.jpg";
     });

});

