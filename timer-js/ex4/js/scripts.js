window.addEventListener("DOMContentLoaded", function() {

     var txtNome1 = this.document.getElementById("txtNome1");
     var txtNome2 = this.document.getElementById("txtNome2");
     var btnExibir = this.document.getElementById("btnExibir");
     var paragrafo = this.document.getElementById("paragrafo");

     btnExibir.addEventListener("click", function(){
          setTimeout(copiarTexto, 2000);
     });

     function copiarTexto() {
          txtNome2.value = txtNome1.value;
          paragrafo.innerHTML = txtNome1.value;

          // InnerHTM utilizado para tags "in" 
          // Value utilizado para campos de formulário, onde passará o valor do campo "String";
     };

});