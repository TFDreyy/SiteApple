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
  const track = document.querySelector(".carousel-track");
  const cards = document.querySelectorAll(".card");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  let index = 0;
  const total = cards.length;

  function updateCarousel() {
    const width = cards[0].offsetWidth;
    track.style.transform = `translateX(-${index * width}px)`;
  }

  nextBtn.addEventListener("click", () => {
    index++;
    if (index >= total) index = 0; // volta ao primeiro
    updateCarousel();
  });

  prevBtn.addEventListener("click", () => {
    index--;
    if (index < 0) index = total - 1; // vai ao último
    updateCarousel();
  });

  window.addEventListener("resize", updateCarousel);
});
  document.addEventListener('DOMContentLoaded', () => {
    const root = document.querySelector('.carousel-escolha');
    if (!root) return;

    const botoes = Array.from(root.querySelectorAll('.carousel-opcoes .opcao'));
    const img = root.querySelector('#carousel-img');

    // função para trocar imagem com fade
    function trocarImagem(novaSrc, botaoClicado) {
      // se já for a mesma src, não faz nada
      if (img.src === (new URL(novaSrc, location.href)).href) {
        // atualiza active mesmo assim
        botoes.forEach(b => b.classList.remove('active'));
        botaoClicado.classList.add('active');
        return;
      }

      // esconder (fade out)
      img.classList.add('hidden');

    
      setTimeout(() => {
        // cria uma imagem temporária para pré-carregar
        const tmp = new Image();
        tmp.onload = () => {
          img.src = novaSrc;        // troca
          // quando a nova terminar de carregar, remove hidden (fade in)
          img.onload = () => {
            img.classList.remove('hidden');
          };
        };
        tmp.onerror = () => {
          // se der erro, volta a mostrar (evita ficar invisível)
          img.classList.remove('hidden');
          console.warn('Erro ao carregar imagem:', novaSrc);
        };
        tmp.src = novaSrc;
      }, 160); // 160ms - deixa a transição inicial ocorrer
    }

    // eventos dos botões
    botoes.forEach(btn => {
      btn.addEventListener('click', () => {
        const nova = btn.getAttribute('data-img');
        if (!nova) return;
        trocarImagem(nova, btn);

        // active visual
        botoes.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      });
    });

    // acessibilidade via teclado (Enter/Espaço)
    botoes.forEach(btn => {
      btn.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          btn.click();
        }
      });
    });
  });
  (function () {
  const root = document.querySelector('.carousel-escolha') || document; // escopo seguro
  const botoes = Array.from(root.querySelectorAll('.carousel-opcoes .opcao'));
  const img = root.querySelector('#carousel-img') || root.querySelector('.carousel-display img');

  if (!botoes.length || !img) return; // nada a fazer se não existirem

  // helper: cria car-conteudo se não existir, usando data-content (se presente)
  function ensureContent(btn) {
    // se já existe um irmão imediato com .car-conteudo, return ele
    const next = btn.nextElementSibling;
    if (next && next.classList && next.classList.contains('car-conteudo')) return next;

    // se tiver data-content, cria a div
    const dataContent = btn.getAttribute('data-content');
    if (dataContent) {
      const div = document.createElement('div');
      div.className = 'car-conteudo';
      div.innerHTML = dataContent;
      btn.parentNode.insertBefore(div, next); // insere após o botão
      return div;
    }

    // se nada disso, retorna null (ok: botão só muda imagem)
    return null;
  }

  // função para abrir um item e fechar os outros
  function openItem(btn) {
    // fechar tudo primeiro
    botoes.forEach(b => {
      b.classList.remove('active');
      b.classList.remove('opcao--has-open');
      const sib = b.nextElementSibling;
      if (sib && sib.classList && sib.classList.contains('car-conteudo')) {
        sib.style.maxHeight = null;
        sib.style.opacity = 0;
        b.parentElement.classList.remove('car-item-open');
      }
    });

    // ativar o botão clicado
    btn.classList.add('active');

    // trocar imagem se tiver data-img
    const nova = btn.getAttribute('data-img');
    if (nova) {
      // fade simples
      img.style.transition = 'opacity .28s';
      img.style.opacity = 0;
      // pré-carrega
      const tmp = new Image();
      tmp.onload = () => {
        img.src = nova;
        img.onload = () => { img.style.opacity = 1; };
      };
      tmp.onerror = () => { img.style.opacity = 1; }; // volta se erro
      tmp.src = nova;
    }

    // abrir conteúdo (se existir ou se for criado por data-content)
    const conteudo = ensureContent(btn);
    if (conteudo) {
      // marca visual no botão
      btn.classList.add('opcao--has-open');
      // marca o pai (útil se quiser estilizar .car-item)
      if (btn.parentElement) btn.parentElement.classList.add('car-item-open');

      // animação de altura (usa scrollHeight)
      requestAnimationFrame(() => {
        conteudo.style.display = 'block';
        const h = conteudo.scrollHeight;
        conteudo.style.maxHeight = h + 'px';
        conteudo.style.opacity = 1;
      });
    }
  }

  // Eventos de clique e teclado
  botoes.forEach(btn => {
    btn.addEventListener('click', (e) => {
      openItem(btn);
    });
    btn.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openItem(btn);
      }
    });
  });

  // opcional: abrir o primeiro por padrão (comentar se não quiser)
  // openItem(botoes[0]);
})();