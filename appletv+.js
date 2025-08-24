  window.addEventListener('scroll', function () {
    const scrollY = window.scrollY;
    const fadeStart = 300;
    const fadeEnd = 800;  

    let progress = (scrollY - fadeStart) / (fadeEnd - fadeStart);
    progress = Math.min(Math.max(progress, 0), 1); 


    const overlay = document.querySelector('.video-escuro');
    const video = document.getElementById('background-video');

    overlay.style.backgroundColor = `rgba(0, 0, 0)`;
    video.style.opacity = 1 - progress;
  });











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

initAutoScroll('.carousel3', '.scroll3', { velocidadeNormal: 1.3, velocidadeHover: 0.5 });
initAutoScroll('.carousel4', '.scroll4', { velocidadeNormal: 1.5, velocidadeHover: 0.5 });






