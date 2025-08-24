const video = document.getElementById("videoMac");
const toggleButton = document.getElementById("videoToggle");
const toggleIcon = document.getElementById("toggleIcon");

function togglePlayPause() {
  if (video.paused) {
    video.play();
    toggleIcon.src = "imagens_Mac/toggle-pause.png";
  } else {
    video.pause();
    toggleIcon.src = "imagens_Mac/toggle-play.png";
  }
}

toggleButton.addEventListener("click", togglePlayPause);
video.addEventListener("click", togglePlayPause);

const videoBox = document.querySelector('.caixa-video');

const screenHeight = window.innerHeight;

const startScroll = screenHeight * (390 / 1080);
const maxScroll = screenHeight * (1200 / 1080);

const minWidth = 89;
const minHeight = 85;
const baseHeight = 90;

function easeOutQuad(x) {
  return 1 - (1 - x) * (1 - x);
}

window.addEventListener('scroll', () => {
  let scrollY = window.scrollY;

  if (scrollY < startScroll) {
    videoBox.style.width = '100%';
    videoBox.style.height = `${baseHeight}vh`;
    videoBox.style.transform = 'translateX(0)';
    videoBox.style.borderRadius = '0';
    return;
  }

  let progress = Math.min((scrollY - startScroll) / (maxScroll - startScroll), 1);
  progress = easeOutQuad(progress);

  let newWidth = 100 - (100 - minWidth) * progress;
  let newHeight = baseHeight - (baseHeight - minHeight) * (progress * 0.5);

  videoBox.style.width = `${newWidth}%`;
  videoBox.style.height = `${newHeight}vh`;

  if (newWidth > 100) {
    let offset = (newWidth - 100) / 2;
    videoBox.style.transform = `translateX(-${offset}%)`;
  } else {
    videoBox.style.transform = 'translateX(0)';
  }
  let newRadius = 0 + (4.5 - 1.5) * progress;
  videoBox.style.borderRadius = `${newRadius}rem`;

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

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('.card-icon').forEach(btn => {
    btn.addEventListener('click', () => {
      const cardinfoId = btn.getAttribute('data-cardinfo');
      abrirCardinfo(cardinfoId);
    });
  });
});


function abrirCardinfo(id) {
  const overlay = document.getElementById(id);
  overlay.style.display = 'flex';
  document.body.style.overflow = 'hidden';

  setTimeout(() => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) fecharCardinfo(id);
    });
  }, 10);
}

function fecharCardinfo(id) {
  const overlay = document.getElementById(id);
  overlay.style.display = 'none';
  document.body.style.overflow = 'auto';
}

document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card_mac");
  cards.forEach((card, index) => {
    const id = `cardinfo${index + 1}`;
    card.addEventListener("click", (e) => {
      if (!e.target.classList.contains("card-icon")) {
        abrirCardinfo(id);
      }
    });
  });
});

const macBtn = document.getElementById('mac-menu-btn');
const macMenu = document.getElementById('mac-menu');
const body = document.body;
let macMenuTimer;

const showMacMenu = () => {
  clearTimeout(macMenuTimer);
  body.classList.add('body-blur');
  macMenu.style.display = 'block';
  setTimeout(() => {
    macMenu.classList.add('show');
  }, 10);
};

const hideMacMenu = () => {
  macMenuTimer = setTimeout(() => {
    macMenu.classList.remove('show');
    setTimeout(() => {
      macMenu.style.display = 'none';
      body.classList.remove('body-blur');
    }, 300);
  }, 300);
};

if (macBtn && macMenu) {
  macBtn.addEventListener('mouseenter', showMacMenu);
  macMenu.addEventListener('mouseenter', showMacMenu);
  macBtn.addEventListener('mouseleave', hideMacMenu);
  macMenu.addEventListener('mouseleave', hideMacMenu);

  macBtn.addEventListener('click', (e) => {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      if (macMenu.classList.contains('show')) {
        hideMacMenu();
      } else {
        showMacMenu();
      }
    }
  });
}
