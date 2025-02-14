window.addEventListener("DOMContentLoaded", function(){

     var txtSenha = document.getElementById("txtSenha");
     var txtUsuario = document.getElementById("txtUsuario");
     var btnCadastrar = document.getElementById("btnCadastrar");

     btnCadastrar.addEventListener("click", function(){ 

          if(checarVazio(txtUsuario.value, txtSenha.value)){
               return
          }

          // Criação de um objeto 
          var novoUsuario = {usuario : txtUsuario.value, senha : txtSenha.value};
          var usuarios = localStorage.getItem("usuarios");


          
          if(!usuarios){ // Nenhum usuário cadastrado no LocalStorage;
               alert("Usuário cadastrado com sucesso!")
               localStorage.setItem("usuarios", JSON.stringify([novoUsuario]));
          } else {
               // Conversão de uma string JSON para um objeto;
               usuarios = JSON.parse(usuarios);
     
               if(checarUsuario(usuarios, novoUsuario.usuario)){
                    alert("Usuário já cadastrado!")
               } else {
                    usuarios.push(novoUsuario);
                    localStorage.setItem("usuarios", JSON.stringify(usuarios));
                    alert("Usuário cadastrado com sucesso!")
               }
          }        
     });

     // Verifica se o nome de usuário já existe;
     function checarUsuario(vetUsuarios, usuario) {

          for (var i = 0; i < vetUsuarios.length; i++) {
               if(vetUsuarios[i].usuario == usuario) {
                    return true;
               }
          }
          return false;
     }

     function checarVazio(usuario, senha) {
          if(usuario.trim() == "") {
               alert("É necessário preencher o campo de usuário");
               return true;
          }

          if(senha.trim() == "") {
               alert("É necessário preencher o campo de senha");
               return true;
          }

          return false; 
     }

});