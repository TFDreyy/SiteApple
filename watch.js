const botaoDePause = document.getElementById('botaoDePause')

function easeOutQuad(x) {
  return 1 - (1 - x) * (1 - x);
}
//efeito do video
window.addEventListener(
  "scroll",
  function () {
    const container = document.getElementById("containerHero");
    const video = document.getElementById("videoHero");
    const scrollY = window.scrollY;

    if (window.innerWidth > 768) {

      const maxScrollDistance = 1200; 
      const borderRadiusMaxScroll = 500; 

      const scaleProgress = Math.min(scrollY / maxScrollDistance, 1);
      const borderProgress = Math.min(scrollY / borderRadiusMaxScroll, 1);

      const easedScaleProgress = easeOutQuad(scaleProgress);
      const easedBorderProgress = easeOutQuad(borderProgress);

      const minScale = 0.875;
      const scale = 1 - (1 - minScale) * easedScaleProgress;

      const newWidth = 100 * scale;
      const newHeight = 100 * scale;

      container.style.width = `${newWidth}%`;
      container.style.height = `${newHeight}%`;

      const maxBorderRadius = 2;
      const borderRadius = maxBorderRadius * easedBorderProgress;
      video.style.borderRadius = scrollY > 0 ? `${borderRadius}rem` : "0";
    } else {
      container.style.width = "100%";
      container.style.height = "100%";
      video.style.borderRadius = "0";
    }
  },
  { passive: true }
);

//pausar e despausar video

const imagemBotao = document.getElementById('imagemBotao');
const video = document.getElementById('videoHero');
botaoDePause.addEventListener("click", function() {

    if (video.paused) {
      video.play();
      imagemBotao.src = "imagensipad/toggle-pause.png";
    } else {
      video.pause();
      imagemBotao.src = "imagensipad/toggle-play.png";
    }
  });

  document.addEventListener("DOMContentLoaded", () => {
  const setupCarousel = (carouselId, leftId, rightId) => {
    setTimeout(updateArrowVisibility, 100);
    const carousel = document.getElementById(carouselId);
    const leftArrow = document.getElementById(leftId);
    const rightArrow = document.getElementById(rightId);
    const cardWidth = carousel.querySelector(".cards > div").offsetWidth;
    const cardGap = parseInt(getComputedStyle(carousel).gap) || 0;
    const scrollAmount = cardWidth + cardGap;

    function updateArrowVisibility() {
      const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;
      leftArrow.style.visibility = Math.ceil(carousel.scrollLeft) <= 1 ? 'hidden' : 'visible';
      rightArrow.style.visibility = carousel.scrollLeft >= maxScrollLeft - 1 ? 'hidden' : 'visible';
    }

    leftArrow.addEventListener("click", () => {
      carousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      setTimeout(updateArrowVisibility, 300);
    });

    rightArrow.addEventListener("click", () => {
      carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      setTimeout(updateArrowVisibility, 300);
    });

    carousel.addEventListener("scroll", updateArrowVisibility);
    window.addEventListener("resize", updateArrowVisibility);

    updateArrowVisibility();
  };

  setupCarousel('carouselMac', 'leftMac', 'rightMac');
});



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