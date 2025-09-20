const macBtn = document.getElementById('mac-menu-btn');
const macMenu = document.getElementById('mac-menu');
const header = document.querySelector('header');
const body = document.body;

let macMenuTimer;
let openGuardUntil = 0;

const showMacMenu = () => {
  clearTimeout(macMenuTimer);
  body.classList.add('body-blur');
  macMenu.style.display = 'block';
  header.classList.add('active');
  setTimeout(() => {
    macMenu.classList.add('show');
    openGuardUntil = Date.now() + 150;
  }, 10);
};

const hideMacMenu = () => {
  macMenuTimer = setTimeout(() => {
    macMenu.classList.remove('show');
    header.classList.remove('active');
    setTimeout(() => {
      macMenu.style.display = 'none';
      body.classList.remove('body-blur');
    }, 300);
  }, 300);
};

const quickHideMacMenu = () => {
  clearTimeout(macMenuTimer);
  macMenuTimer = setTimeout(() => {
    macMenu.classList.remove('show');
    header.classList.remove('active');
    setTimeout(() => {
      macMenu.style.display = 'none';
      body.classList.remove('body-blur');
    }, 10);
  }, 10);
};

function closestAnchor(el) {
  return el ? el.closest('a') : null;
}

if (macBtn && macMenu && header) {

  macBtn.addEventListener('mouseenter', showMacMenu);


  macMenu.addEventListener('mouseenter', showMacMenu);


  macMenu.addEventListener('mouseleave', hideMacMenu);


  header.addEventListener('mousemove', (e) => {
    const anchor = closestAnchor(e.target);
    const overMenu = e.target.closest('#mac-menu')
    const isOpen = macMenu.classList.contains('show');
    const inGuard = Date.now() < openGuardUntil;

    if (overMenu) {

      showMacMenu();
      return;
    }

    if (anchor) {

      if (anchor === macBtn) {

        showMacMenu();
      } else {

        if (!inGuard) hideMacMenu();
      }
    } else {

      if (isOpen || inGuard) {
        showMacMenu();
      } else {

      }
    }
  });


  header.addEventListener('mouseleave', hideMacMenu);


  macBtn.addEventListener('click', (e) => {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      if (macMenu.classList.contains('show')) {
        quickHideMacMenu();
      } else {
        showMacMenu();
      }
    }
  });
}


window.addEventListener('scroll', quickHideMacMenu);



document.querySelectorAll('.card').forEach(card => {
  const video = card.querySelector('video');
  card.addEventListener('mouseenter', () => video.play());
  card.addEventListener('mouseleave', () => video.pause());
});

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
  const question = item.querySelector(".faq-question");
  question.addEventListener("click", () => {
    item.classList.toggle("active");
  });
});

const barraApple = document.querySelector('.barraapple');

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    barraApple.classList.add('scrolled');
  } else {
    barraApple.classList.remove('scrolled');
  }
});