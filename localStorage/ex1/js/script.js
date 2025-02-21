// Aula - 28/11/2024 
// LocalStorage

var btnCadastrar = document.getElementById("btnCadastrar");
var btnLimpar = document.getElementById("btnLimpar");
var txtUser = document.getElementById("txtUser");
var txtPwd = document.getElementById("txtPwd");

btnCadastrar.addEventListener("click", function (){
     var novoUsuario = {username: txtUser.value, password: txtPwd.value}
     var users = localStorage.getItem("users");

     if(!users) {
          localStorage.setItem("users", JSON.stringify([novoUsuario]));
     } else {
          users = JSON.parse(users);

          if(checkUser(users, novoUsuario.username)) {
               alert("Usuário já cadastrdo!")
          }
          else {
               users.push(novoUsuario);
               localStorage.setItem("users", JSON.stringify(users));
               alert("Usuário cadastrado com sucesso!")
          }
     }
});

btnLimpar.addEventListener("click", function (){

});

function checkUser (vetUsers, user){
     for (var i = 0; i < vetUsers.length; i++){
          if(vetUsers[i].username == user){
               return true;
          }
          return false;
     }
};