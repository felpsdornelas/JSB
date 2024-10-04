const dataAtual = new Date();

const diasDaSemana = ["Domingo","Segunda-Feira","Terça-Feira","Quarta-Feira","Quinta-Feira","Sexta-Feira","Sábado"];

const dia = dataAtual.getDay();

document.write(`Hoje é ${diasDaSemana[dia]}`); 