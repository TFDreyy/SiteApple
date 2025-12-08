function direcao1(e){
    var direcao = document.getElementById("contentSlide");

    if(e == 1){//esquerda
        direcao.scrollLeft = direcao.scrollLeft - 400;

    } else if(e == 2){//direita
        direcao.scrollLeft = direcao.scrollLeft + 400;

    }
}
function direcao2(e){
    var direcao = document.getElementById("content2_Slide");

    if(e == 1){//esquerda
        direcao2.scrollLeft = direcao2.scrollLeft - 400;

    } else if(e == 2){//direita
        direcao2.scrollLeft = direcao2.scrollLeft + 400;

    }
}