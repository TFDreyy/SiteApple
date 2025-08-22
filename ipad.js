
const botaoDePause = document.getElementById('botaoDePause')

function easeOutQuad(x) {
  return 1 - (1 - x) * (1 - x);
}
//efeito do video
window.addEventListener(
  "scroll",
  function () {
    const container = document.getElementById("containerHero");
    const video = document.getElementById("videoHero");
    const scrollY = window.scrollY;

    if (window.innerWidth > 768) {

      const maxScrollDistance = 1200; 
      const borderRadiusMaxScroll = 500; 

      const scaleProgress = Math.min(scrollY / maxScrollDistance, 1);
      const borderProgress = Math.min(scrollY / borderRadiusMaxScroll, 1);

      const easedScaleProgress = easeOutQuad(scaleProgress);
      const easedBorderProgress = easeOutQuad(borderProgress);

      const minScale = 0.875;
      const scale = 1 - (1 - minScale) * easedScaleProgress;

      const newWidth = 100 * scale;
      const newHeight = 100 * scale;

      container.style.width = `${newWidth}%`;
      container.style.height = `${newHeight}%`;

      const maxBorderRadius = 2;
      const borderRadius = maxBorderRadius * easedBorderProgress;
      video.style.borderRadius = scrollY > 0 ? `${borderRadius}rem` : "0";
    } else {
      container.style.width = "100%";
      container.style.height = "100%";
      video.style.borderRadius = "0";
    }
  },
  { passive: true }
);

//pausar e despausar video

const imagemBotao = document.getElementById('imagemBotao');
const video = document.getElementById('videoHero');
botaoDePause.addEventListener("click", function() {

    if (video.paused) {
      video.play();
      imagemBotao.src = "imagensipad/toggle-pause.png";
    } else {
      video.pause();
      imagemBotao.src = "imagensipad/toggle-play.png";
    }
  });

const primeiroitem = document.getElementById("ipad-e-iphone");
primeiroitem.classList.add("active");
const textoCompanheiros = document.querySelectorAll(".texto-companheiros");
const companheiros = document.querySelector(".companheiros");

companheiros.classList.add("ipadIphone");
// efeito do texto dropdown

textoCompanheiros.forEach((texto) => {
  texto.addEventListener("click", () => {
    if (texto.classList.contains("active")) {
      texto.classList.toggle("active");
      companheiros.classList.remove("ipadMac", "ipadAppleWatch");
    } else {
      textoCompanheiros.forEach((el) => el.classList.remove("active"));
      texto.classList.toggle("active");

      switch (texto.id) {
        case "ipad-e-iphone":
          companheiros.classList.remove("ipadMac", "ipadAppleWatch");
          companheiros.classList.add("ipadIphone");
          break;

        case "ipad-e-mac":
          companheiros.classList.remove("ipadAppleWatch");
          companheiros.classList.add("ipadMac");
          break;

        default:
          companheiros.classList.remove("ipadMac");
          companheiros.classList.add("ipadAppleWatch");
          break;
      }
    }
  });
});
