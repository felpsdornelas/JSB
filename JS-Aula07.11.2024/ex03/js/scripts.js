function exibirMsg(msg){
     alert(msg);
}

var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");

btn1.addEventListener("click", function() {
     exibirMsg('Você clicou em mim ;P');
});

btn2.addEventListener("mouseout", function() {
     exibirMsg('Você colocou o mouse em mim :O');
});