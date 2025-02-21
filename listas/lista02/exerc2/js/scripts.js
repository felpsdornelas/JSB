var codDisciplinas = ["P2", "AP", "POO1", "FBD", "JSB"];
var disciplinas = ["Projeto Sistema Web MVC e SQL", "Algoritmos e Programação", "Programação Orientada a Objetos 1", "Fundamentos de Banco de Dados", "JavaScript Básico"]; 


document.write("<table>")
document.write("<tr>")
document.write("<th>Código</th>")
document.write("<th>Disciplinas</th>")

document.write("</tr>")

for(var i = 0; i<codDisciplinas.length; i++){
     document.write(`<td>${codDisciplinas[i]}</td>`);
     document.write(`<td>${disciplinas[i]}</td>`);
     document.write(" </tr>")
}
document.write("</table>")