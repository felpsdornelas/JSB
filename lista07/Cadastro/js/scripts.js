var email = document.getElementById("txtEmail");
var senha = document.getElementById("txtSenha");
var btnCadastrar = document.getElementById("btnCadastrar");
var btnLimpar = document.getElementById("btnLimpar");

btnCadastrar.addEventListener("click", function () {

     if(checarVazio(email.value, senha.value)) {
          return;     
     }

     if(checharTamanhoSenha(senha.value)) {
          return;
     }

     var novoUsuario = {email: email.value, senha: senha.value};
     var usuarios = localStorage.getItem("usuarios");

     if(!usuarios){
          alert("Usuário cadastrado com sucesso!")
          localStorage.setItem("usuarios", JSON.stringify([novoUsuario]));
     } else {
          usuarios = JSON.parse(usuarios);

          if(checarUsuario(usuarios, novoUsuario.email)){
               alert("Usuário já existente. Tente outro.")
          } else {
               usuarios.push(novoUsuario);
               localStorage.setItem("usuarios", JSON.stringify(usuarios));
               alert("Usuário cadastrado com sucesso!")
          }
     }
});

btnLimpar.addEventListener("click", function () {
     email.value = "";
     senha.value = "";
     email.focus();
});

function checarUsuario (vetUsuarios, usuario) {
     for (var i = 0; i < vetUsuarios.length; i++){
         if(vetUsuarios[i].email == usuario) {
               return true;
         }
     }
     return false;
};

function checarVazio(email, senha) {
     if(email.trim() == "") {
          alert('O campo "E-mail" deve ser preenchido')
          return true;
     }

     if (senha.trim() == "") {
          alert('O campo "Senha" deve ser preenchido')
          return true;
     }
     return false
};

function checharTamanhoSenha (senha) {
     if(senha.length < 5){
          alert("Senha inválida. Informe uma senha contendo pelo menos 5 caracteres.")
          return true;
     }
     return false;
};