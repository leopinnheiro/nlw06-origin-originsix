const nav = document.querySelector('#header nav');
const toggle = document.querySelectorAll('nav .toggle');

// Comportamento para exibição ou ocultação do menu
for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show');
  });
}

// Comportamento ao clicar em uma opção do menu, esconder o menu hamburguer
const links = document.querySelectorAll('nav .menu ul li a');
for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show');
  });
}

// Adicionar classe ao header no momento em que for dado scroll na pagina
const header = document.querySelector('#header');
const navHeight = header.offsetHeight;

window.addEventListener('scroll', function () {
  if (window.scrollY >= navHeight) {
    header.classList.add('scroll');
  } else {
    header.classList.remove('scroll');
  }
});

/* Testimonials carousel slider - swiper*/
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true
});

/* ScrollReveal: Mostrar elementos gradativamente ao rolar a pagina*/
const scrollReveal = new ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 1000,
  reset: true
});

scrollReveal.reveal(
  `#home .text, #home .image,
  #about .image, #about .text,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials,
  #contact .text, #contact .links
  `,
  { interval: 200 }
);
