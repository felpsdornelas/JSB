var email = document.getElementById("txtEmail");
var senha = document.getElementById("txtSenha");
var btnEntrar = document.getElementById("btnEntrar");
var btnLimpar = document.getElementById("btnLimpar");

btnEntrar.addEventListener("click", function(){
     var usuarios = localStorage.getItem("usuarios");

     if(usuarios) {
          usuarios = JSON.parse(usuarios);
          if(checkUsuario(usuarios)){
               window.location.href = "../JogoTamagotchi/MainTamagotchi.html";
          } else {
               alert("Usuário existente, porém senha inválida.");
          }
     } else {
          alert("Usuário inexistente.");
     }
});


btnLimpar.addEventListener("click", function () {
     email.value = "";
     senha.value = "";
     email.focus();
});

function checkUsuario(vetUsuarios) {
     for(var i = 0; i < vetUsuarios.length; i++) {
         if(vetUsuarios[i].email == email.value && vetUsuarios[i].senha == senha.value){
               return true;
          } 
     }
     return false;
}