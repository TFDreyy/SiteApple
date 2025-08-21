document.addEventListener("DOMContentLoaded", () => {
  function abrirCardinfo(id) {
    const el = document.getElementById(id);
    if (el) {
      el.style.display = "flex";
      document.body.style.overflow = "hidden";
    }
  }

  function fecharCardinfo(id) {
    const el = document.getElementById(id);
    if (el) {
      el.style.display = "none";
      document.body.style.overflow = "auto";
    }
  }

  function toggleAccordion(element, index) {
    const wasActive = element.classList.contains('active');
    
    document.querySelectorAll('.accordion-item').forEach(item => {
      item.classList.remove('active');
      item.querySelector('.accordion-arrow').setAttribute('aria-expanded', 'false');
    });
    
    if (!wasActive) {
      element.classList.add('active');
      element.querySelector('.accordion-arrow').setAttribute('aria-expanded', 'true');
      
      const image = document.getElementById('integration-image');
      const images = [
        'imagens iphone/iphonemac.jpg.png',
        'imagens iphone/iphoneapplewatch.jpg.png',
        'imagens iphone/iphoneairpods-removebg-preview.png',
        'imagens iphone/iphoneipad-removebg-preview.png'
      ];
      
      if (image && images[index]) {
        image.src = images[index];
      }


      setTimeout(() => {
        element.classList.remove('animate-darkmode');
      }, 600);
    }
  }


  const setupCarousel = (carouselId, leftId, rightId) => {

  };


  setupCarousel('carousel1', 'left1', 'right1');
  setupCarousel('carousel2', 'left2', 'right2');


  document.querySelectorAll('.card-icon, .card-icon2').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const cardinfoId = btn.getAttribute('data-cardinfo');
      if (cardinfoId) {
        abrirCardinfo(cardinfoId);
      }
    });
  });


  document.querySelectorAll('.cardinfo').forEach(card => {
    card.addEventListener('click', (e) => {
      if (e.target === card) {
        fecharCardinfo(card.id);
      }
    });
  });


  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.iphone-card, .iphone-card2, .acessorio-card, .accordion-item').forEach(el => {
    observer.observe(el);
  });


  const iphoneBtn = document.getElementById('iphone-menu-btn');
  const iphoneMenu = document.getElementById('iphone-menu');
  const body = document.body;
  let menuTimer;

  const showMenu = () => {
    clearTimeout(menuTimer);
    body.classList.add('body-blur');
    iphoneMenu.style.display = 'block';
    setTimeout(() => {
      iphoneMenu.classList.add('show');
    }, 10);
  };

  const hideMenu = () => {
    menuTimer = setTimeout(() => {
      iphoneMenu.classList.remove('show');
      setTimeout(() => {
        iphoneMenu.style.display = 'none';
        body.classList.remove('body-blur');
      }, 300);
    }, 300);
  };

  if (iphoneBtn && iphoneMenu) {
    iphoneBtn.addEventListener('mouseenter', showMenu);
    iphoneMenu.addEventListener('mouseenter', showMenu);
    iphoneBtn.addEventListener('mouseleave', hideMenu);
    iphoneMenu.addEventListener('mouseleave', hideMenu);

    iphoneBtn.addEventListener('click', (e) => {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        if (iphoneMenu.classList.contains('show')) {
          hideMenu();
        } else {
          showMenu();
        }
      }
    });
  }
});

const trilho = document.querySelector('.trilho');
  const indicador = document.querySelector('.indicador');

  if (trilho && indicador) {
    trilho.addEventListener('click', function() {
      document.body.classList.toggle('dark-mode');
      trilho.classList.toggle('dark');
      if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
      } else {
        localStorage.setItem('darkMode', 'disabled');
      }
    });

    if (localStorage.getItem('darkMode') === 'enabled') {
      document.body.classList.add('dark-mode');
      trilho.classList.add('dark');
    }
  }
