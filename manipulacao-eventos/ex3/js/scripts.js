var num1 = document.getElementById("numero1");
var num2 = document.getElementById("numero2");
var igualdade = document.getElementById("igualdade");
var operador = document.getElementById("operador");
var resultado = document.getElementById("resultado");

igualdade.addEventListener("click", function() {
     resultado.value = eval(num1.value + operador.value + num2.value);
});
