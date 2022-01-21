const menuHamburguer = document.querySelector('.menu-hamburguer');
const navegation = document.querySelector('.navegation');

menuHamburguer.onclick = () => {
    menuHamburguer.classList.toggle('menu-hamburguer--fixed');
    navegation.classList.toggle('navegation--flex');
};