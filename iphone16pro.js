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
