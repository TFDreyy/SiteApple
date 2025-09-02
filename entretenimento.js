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











const entretenimentoBtn = document.getElementById('entretenimento-menu-btn');
const entretenimentoMenu = document.getElementById('entretenimento-menu');
const header = document.querySelector('header');
const body = document.body;

let entretenimentoMenuTimer;
let openGuardUntil = 0;

const showEntretenimentoMenu = () => {
  clearTimeout(entretenimentoMenuTimer);
  body.classList.add('body-blur');
  entretenimentoMenu.style.display = 'block';
  header.classList.add('active');
  header.style.backgroundColor = '#161617';
  setTimeout(() => {
    entretenimentoMenu.classList.add('show');
    openGuardUntil = Date.now() + 150;
  }, 10);
};

const hideEntretenimentoMenu = () => {
  entretenimentoMenuTimer = setTimeout(() => {
    entretenimentoMenu.classList.remove('show');
    header.classList.remove('active');
    header.style.backgroundColor = '';
    setTimeout(() => {
      entretenimentoMenu.style.display = 'none';
      body.classList.remove('body-blur');
    }, 300);
  }, 300);
};

const quickHideEntretenimentoMenu = () => {
  clearTimeout(entretenimentoMenuTimer);
  entretenimentoMenuTimer = setTimeout(() => {
    entretenimentoMenu.classList.remove('show');
    header.classList.remove('active');
    header.style.backgroundColor = '';
    setTimeout(() => {
      entretenimentoMenu.style.display = 'none';
      body.classList.remove('body-blur');
    }, 10);
  }, 10);
};

function closestAnchor(el) {
  return el ? el.closest('a') : null;
}

if (entretenimentoBtn && entretenimentoMenu && header) {

  entretenimentoBtn.addEventListener('mouseenter', showEntretenimentoMenu);

  entretenimentoMenu.addEventListener('mouseenter', showEntretenimentoMenu);

  entretenimentoMenu.addEventListener('mouseleave', hideEntretenimentoMenu);

  header.addEventListener('mousemove', (e) => {
    const anchor = closestAnchor(e.target);
    const overMenu = e.target.closest('#entretenimento-menu')
    const isOpen = entretenimentoMenu.classList.contains('show');
    const inGuard = Date.now() < openGuardUntil;

    if (overMenu) {

      showEntretenimentoMenu();
      return;
    }

    if (anchor) {

      if (anchor === entretenimentoBtn) {

        showEntretenimentoMenu();
      } else {

        if (!inGuard) hideEntretenimentoMenu();
      }
    } else {

      if (isOpen || inGuard) {
        showEntretenimentoMenu();
      } else {

      }
    }
  });

  header.addEventListener('mouseleave', hideEntretenimentoMenu);

  entretenimentoBtn.addEventListener('click', (e) => {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      if (entretenimentoMenu.classList.contains('show')) {
        quickHideEntretenimentoMenu();
      } else {
        showEntretenimentoMenu();
      }
    }
  });
}
