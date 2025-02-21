var imgs = document.querySelectorAll('.img');

var votos = document.querySelectorAll(".voto");

var contador = [0, 0, 0, 0];

function atualizarVotos() {

    votos.forEach(function (voto, index) {
        voto.textContent = contador[index];
    });
 }

 imgs.forEach(function (img, index) {

    img.addEventListener("mouseover", function() {
        img.style.backgroundColor = "lightblue";
        
    });

    img.addEventListener("mouseout", function() {
        img.style.backgroundColor = "";

    });

    img.addEventListener("click", function() {
        contador[index]++;
        atualizarVotos();
        
    }); 

});
