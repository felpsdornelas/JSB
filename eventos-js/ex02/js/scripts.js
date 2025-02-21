// 2º abordagem utiliza-se a manipuação em JS;

function exibirMsg(msg) {
     alert(msg)
}

var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");

btn1.onclick = function () {
     exibirMsg('Você clicou em mim ;P');
}

btn2.onmouseenter = function () {
     exibirMsg('Você passou o mouse em mim :O');
}