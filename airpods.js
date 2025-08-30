

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
