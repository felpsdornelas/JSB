var img1 = document.getElementById("img1");
var img2 = document.getElementById("img2");
var img3 = document.getElementById("img3");
var img4 = document.getElementById("img4");

var votos1 = document.getElementById("votoCandidato1");
var votos2 = document.getElementById("votoCandidato2");
var votos3 = document.getElementById("votoCandidato3");
var votos4 = document.getElementById("votoCandidato4");

var count1 = 0;
var count2 = 0;
var count3 = 0;
var count4 = 0;

function atualizarVotos() {
     votos1.textContent = count1;
     votos2.textContent = count2;
     votos3.textContent = count3;
     votos4.textContent = count4;
 }

img1.addEventListener("mouseover", function(){

     img1.style.backgroundColor = "lightblue";

});

img1.addEventListener("mouseout", function() {
     img1.style.backgroundColor = "";
 });

 img2.addEventListener("mouseover", function(){

     img2.style.backgroundColor = "lightblue";

});

img2.addEventListener("mouseout", function() {
     img2.style.backgroundColor = "";
 });

 img3.addEventListener("mouseover", function(){

     img3.style.backgroundColor = "lightblue";

});

img3.addEventListener("mouseout", function() {
     img3.style.backgroundColor = "";
 });

 img4.addEventListener("mouseover", function(){

     img4.style.backgroundColor = "lightblue";

});

img4.addEventListener("mouseout", function() {
     img4.style.backgroundColor = "";
 });

 img1.addEventListener("click", function(){
     count1++;
    atualizarVotos();
 });

 img2.addEventListener("click", function(){
     count2++;
    atualizarVotos();
 });

 img3.addEventListener("click", function(){
     count3++;
    atualizarVotos();
 });

 img4.addEventListener("click", function(){
     count4++;
    atualizarVotos();
 });
