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

// --- vídeo: seleção segura e listeners protegidos ---
const videosContainer = document.querySelector('.videos-scroll')
    || document.querySelector('.videos-grid');
const nextVideoBtn = document.querySelector('.video-carousel .next')
    || document.querySelector('.next-video');
const prevVideoBtn = document.querySelector('.video-carousel .prev')
    || document.querySelector('.prev-video');

let scrollVideoAmount = 0;
const scrollVideoStep = 260;

if (videosContainer && (nextVideoBtn || prevVideoBtn)) {
    if (nextVideoBtn) {
        nextVideoBtn.addEventListener('click', () => {
            scrollVideoAmount += scrollVideoStep;
            videosContainer.scrollTo({ left: scrollVideoAmount, behavior: 'smooth' });
        });
    }
    if (prevVideoBtn) {
        prevVideoBtn.addEventListener('click', () => {
            scrollVideoAmount -= scrollVideoStep;
            if (scrollVideoAmount < 0) scrollVideoAmount = 0;
            videosContainer.scrollTo({ left: scrollVideoAmount, behavior: 'smooth' });
        });
    }
}


