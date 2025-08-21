//efeito do video

window.addEventListener('scroll', function () {
    const img = document.getElementById('imagemHero');
    const scrollY = window.scrollY;
    const scale = Math.max(0.875, 1 - scrollY / 4700);
    const borderRadScale = Math.max(1, 0.75 + scrollY / 5000);

    if (window.innerWidth > 768) {
        img.style.transform = `scale(${scale})`

        if (scrollY > 0) {
            img.style.borderRadius = `${borderRadScale}rem`
        } else {
            img.style.borderRadius = '0'
        }
        
    } else {
        img.style.transform = 'scale(1)'
        img.style.borderRadius = '0'
    }
});
const primeiroitem = document.getElementById('ipad-e-iphone')
primeiroitem.classList.add('active');
const textoCompanheiros = document.querySelectorAll('.texto-companheiros');
const companheiros = document.querySelector('.companheiros')

companheiros.classList.add('ipadIphone');
// efeito do texto dropdown

textoCompanheiros.forEach((texto) => {
  texto.addEventListener('click', () => {
    // se já estiver ativo, desativa
    if (texto.classList.contains('active')) {
      texto.classList.toggle('active');
      companheiros.classList.remove('ipadMac', 'ipadAppleWatch');
    } else {
      // desativa todos os outros e ativa o clicado
      textoCompanheiros.forEach((el) => el.classList.remove('active'));
      texto.classList.toggle('active');

      switch (texto.id) {
        case 'ipad-e-iphone':
          companheiros.classList.remove('ipadMac', 'ipadAppleWatch');
          companheiros.classList.add('ipadIphone');
          break;
      
        case 'ipad-e-mac':
          companheiros.classList.remove('ipadAppleWatch');
          companheiros.classList.add('ipadMac');
          break;
      
        default:
          companheiros.classList.remove('ipadMac');
          companheiros.classList.add('ipadAppleWatch');
          break;
      }
    }
  });
});