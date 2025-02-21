var nome = document.getElementById("nome"); 
var sobrenome = document.getElementById("sobrenome"); 
var mostrarNome = document.getElementById("nomeCompleto"); 
var btnMostrar = document.getElementById("btnMostrar"); 

btnMostrar.addEventListener("click", function (){
     mostrarNome.value = `${nome.value} ${sobrenome.value}`;

});
