const nav = document.querySelector('#header nav');
const toggle = document.querySelectorAll('nav .toggle');

// Comportamento para exibição ou ocultação do menu
for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show');
  });
}

const links = document.querySelectorAll('nav .menu ul li a');

// Comportamento ao clicar em uma opção do menu, esconder o menu hamburguer
for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show');
  });
}
