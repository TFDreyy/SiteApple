const carousel = document.querySelector('.carousel');


carousel.innerHTML += carousel.innerHTML;

let speed = 1.85; 
let scrollPos = 0;

function infiniteLoop() {
  scrollPos += speed;
  carousel.scrollLeft = scrollPos;

  if (scrollPos >= carousel.scrollWidth / 2) {
    scrollPos = 0;
  }

  requestAnimationFrame(infiniteLoop);
}

infiniteLoop();

