window.addEventListener("DOMContentLoaded", function() {

     var btnGerar = document.getElementById("btnGerar");
     var btnGerar2 = document.getElementById("btnGerar2");
     var btnGerar3 = document.getElementById("btnGerar3");
     var caixa = document.getElementById("caixa");
     var txt = document.getElementById("txt");


     // Quando eu clicar no botão eu vou criar um <p>;
     btnGerar.addEventListener("click", function(){

          // Realiza a criação de um elemento, nesse caso <p>;
          var pNovo = document.createElement("p");
          // Coloca o nome dentro do <p>
          // pNovo.innerHTML = "Felipe Dornelas"; // InnerHTML aceita TAGS
          //pNovo.setAttribute("class", "boxInterna");
          //pNovo.classList.add = "boxInterna";
          //pNovo.className = "boxInterna";
          pNovo.textContent = "Felipe"; // textContent não aceita TAGS, + SEGURO e + USADO
          // Associa a <div> ao <p>, sendo DIV um elemento pai de P
          caixa.appendChild(pNovo);
          
     }); 

     btnGerar2.addEventListener("click", function(){
          var pNovo = document.createElement("p");
          var strongNovo = document.createElement("strong");
          pNovo.innerHTML = "<p>Insituto <strong>Federal</strong> do Triângulo Mineiro</p>";
          caixa.appendChild(pNovo);
     });

     btnGerar3.addEventListener("click", function() {
          // C
          var div = document.createElement("div");

          var img = document.createElement("img");
          img.setAttribute("src", "img/images.jpeg");
          img.setAttribute("name", txt.value);

          img.addEventListener("click", mostrar);

          var p = document.createElement("p");
          p.textContent = txt.value;

          div.append(img);
          div.append(p);

          caixa.appendChild(div);

     });

     function mostrar (e) {
          alert(e.currentTarget.name);
     }
});  