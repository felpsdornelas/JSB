var boy = document.getElementById("boy");

boy.addEventListener("mouseenter", function() {
     boy.src = "img/assustado.png";
     textoBoy.innerHTML = "O que você quer?"; 
});

boy.addEventListener("mouseout", function() {
     boy.src = "img/pensativo.png";
     textoBoy.innerHTML = "zzzzzz"; 
});

boy.addEventListener("click", function() {
     
     var nome = prompt("Qual o seu nome? ");

     if(!nome){
          boy.src = "img/nervoso.png";
          textoBoy.innerHTML = "Não me faça perder tempo";
     }
     else{
          textoBoy.innerHTML = `${nome} seja bem vindo`;
          boy.src = "img/alegre.png";
     }
});

