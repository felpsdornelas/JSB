window.addEventListener("DOMContentLoaded", function() {

     var numBinario = this.document.getElementById("numBinario");
     var btnNumBinario = this.document.getElementById("btnNumBinario");

     var numHexadecimal = this.document.getElementById("numHexadecimal");
     var btnNumHexadecimal = this.document.getElementById("btnNumHexadecimal");

     var numDecimal = this.document.getElementById("numDecimal");
     var btnNumDecimal = this.document.getElementById("btnNumDecimal");

     var numReais = this.document.getElementById("numReais");
     var btnNumReais = this.document.getElementById("btnNumReais");

     var horario = this.document.getElementById("horario");
     var btnHorario = this.document.getElementById("btnHorario");

     var dataNasc = this.document.getElementById("dataNasc");
     var btnDataNasc = this.document.getElementById("btnDataNasc");

     var cep = this.document.getElementById("cep");
     var btnCep = this.document.getElementById("btnCep");

     var cpf = this.document.getElementById("cpf");
     var btnCpf = this.document.getElementById("btnCpf");

     var cnpj = this.document.getElementById("cnpj");
     var btnCnpj = this.document.getElementById("btnCnpj");

     var numParenese = this.document.getElementById("numParenese");
     var btnNumParenese = this.document.getElementById("btnNumParenese");

     var Email = this.document.getElementById("Email");
     var btnEmail = this.document.getElementById("btnEmail");

     var numDominio = this.document.getElementById("numDominio");
     var btnNumDominio = this.document.getElementById("btnNumDominio");

     var altura = this.document.getElementById("altura");
     var btnAltura = this.document.getElementById("btnAltura");
     
     var nome = this.document.getElementById("nome");
     var btnNome = this.document.getElementById("btnNome");

     var telefone = this.document.getElementById("telefone");
     var btnTelefone = this.document.getElementById("btnTelefone");

     var txtIftm = this.document.getElementById("txtIftm");
     var btnTxtIftm = this.document.getElementById("btnTxtIftm");
     
     var numCem = this.document.getElementById("numCem");
     var btnNumCem = this.document.getElementById("btnNumCem");
     
     var numPlaca = this.document.getElementById("numPlaca");
     var btnNumPlaca = this.document.getElementById("btnNumPlaca");

     var txtVogais = this.document.getElementById("txtVogais");
     var btnTxtVogais = this.document.getElementById("btnTxtVogais");

     var numFaturamento = this.document.getElementById("numFaturamento");
     var btnNumFaturamento = this.document.getElementById("btnNumFaturamento");

     var numMatricula = this.document.getElementById("numMatricula");
     var btnNumMatricula = this.document.getElementById("btnNumMatricula");

     var numMatricula2 = this.document.getElementById("numMatricula2");
     var btnNumMatricula2 = this.document.getElementById("btnNumMatricula2");

     var numMatricula3 = this.document.getElementById("numMatricula3");
     var btnNumMatricula3 = this.document.getElementById("btnNumMatricula3");
     

     btnNumBinario.addEventListener("click", function(){
          // O sinal + em (regex) significa "uma ou mais ocorrências";
          var padraoBinario = /^[0-1]+$/;
          validarExpressaoRegular(padraoBinario, numBinario);     

     });

     btnNumHexadecimal.addEventListener("click", function(){   
                 
          var padraoHexadecimal = /^[0-9a-f]+$/i;
          validarExpressaoRegular(padraoHexadecimal, numHexadecimal);
     });

     btnNumDecimal.addEventListener("click", function(){

          var padraoDecimal = /^\d+,\d+$/;
          validarExpressaoRegular(padraoDecimal, numDecimal);
     });

     btnNumReais.addEventListener("click", function(){

          var padraoReais = /^-?\d+((\.|\,)\d+)?$/;
          validarExpressaoRegular(padraoReais, numReais);
     });

     btnHorario.addEventListener("click", function(){

          var padraoHorario = /^\d{2}\:\d{2}\:\d{2}$/;
          validarExpressaoRegular(padraoHorario, horario);
     });

     
     btnDataNasc.addEventListener("click", function(){

          var padraoDataNasc = /^\d{2}\/\d{2}\/(\d{2}|\d{4})$/;
          validarExpressaoRegular(padraoDataNasc, dataNasc);
     });

     btnCep.addEventListener("click", function(){

          var padraoCep = /^\d{2}\.\d{3}-\d{2}$/;
          validarExpressaoRegular(padraoCep, cep);
     });

     btnCpf.addEventListener("click", function(){

          var padraoCpf = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/; // 149.664.836-62 
          validarExpressaoRegular(padraoCpf, cpf);
     }); 
     
     btnCnpj.addEventListener("click", function(){
                                                                
          var padraoCnpj = /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/; 
          validarExpressaoRegular(padraoCnpj, cnpj);
     });    

     btnNumParenese.addEventListener("click", function(){
                                                                
          var padraoNumParenese = /^\(\d+\)$/; 
          validarExpressaoRegular(padraoNumParenese, numParenese);
     }); 

     btnEmail.addEventListener("click", function(){
                                                                
          var padraoEmail = /^\w+@\w+\.\w{2,3}$/;  // xxx@yyy.ccc (c: poderá ter de 2 a 3 caracteres)
          validarExpressaoRegular(padraoEmail, Email);
     }); 

     btnNumDominio.addEventListener("click", function(){
                                                                
          var padraoNumDominio = /^\d{3}\.\d{3}\.\d{1,3}\.\d{1,3}$/;  
          validarExpressaoRegular(padraoNumDominio, numDominio);
     }); 

     btnAltura.addEventListener("click", function(){
                                                                
          var padraoAltura = /^\d\,\d\d?$/;  // Ex: x,xz ou x.xz (onde z é opcional)
          validarExpressaoRegular(padraoAltura, altura);
     }); 

     btnNome.addEventListener("click", function(){
                                                                
          var padraoNome = /^[A-Z][a-z]+$/;  // Nome próprio (letra inicial maiúscula e demais minúsculas). Ex: Wilton
          validarExpressaoRegular(padraoNome, nome);
     }); 

     btnTelefone.addEventListener("click", function(){
                                                                
          var padraoTelefone = /^\+\d{2}\(\d{2}\)\d{5}-\d{4}$/;  // +xx(xx)xxxxx-xxxx
          validarExpressaoRegular(padraoTelefone, telefone);
     }); 
     
     btnTxtIftm.addEventListener("click", function(){
                                                                
          var padraoTxtIftm = /^IFTM campus Uberlândia( Centro)?$/;  // Texto: "IFTM campus Uberlândia" ou "IFTM campus Uberlândia Centro
          validarExpressaoRegular(padraoTxtIftm, txtIftm);
     }); 

     btnNumCem.addEventListener("click", function(){
                                                                
          var padraoNumCem = /^(100|[1-9][0-9]?)$/;  
          validarExpressaoRegular(padraoNumCem, numCem);
     }); 

     btnNumPlaca.addEventListener("click", function(){
                                                                
          var padraoNumPlaca = /^[A-Z]{3}\d[A-Z]\d{2}$/;  
          validarExpressaoRegular(padraoNumPlaca, numPlaca);
     }); 

     btnTxtVogais.addEventListener("click", function(){
                                                                
          var padraoTxtVogais = /^[abcd]*[aeiou][abcd]*$/i;  
          validarExpressaoRegular(padraoTxtVogais, txtVogais);
     }); 

     btnNumFaturamento.addEventListener("click", function(){
                                                                
          var padraoNumFaturamento = /^R\$(([1-9]\d{0,2}(\.\d{3})*)|0)(,\d{1,2})?$/;  
          validarExpressaoRegular(padraoNumFaturamento, numFaturamento);
     }); 

     btnNumMatricula.addEventListener("click", function(){
                                                                
          var padraoNumMatricula = /^(IFTM|iftm)-\d{3}\/\d{3}-\w{2}$/;
          validarExpressaoRegular(padraoNumMatricula, numMatricula);
     }); 

     btnNumMatricula2.addEventListener("click", function(){
                                                                
          var padraoNumMatricula2 = /^MT-\d{2}\.\d{3}-[Ii][Ff][Tt][Mm]$/;
          validarExpressaoRegular(padraoNumMatricula2, numMatricula2);
     }); 

     btnNumMatricula3.addEventListener("click", function(){
                                                                
          var padraoNumMatricula3 = /^[Mm]\s?[Tt]-\d{2}\.\d{3}-[Ii]\s?[Ff]\s?[Tt]\s?[Mm]\s(Uberlândia)( Centro)?$/;
          validarExpressaoRegular(padraoNumMatricula3, numMatricula3);
     }); 

     function validarExpressaoRegular(padrao, ocorrecia) { 
          if(padrao.test(ocorrecia.value))
               alert("Válido");
          else
               alert("Inválido") 
     }
});