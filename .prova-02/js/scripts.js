window.addEventListener("DOMContentLoaded", function(){

     var txtNome = document.getElementById("txtNome");
     var txtSobrenome = document.getElementById("txtSobrenome");
     var selecionarIdade = document.getElementById("selecionarIdade");
     var btnCadastrar = document.getElementById("btnCadastrar");
     var btnLimpar = document.getElementById("btnLimpar");
     var alertaUsuario = this.document.getElementById("alerta");
     var alertaImg = this.document.getElementById("alertaImg");

     btnCadastrar.addEventListener("click", function(){

          if(txtNome.value == "" || txtSobrenome.value == ""){
               alertaUsuario.innerHTML = "Nome e sobrenome devem ser informados";
               alertaImg.src = 'img/erro.png';
          } else {
               if(selecionarIdade.value == "opc1"){
                    alertaUsuario.innerHTML = "Selecione sua faixa etária";
               } else {
                    // Criação de um objeto para guardar as informações do usuário;
                    var infoUsuario = {nomeCompleto: `${txtNome.value} ${txtSobrenome.value}`, faixa: selecionarIdade.value};

                    // Enviando as informações do usuário para o Local Storage;
                    localStorage.setItem("infoUsuario", JSON.stringify(infoUsuario));

                    if(selecionarIdade.value == "opc2" || selecionarIdade.value == "opc3"){
                         var infoUsuario = JSON.parse(localStorage.getItem("infoUsuario"));
                         alertaUsuario.innerHTML = `${infoUsuario.nomeCompleto.toUpperCase()} você não tem idade o sulficiente`;
                    } else {
                         alertaUsuario.innerHTML = "Processando... Aguarde 5 segundos";
                         alertaImg.src = 'img/processando.gif';
                         setTimeout(linkarPagina, 5000);
                    }
               }
          }

     });

     txtNome.addEventListener("click", function(){
          alertaUsuario.innerHTML = "* Favor preencher todos os campos acima";
     });

     txtSobrenome.addEventListener("click", function(){
          alertaUsuario.innerHTML = "* Favor preencher todos os campos acima";
     });

     selecionarIdade.addEventListener("click", function(){
          alertaUsuario.innerHTML = "* Favor preencher todos os campos acima";
     });

     function linkarPagina() {
          window.location.href = 'processa.html';
     }

});