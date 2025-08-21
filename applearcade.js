const games = [
  {
    title: "Balatro",
    genre: "Cartas",
    description:
      "Balatro foi o sucesso indie surpresa de 2024. Este 'roguelike' irresistível traz uma reviravolta caótica e solo ao pôquer, tornando-se impossível de largar. A versão do Apple Arcade não possui microtransações, permitindo que você experimente a emoção de apostas virtuais de alto risco sem nenhum risco real.",
    image: "balatrofoto.png",
    video: "Balatro Short Trailer.mp4"
  },
  {
    title: "UNO: Arcade Edition™",
    genre: "Cartas",
    description:
      "UNO: Arcade Edition™ leva o clássico jogo de cartas a um novo nível, com partidas rápidas, animações vibrantes e modos de jogo inéditos que trazem ainda mais emoção. Perfeito para jogar sozinho ou com amigos, essa versão no Apple Arcade elimina anúncios e microtransações, deixando você focado apenas na diversão e nas reviravoltas a cada carta jogada.",
    image: "UNOfoto.png",
    video: "Uno Launch Trailer.mp4"
  },
  {
    title: "NBA 2K25 Arcade Edition",
    genre: "Esportes",
    description:
      "NBA 2K25 Arcade Edition traz a emoção das quadras para a palma da sua mão, com gráficos impressionantes e jogabilidade refinada. Monte seu time dos sonhos, entre em partidas rápidas ou mergulhe no modo carreira com seu jogador personalizado. Tudo isso sem anúncios nem microtransações na versão do Apple Arcade, é basquete puro, direto e sem interrupções.",
    image: "NBA2K25ArcadeEditionfoto.png",
    video: "NBA 2K25 Arcade Edition Launch Trailer.mp4"
  },
  {
    title: "Sonic Dream Team",
    genre: "Ação",
    description:
      "Os jogos de plataforma 3D do Sonic não têm a mesma reputação impecável de suas versões em 2D, mas Sonic Dream Team é uma exceção surpreendente. Corra e salte por fases 3D criativas, coloridas e bem projetadas neste sucesso inesperado do ouriço azul.",
    image: "sonicfoto.png",
    video: "Sonic Dream Team Animated Intro.mp4"
  },
  {
    title: "Pac-Man 256",
    genre: "Estratégia",
    description:
      "Pac-Man 256 é, há anos, um dos nossos jogos mobile preferidos. Ele reinventa o clássico Pac-Man com uma pegada infinita e um estilo retrô cheio de glitches que dá um charme único ao jogo. Na versão do Apple Arcade, todas as compras dentro do app foram removidas, assim, você pode focar apenas em devorar bolinhas e bater recordes.",
    image: "pac-manfoto.png",
    video: "PAC-MAN 256 Mobile Tablet Beware of the Glitch.mp4"
  },
  {
    title: "Bob Esponja: Em Busca do Hambúrguer",
    genre: "Aventura",
    description:
      "Em Bob Esponja: Em Busca do Hambúrguer, você embarca em uma aventura divertida pelo fundo do mar para impedir que os vilões roubem a fórmula secreta do hambúrguer de siri. Corra, salte e resolva quebra-cabeças em fases cheias de ação e humor no melhor estilo Bob Esponja. Exclusiva do Apple Arcade, esta versão não tem anúncios nem microtransações, só diversão contínua com seu esponja favorito.",
    image: "bobesponjafoto.png",
    video: "SpongeBob Patty Pursuit All Trailer.mp4"
  },
];

let currentIndex = Math.floor(Math.random() * games.length);
const body = document.body;
const image = document.getElementById("game-image");
const title = document.getElementById("game-title");
const genre = document.getElementById("game-genre");
const description = document.getElementById("game-description");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const dots = document.querySelectorAll(".dot");
const video = document.getElementById("background-video")

function fadeRestart(element) {
  element.classList.remove("fade-in");
  void element.offsetWidth;
  element.classList.add("fade-in");
}

function updateCarousel(index) {
  const game = games[index];

  image.src = `imagens/${game.image}`;
  fadeRestart(image);

  title.textContent = game.title;
  genre.textContent = game.genre;
  description.textContent = game.description;

    if (game.video) {
    video.src = `videos/${game.video}`;
    video.load();
    video.play();
  }

  dots.forEach((dot, i) => {
    dot.classList.toggle("selected", i === index);
  });
}

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + games.length) % games.length;
  updateCarousel(currentIndex);
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % games.length;
  updateCarousel(currentIndex);
});

dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    currentIndex = i;
    updateCarousel(currentIndex);
  });
});

updateCarousel(currentIndex);

document.getElementById("Botao").addEventListener("click", function() {
  const btn = this;
  btn.classList.remove("heartbeat-normal"); 
  void btn.offsetWidth;
  btn.classList.add("heartbeat-normal");
});


