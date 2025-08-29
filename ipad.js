//efeito do video

window.addEventListener('scroll', function () {
    const img = document.getElementById('imagemHero');
    const scrollY = window.scrollY;
    const scale = Math.max(0.875, 1 - scrollY / 4700);
    const borderRadScale = Math.max(1, 0.75 + scrollY / 5000);

    if (window.innerWidth > 768) {
        img.style.transform = `scale(${scale})`

        if (scrollY > 0) {
            img.style.borderRadius = `${borderRadScale}rem`
        } else {
            img.style.borderRadius = '0'
        }
        
    } else {
        img.style.transform = 'scale(1)'
        img.style.borderRadius = '0'
    }
});
const primeiroitem = document.getElementById('ipad-e-iphone')
primeiroitem.classList.add('active');
const textoCompanheiros = document.querySelectorAll('.texto-companheiros');
const companheiros = document.querySelector('.companheiros')

companheiros.classList.add('ipadIphone');
// efeito do texto dropdown

textoCompanheiros.forEach((texto) => {
  texto.addEventListener('click', () => {
    // se já estiver ativo, desativa
    if (texto.classList.contains('active')) {
      texto.classList.toggle('active');
      companheiros.classList.remove('ipadMac', 'ipadAppleWatch');
    } else {
      // desativa todos os outros e ativa o clicado
      textoCompanheiros.forEach((el) => el.classList.remove('active'));
      texto.classList.toggle('active');

      switch (texto.id) {
        case 'ipad-e-iphone':
          companheiros.classList.remove('ipadMac', 'ipadAppleWatch');
          companheiros.classList.add('ipadIphone');
          break;
      
        case 'ipad-e-mac':
          companheiros.classList.remove('ipadAppleWatch');
          companheiros.classList.add('ipadMac');
          break;
      
        default:
          companheiros.classList.remove('ipadMac');
          companheiros.classList.add('ipadAppleWatch');
          break;
      }
    }
  });
<<<<<<< Updated upstream
});
=======
});

// botoes de navegacao
document.addEventListener("DOMContentLoaded", () => {

  let currentSlide = 0;
  const carousel = document.getElementById('carouselId');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const cards = carousel.querySelectorAll('.card-conheca');
  const totalCards = cards.length;
  const cardWidth = 420;
  
  const scrollDistance = 300;

  function getVisibleCards() {
    const containerWidth = window.innerWidth - 200;
    return Math.floor(containerWidth / cardWidth) || 1;
  }

  function updateCarousel() {
    const translateX = -currentSlide * scrollDistance;
    carousel.style.transform = `translateX(${translateX}px)`;
    updateButtons();
  }

  function updateButtons() {
    const containerWidth = carousel.offsetWidth;
    const totalWidth = totalCards * cardWidth;
    const maxTranslate = totalWidth - containerWidth;
    const maxSlide = Math.ceil(maxTranslate / scrollDistance);
    
    prevBtn.style.opacity = currentSlide === 0 ? '0.3' : '1';
    prevBtn.style.pointerEvents = currentSlide === 0 ? 'none' : 'auto';
    
    nextBtn.style.opacity = currentSlide >= maxSlide ? '0.3' : '1';
    nextBtn.style.pointerEvents = currentSlide >= maxSlide ? 'none' : 'auto';
  }

  prevBtn.addEventListener('click', () => {
    if (currentSlide > 0) {
      currentSlide--;
      updateCarousel();
    }
  });

  nextBtn.addEventListener('click', () => {
    const containerWidth = carousel.offsetWidth;
    const totalWidth = totalCards * cardWidth;
    const maxTranslate = totalWidth - containerWidth;
    const maxSlide = Math.ceil(maxTranslate / scrollDistance);
    
    if (currentSlide < maxSlide) {
      currentSlide++;
      updateCarousel();
    }
  });

  window.addEventListener('resize', () => {
    currentSlide = 0;
    updateCarousel();
  });

  updateButtons();
});

>>>>>>> Stashed changes
