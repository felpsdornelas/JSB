// Solicita ao usuário o seu nome completo;
nome = prompt("Digite seu nome completo:").trim();

// Enquanto nome for vazio "" solicite novamente o nome;
while(nome === ""){
     nome = prompt("É necessário que você digite o seu nome:").trim();
}

// Imprime na página web o nome do usuário com a cor vermelha, tamanho x e centralizado;
document.write(`<p style="color: red; font-size: 20px; text-align: center;">${nome}</p>`);