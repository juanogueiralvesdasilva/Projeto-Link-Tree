$(function(){
 
    //Entrada
 
    /*. = classe*/
    //sem . = sla oq

    var botoes = $(" .butao");
    var titulo = $(" h1");
    var subtitulo = $(" #subtitulos");
    var icones = $("svg");
    var fundo = $(" body");
    var botao_modoEscuro = $("#modoEscuro");

    var modoEscuro = false
 
    // PROCESSAMENTO

    botao_modoEscuro.click(()=>{


      if ( modoEscuro == false ){

      botoes.css("background-color","black");
      botoes.css("color","white");

      modoEscuro = true;

      }else{/*else = se não*/
        
      botoes.css("background-color","rgb(216, 247, 255)");
      botoes.css("color","black");

      modoEscuro = false;
        
     // botoes.addClass("modoEscuro");
     //titulo.addClass("modoEscuro");

    }


    //SAIDA

});
 

})
