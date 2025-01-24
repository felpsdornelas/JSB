window.addEventListener("DOMContentLoaded",function () {

     var txt = document.getElementById("txt");
     var btnValidar = document.getElementById("btnValidar");
 
     btnValidar.addEventListener("click", function () {

        // var padrao = /\d/; // Valida se há número. 
        // var padrao = /^\d/; // Valida se há número no ÍNICIO;
        // var padrao = /\d$/; // Valida se há número no FINAL;
        // var padrao = /^\d$/; // Valida se há APENAS um ÚNICO número na expressão;
       // var padrao = /^\d{5}-\d{4}$/ // Valida se há 5 números seguido de um traço e mais 4 números.
        // var padrao = /^\(\d{2,3}\)\d{4,5}-\d{4}$/; // TELEFONE -> (2 OU 3 NÚMEROS)0000-0000;
        // var padrao = /^\d{2}\/\d{2}\/\d{4}$/; // DATA NASCIMENTO -> dd/mm/dddd;
        // var padrao = /^\d{2}\.\d{3}-\d{3}$/; // CEP -> xx.xxx-xxx
        // var padrao = /^\(\d{2,3}\)\d{4,5}-\d{4}$/; 
        // var padrao = /^[Ii][Ff][Tt][Mm]-\d{4,5}-(TSPI|LCO|:\d[A-Z]$/;
        // var padrao = /^(M|F|Masculino|Feminino)$/i; // o I no final ele ignore toda a expressão regular, Minuscula e Maiuscula.
        // var padrao = /^IFTM\s{1,3}TSPI$/; // SPACE -> \s  
        // var padrao = /^IFTM\s?TSPI$/; // OPCIONAL -> Utiliza-se "?" para dizer que é OPCIONAL - O espaço nesse código é opcional 
        
        // padrao = /^[0-9a-f]+$/i; // Padrão para hexadecimal 

        // {0,1} => ? 
        // {1,0} => + 
        // [^00] = NEGAÇÂO > nesse código, não pode ter zeros. 

        padrao = /^\[A-z]{4,}\d{2,4}[^\w]{2}$/;

        if (padrao.test(txt.value))
            alert("Valido");
        else 
            alert("Inválido")

     }) 
 })