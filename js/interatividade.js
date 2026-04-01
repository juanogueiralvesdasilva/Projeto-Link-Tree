$(function(){
 
    //Entrada
 
    /*. = classe*/
    //sem . = sla oq

    var botoes = $(" .butao");
    var titulo = $(" h1");
    var subtitulo = $(" #subtitulos");
    var icones = $("svg")
    var fundo = $(" body")
 
    // PROCESSAMENTO

    titulo.click(()=>{

    botoes.css("background-color","black");
    botoes.css("color","white");
    
    });

      
    titulo.dblclick(()=>{

    fundo.html("<h1> ESTE SITE PODE CONTER VÍRUS!!! </h1>")

    });


    subtitulo.click(()=>{


    icones.css("fill","black");


    });
  //SAIDA



});
 
