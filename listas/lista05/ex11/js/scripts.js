var texto = "O carro quebrou na estrada de São Paulo. O carro foi levado para a oficina"
var palVelha = "carro";
var palNova = "caminhão";

document.write(`<p> ${texto.replace(palVelha, palNova)}<p>`);
document.write(`<p> ${texto.replaceAll(palVelha, palNova)}<p>`);
// expressão regular