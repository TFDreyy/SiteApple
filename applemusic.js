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
