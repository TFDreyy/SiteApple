const slides = document.querySelectorAll('.slide');
let index = 0;

function mostrarSlide() {
    slides.forEach(slide => slide.classList.remove('mostrar'));
    slides[index].classList.add('mostrar');
    index = (index + 1) % slides.length;
}

setInterval(mostrarSlide, 1500);





function initAutoScroll(carouselSelector, scrollSelector, options = {}) {
  const carousel = document.querySelector(carouselSelector);
  const scroll = document.querySelector(scrollSelector);
  if (!carousel || !scroll) return;

  let posicao = 0;
  const velocidadeNormal = options.velocidadeNormal || 1.5;
  const velocidadeHover = options.velocidadeHover || 0.5;
  let velocidadeAtual = velocidadeNormal;
  let alvoVelocidade = velocidadeNormal;

  function animarScroll() {
    velocidadeAtual += (alvoVelocidade - velocidadeAtual) * 0.05;
    posicao -= velocidadeAtual;

    if (Math.abs(posicao) >= scroll.scrollWidth / 2) {
      posicao = 0;
    }

    scroll.style.transform = `translateX(${posicao}px)`;
    requestAnimationFrame(animarScroll);
  }

  carousel.addEventListener('mouseenter', () => alvoVelocidade = velocidadeHover);
  carousel.addEventListener('mouseleave', () => alvoVelocidade = velocidadeNormal);

  animarScroll();
}

initAutoScroll('.carousel',  '.scroll',  { velocidadeNormal: 1.5, velocidadeHover: 0.5 });
initAutoScroll('.carousel2', '.scroll2', { velocidadeNormal: 1.5, velocidadeHover: 0.5 });
initAutoScroll('.carousel3', '.scroll3', { velocidadeNormal: 1.5, velocidadeHover: 0.5 });
initAutoScroll('.carousel4', '.scroll4', { velocidadeNormal: 1.5, velocidadeHover: 0.5 });
initAutoScroll('.carousel5', '.scroll5', { velocidadeNormal: 1.5, velocidadeHover: 0.5 });
initAutoScroll('.carousel6', '.scroll6', { velocidadeNormal: 1.5, velocidadeHover: 0.5 });