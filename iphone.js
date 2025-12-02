document.addEventListener("DOMContentLoaded", () => {


  const video = document.getElementById("videoMac");
  const toggleButton = document.getElementById("videoToggle");
  const toggleIcon = document.getElementById("toggleIcon");

  function togglePlayPause() {
    if (!video) return;
    if (video.paused) {
      video.play();
      if(toggleIcon) toggleIcon.src = "imagens_Mac/toggle-pause.png";
    } else {
      video.pause();
      if(toggleIcon) toggleIcon.src = "imagens_Mac/toggle-play.png";
    }
  }

  if(toggleButton) toggleButton.addEventListener("click", togglePlayPause);
  if(video) video.addEventListener("click", togglePlayPause);


  const videoBox = document.querySelector('.caixa-video');
  if(videoBox) {
    const screenHeight = window.innerHeight;
    const startScroll = screenHeight * (390 / 1080);
    const maxScroll = screenHeight * (1200 / 1080);
    const minWidth = 87;
    const minHeight = 85;
    const baseHeight = 90;

    function easeOutQuad(x) { return 1 - (1 - x) * (1 - x); }

    window.addEventListener('scroll', () => {
      let scrollY = window.scrollY;
      if(scrollY < startScroll) {
        videoBox.style.width = '100%';
        videoBox.style.height = `${baseHeight}vh`;
        videoBox.style.transform = 'translateX(0)';
        return;
      }
      let progress = Math.min((scrollY - startScroll) / (maxScroll - startScroll), 1);
      progress = easeOutQuad(progress);

      let newWidth = 100 - (100 - minWidth) * progress;
      let newHeight = baseHeight - (baseHeight - minHeight) * (progress * 0.5);
      videoBox.style.width = `${newWidth}%`;
      videoBox.style.height = `${newHeight}vh`;

      if(newWidth > 100) {
        let offset = (newWidth - 100) / 2;
        videoBox.style.transform = `translateX(-${offset}%)`;
      } else {
        videoBox.style.transform = 'translateX(0)';
      }

      let newRadius = 0 + (4.5 - 1.5) * progress;
      videoBox.style.borderRadius = `${newRadius}rem`;
    });
  }

  
  function abrirCardinfo(id) {
    const el = document.getElementById(id);
    if(el) {
      el.style.display = "flex";
      document.body.style.overflow = "hidden";
    }
  }

  function fecharCardinfo(id) {
    const el = document.getElementById(id);
    if(el) {
      el.style.display = "none";
      document.body.style.overflow = "auto";
    }
  }

  document.querySelectorAll(".card-icon").forEach(btn => {
    btn.addEventListener("click", () => {
      const targetId = btn.getAttribute("data-cardinfo");
      if(targetId) abrirCardinfo(targetId);
    });
  });

  document.querySelectorAll(".close-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const targetId = btn.closest(".cardinfo")?.id;
      if(targetId) fecharCardinfo(targetId);
    });
  });

  document.querySelectorAll('.cardinfo').forEach(card => {
    card.addEventListener('click', e => {
      if(e.target === card) fecharCardinfo(card.id);
    });
  });


  function toggleAccordion(element, index) {
    const wasActive = element.classList.contains('active');
    document.querySelectorAll('.accordion-item').forEach(item => {
      item.classList.remove('active');
      item.querySelector('.accordion-arrow')?.setAttribute('aria-expanded','false');
    });

    if(!wasActive) {
      element.classList.add('active');
      element.querySelector('.accordion-arrow')?.setAttribute('aria-expanded','true');

      const image = document.getElementById('integration-image');
      const images = [
        'imagens iphone/iphonemac.jpg.png',
        'imagens iphone/iphoneapplewatch.jpg.png',
        'imagens iphone/iphoneairpods-removebg-preview.png',
        'imagens iphone/iphoneipad-removebg-preview.png'
      ];
      if(image && images[index]) image.src = images[index];

      setTimeout(() => {
        element.classList.remove('animate-darkmode');
      }, 600);
    }
  }
  window.toggleAccordion = toggleAccordion;


  const carousel = document.getElementById("carouselId");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  if(carousel && prevBtn && nextBtn) {
    const getCardWidth = () => {
      const card = carousel.querySelector(".iphone-card");
      return card ? card.offsetWidth + 16 : 300; // 16 = gap aproximado
    };

    prevBtn.addEventListener("click", () => {
      carousel.scrollBy({ left: -getCardWidth(), behavior: "smooth" });
    });

    nextBtn.addEventListener("click", () => {
      carousel.scrollBy({ left: getCardWidth(), behavior: "smooth" });
    });
  }


  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting) entry.target.classList.add('animated');
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.iphone-card, .iphone-card2, .acessorio-card, .accordion-item').forEach(el => {
    observer.observe(el);
  });

  const iphoneBtn = document.getElementById('iphone-menu-btn');
  

  

});
const primeiroitem = document.getElementById("ipad-e-iphone");
primeiroitem.classList.add("active");
const textoCompanheiros = document.querySelectorAll(".texto-companheiros");
const companheiros = document.querySelector(".companheiros");

companheiros.classList.add("ipadIphone");


textoCompanheiros.forEach((texto) => {
  texto.addEventListener("click", () => {
    if (texto.classList.contains("active")) {
      texto.classList.toggle("active");
      companheiros.classList.remove("ipadMac", "ipadAppleWatch");
    } else {
      textoCompanheiros.forEach((el) => el.classList.remove("active"));
      texto.classList.toggle("active");

      switch (texto.id) {
        case "ipad-e-iphone":
          companheiros.classList.remove("ipadMac", "ipadAppleWatch");
          companheiros.classList.add("ipadIphone");
          break;

        case "ipad-e-mac":
          companheiros.classList.remove("ipadAppleWatch");
          companheiros.classList.add("ipadMac");
          break;

        default:
          companheiros.classList.remove("ipadMac");
          companheiros.classList.add("ipadAppleWatch");
          break;
      }
    }
  });
});