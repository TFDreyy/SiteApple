const container = document.querySelector('.card-scroll');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

let scrollAmount = 0;
const scrollStep = 320;

nextBtn.addEventListener('click', () => {
    scrollAmount += scrollStep;
    container.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
    });
});

prevBtn.addEventListener('click', () => {
    scrollAmount -= scrollStep;
    if (scrollAmount < 0) scrollAmount = 0;
    container.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
    });
});

