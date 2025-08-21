
    const container = document.querySelector('.card-container');
    const cardWidth = document.querySelector('.card').offsetWidth + 10; // inclui margem
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

  prevBtn.addEventListener('click', () => {
        container.scrollBy({ left: -cardWidth, behavior: 'smooth' });
  });

  nextBtn.addEventListener('click', () => {
        container.scrollBy({ left: cardWidth, behavior: 'smooth' });
  });