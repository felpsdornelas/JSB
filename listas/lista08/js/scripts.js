window.addEventListener("DOMContentLoaded", function () {

     var nome = document.getElementById("txtNome");
     var idade = document.getElementById("idade");

     var btnCarro = document.getElementById("btnCarro");
     var btnLimpar = document.getElementById("btnLimpar");

     var selectPassatempo = document.getElementById("passatempo");
     // var opcaoSelecione = document.getElementById("selecione");
     // var opcaoShopping = document.getElementById("shopping");
     // var opcaoNatureza = document.getElementById("natureza");

     btnCarro.addEventListener("click", function () {

          if (nome.value.trim() == "") {
               alert("É necessário digitar um nome");
          } else {
               if (idade.value.trim() == "") {
                    alert("É necessário digitar uma idade");
               } else {
                    if (idade.value < 1 || idade.value > 130) {
                         alert("É necessário digitar uma idade entre 1 a 130 anos");
                    } else {
                         if(selectPassatempo.value == "selecione") {
                              alert("É necessário selecionar uma opção!")
                         } else {
                              //LocalStorage 
                              localStorage.setItem("nome", nome.value);
                              localStorage.setItem("passatempo", selectPassatempo.value);

                              // Reidireciona para página
                              window.location.href = 'aguarde.html'
                         }
                    }
               }
          }
     });

     btnLimpar.addEventListener("click", function(){
          nome.value = "";
          idade.value = "";
          selectPassatempo.value = "selecione";
     }); 



});