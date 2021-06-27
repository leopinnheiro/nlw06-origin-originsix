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

function changeHeaderWhenScroll() {
  if (window.scrollY >= navHeight) {
    header.classList.add('scroll');
  } else {
    header.classList.remove('scroll');
  }
}

/* Testimonials carousel slider - swiper*/
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  },
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  }
});

// ScrollReveal: Mostrar elementos gradativamente ao rolar a pagina
const scrollReveal = new ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
});

scrollReveal.reveal(
  `#home .text, #home .image,
  #about .image, #about .text,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials,
  #contact .text, #contact .links,
  footer .brand, footer .social
  `,
  { interval: 150 }
);

// Botão de voltar para o topo
const backToTopButton = document.querySelector('.back-to-top');
function backToTop() {
  if (window.scrollY >= 560) {
    backToTopButton.classList.add('show');
  } else {
    backToTopButton.classList.remove('show');
  }
}

/*Menu ativo conforme seção visivel na página*/
const sections = document.querySelectorAll('main section[id]');
function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4;

  for (const section of sections) {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');

    const checkpointStart = checkpoint >= sectionTop;
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight;

    const currentSection = document.querySelector(
      `nav ul li a[href*=${sectionId}]`
    );

    if (checkpointStart && checkpointEnd) {
      currentSection.classList.add('active');
    } else {
      currentSection.classList.remove('active');
    }
  }
}

// Listener scroll
window.addEventListener('scroll', function () {
  changeHeaderWhenScroll();
  backToTop();
  activateMenuAtCurrentSection();
});

// Controle de componente para alterar cores de interface
const hueCssVariable = '--hue';
const sliderHue = document.getElementById('slide-hue');
// Seta o valor inicial da variavel do CSS
sliderHue.value = getComputedStyle(document.documentElement).getPropertyValue(
  hueCssVariable
);

sliderHue.addEventListener('input', function () {
  const sliderValue = sliderHue.value;
  changeCssVariable(hueCssVariable, sliderValue);
});

function changeCssVariable(variable, value) {
  document.documentElement.style.setProperty(variable, value);
}

// Rave
const raveButton = document.querySelector('div.rave-button');
var raveInterval;
raveButton.addEventListener('click', function () {
  raveButton.classList.toggle('playing');

  if (raveButton.classList.contains('playing')) {
    raveInterval = setInterval(function () {
      const hue = Math.floor(Math.random() * 360);
      changeCssVariable(hueCssVariable, hue);
    }, 100);
  } else {
    clearInterval(raveInterval);
  }
});
