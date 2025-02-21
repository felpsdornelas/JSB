window.addEventListener("DOMContentLoaded", function(){

     var alterNome = document.getElementById("alterNome");
     var fabricante = document.getElementById("fabricante");
     var nomeVeiculo = document.getElementById("nomeVeiculo");
     var potencia = document.getElementById("potencia");
     var garantia = document.getElementById("garantia");
     var consumo = document.getElementById("consumo");
     var alterImg = this.document.getElementById("alterImg");


     var nome = localStorage.getItem("nome");
     var passatempo = localStorage.getItem("passatempo");

     var vetCarros = [
          {img: "civic.jpg", fabricante: "Honda", nome: "Civic", potencia: "150 cv", garantia: "3 anos", consumo: "9,7 km/l"},
          {img: "corolla.jpg",fabricante: "Toyota", nome: "Corolla", potencia: "144 cv", garantia: "3 anos", consumo: "10,6 km/l"},
          {img: "troller.jpg", fabricante: "Ford", nome: "Troller", potencia: "200 cv", garantia: "3 anos", consumo: ":7,7 km/l"},
          {img: "wrangler.jpg", abricante: "Jepp", nome: "Wrangler", potencia: "199 cv", garantia: "2 anos", consumo: "3,1 km/l"}
      ];

     alterNome.innerHTML = nome;



     


});