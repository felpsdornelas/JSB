var sexo = document.getElementById("sexo");

sexo.addEventListener("change", function () {
     if(sexo.selectedIndex == 0)
          alert("É necessário selecionar o sexo.")
});