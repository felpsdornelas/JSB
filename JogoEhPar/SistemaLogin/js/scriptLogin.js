window.addEventListener("DOMContentLoaded", function(){

     var txtSenha = document.getElementById("txtSenha");
     var txtUsuario = document.getElementById("txtUsuario");
     var btnEntrar = document.getElementById("btnEntrar");

     btnEntrar.addEventListener("click", function(){ 

          var usuarios = localStorage.getItem("usuarios"); // Transforma em String

          if(usuarios) {
               usuarios = JSON.parse(usuarios);
               var resultado = checarCredenciais(usuarios);
               if(resultado ==  "loginOk") {
                    window.open("SistemaJogo/index.html", "_self");
               } else if (resultado == "senhaIncorreta") {
                    alert("Senha incorreta, tente novamente!");
               } else {
                    alert("Usuário não cadastrado");
               }
          } else {
               alert("Usuário não cadastrado");
          }
     });

     // Verifica se o nome e senha do usuário existem e se relacionam;
     function checarCredenciais(vetUsuarios) {

          for (var i = 0; i < vetUsuarios.length; i++) {
               if(vetUsuarios[i].usuario === txtUsuario.value ) {
                    if (vetUsuarios[i].senha === txtSenha.value){
                         return "loginOk";
                    } else {
                         return "senhaIncorreta";
                    }
               }
          }
          return "usuarioInexistente";
     }   

});