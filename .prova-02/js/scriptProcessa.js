window.addEventListener("DOMContentLoaded", function(){

     var nomeUsuario = document.getElementById("nomeUsuario");
     var exibirDadosUsuario = document.getElementById("exibirDadosUsuario");
     var tipoApl = document.getElementById("tipoApl");

     var infoUsuario = JSON.parse(localStorage.getItem("infoUsuario")); // Transforma String JSON em um obejeto;

     nomeUsuario.innerHTML = infoUsuario.nomeCompleto.toUpperCase(); // Nome é exibido na tela

     var infoUsuario = JSON.stringify(infoUsuario); // JSON se transforma em String 

     var primeiroNome = infoUsuario.substring(17, 23);

     exibirDadosUsuario.innerHTML = `Usuário: ${primeiroNome.toUpperCase()} Senha: `; 

     var infoUsuario = JSON.parse(localStorage.getItem("infoUsuario"));

     if(infoUsuario.faixa == "opc4"){
          tipoApl.innerHTML = "Tipo de aplicação sugerida: Renda Fixa";
     } else if (infoUsuario.faixa == "opc5") {
          tipoApl.innerHTML = "Tipo de aplicação sugerida: Ações"
     } else {
          tipoApl.innerHTML = "Tipo de aplicação sugerida: Fundo de investimentos imobiliários"
     }
});