document.addEventListener("DOMContentLoaded", () => {
 const video = document.getElementById("videoMac");
  const toggleButton = document.getElementById("videoToggle");
  const toggleIcon = document.getElementById("toggleIcon");

  function togglePlayPause() {
    if (!video) return;
    if (video.paused) {
      video.play();
      if(toggleIcon) toggleIcon.src = "imagens_Mac/toggle-pause.png";
    } else {
      video.pause();
      if(toggleIcon) toggleIcon.src = "imagens_Mac/toggle-play.png";
    }
  }

  if(toggleButton) toggleButton.addEventListener("click", togglePlayPause);
  if(video) video.addEventListener("click", togglePlayPause);


  const videoBox = document.querySelector('.caixa-video');
  if(videoBox) {
    const screenHeight = window.innerHeight;
    const startScroll = screenHeight * (390 / 1080);
    const maxScroll = screenHeight * (1200 / 1080);
    const minWidth = 87;
    const minHeight = 85;
    const baseHeight = 90;

    function easeOutQuad(x) { return 1 - (1 - x) * (1 - x); }

    window.addEventListener('scroll', () => {
      let scrollY = window.scrollY;
      if(scrollY < startScroll) {
        videoBox.style.width = '100%';
        videoBox.style.height = `${baseHeight}vh`;
        videoBox.style.transform = 'translateX(0)';
        return;
      }
      let progress = Math.min((scrollY - startScroll) / (maxScroll - startScroll), 1);
      progress = easeOutQuad(progress);

      let newWidth = 100 - (100 - minWidth) * progress;
      let newHeight = baseHeight - (baseHeight - minHeight) * (progress * 0.5);
      videoBox.style.width = `${newWidth}%`;
      videoBox.style.height = `${newHeight}vh`;

      if(newWidth > 100) {
        let offset = (newWidth - 100) / 2;
        videoBox.style.transform = `translateX(-${offset}%)`;
      } else {
        videoBox.style.transform = 'translateX(0)';
      }

      let newRadius = 0 + (4.5 - 1.5) * progress;
      videoBox.style.borderRadius = `${newRadius}rem`;
    });
  }
});
