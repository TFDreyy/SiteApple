document.querySelectorAll('.card').forEach(card => {
  const video = card.querySelector('video');
  card.addEventListener('mouseenter', () => video.play());
  card.addEventListener('mouseleave', () => video.pause());
});
