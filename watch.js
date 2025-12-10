function direcao1(e){
    var direcao = document.getElementById("contentSlide");

    if(e == 1){//esquerda
        direcao.scrollLeft = direcao.scrollLeft - 400;

    } else if(e == 2){//direita
        direcao.scrollLeft = direcao.scrollLeft + 400;

    }
}
function direcao2(a){
    var direction = document.getElementById("content2_Slide");

    if(a == 1){//esquerda
        direction.scrollLeft = direction.scrollLeft - 400;

    } else if(a == 2){//direita
        direction.scrollLeft = direction.scrollLeft + 400;

    }
}