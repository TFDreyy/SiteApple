// Seleciona todos os elementos com a classe "faq-item"
const itensFaq = document.querySelectorAll('.faq-item');

// Para cada item, adiciona um evento de clique
itensFaq.forEach((item) => {
  item.addEventListener('click', () => {
    // Se já estiver ativo, desativa
    if (item.classList.contains('active')) {
      item.classList.remove('active');
    } else {
      // Desativa todos os outros e ativa o clicado
      itensFaq.forEach((el) => el.classList.remove('active'));
      item.classList.add('active');
    }
  });
});