function fadePosterForActiveItem() {

  document.querySelectorAll('.video-poster').forEach(p => {

    p.style.opacity = 1;
    p.style.display = 'block';

  });
  document.querySelectorAll('.background-video').forEach(v => {

    v.style.opacity = 0;
    v.pause();
    v.currentTime = 0;

  });

  const activeItem = document.querySelector('.item.active');

  if (!activeItem) return;

  const poster = activeItem.querySelector('.video-poster');

  const video = activeItem.querySelector('.background-video');

  if (!poster || !video) return;

  setTimeout(() => {

    poster.style.opacity = 0;
    video.style.opacity = 1;

    setTimeout(() => {

      poster.style.display = 'none';
      video.play();

    }, 400);
  }, 5000);
}

const items = document.querySelectorAll('.item');
const dots = document.querySelectorAll('.dot');
let active = 0;
const total = items.length;


function goToSlide(index) {

  document.querySelector('.item.active').classList.remove('active');
  document.querySelector('.dot.active').classList.remove('active');
  items[index].classList.add('active');
  dots[index].classList.add('active');

  active = index;

  fadePosterForActiveItem();

}


dots.forEach((dot, idx) => {

  dot.addEventListener('click', () => {

    clearInterval(timer);
    goToSlide(idx);
    timer = setInterval(nextSlide, 40000);

  });
});


function nextSlide() {

  let next = (active + 1) % total;
  goToSlide(next);
  
}
let timer = setInterval(nextSlide, 40000);


fadePosterForActiveItem();




















 function initCarousel(id, btnPrevSelector, btnNextSelector) {
  const carousel = document.getElementById(id);
  const btnPrev = document.querySelector(btnPrevSelector);
  const btnNext = document.querySelector(btnNextSelector);

  btnPrev.onclick = () => {
    carousel.scrollLeft -= carousel.clientWidth;
  };

  btnNext.onclick = () => {
    carousel.scrollLeft += carousel.clientWidth;
  };

  let isDragging = false;
  let startX;
  let startScroll;

  carousel.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.pageX;
    startScroll = carousel.scrollLeft;
  });

  document.addEventListener('mouseup', () => {
    isDragging = false;
  });

  document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const diff = e.pageX - startX;
    carousel.scrollLeft = startScroll - diff;
  });
}

initCarousel('carousel', '.btn-prev', '.btn-next');
initCarousel('carousel2', '.btn-prev2', '.btn-next2');
initCarousel('carousel3', '.btn-prev3', '.btn-next3');
initCarousel('carousel4', '.btn-prev4', '.btn-next4');
initCarousel('carousel5', '.btn-prev5', '.btn-next5');
initCarousel('carousel6', '.btn-prev6', '.btn-next6');
initCarousel('carousel7', '.btn-prev7', '.btn-next7');
initCarousel('carousel8', '.btn-prev8', '.btn-next8');
initCarousel('carousel9', '.btn-prev9', '.btn-next9');
initCarousel('carousel10', '.btn-prev10', '.btn-next10');
initCarousel('carousel11', '.btn-prev11', '.btn-next11');
initCarousel('carousel13', '.btn-prev13', '.btn-next13');
initCarousel('carousel14', '.btn-prev14', '.btn-next14');
initCarousel('carousel15', '.btn-prev15', '.btn-next15');
initCarousel('carousel16', '.btn-prev16', '.btn-next16');
initCarousel('carousel17', '.btn-prev17', '.btn-next17');









const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
  const question = item.querySelector(".faq-question");
  question.addEventListener("click", () => {
    item.classList.toggle("active");
  });
});

