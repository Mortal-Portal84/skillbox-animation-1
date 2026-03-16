const header = document.querySelector('.header')
const burgerBtn = document.querySelector('.header__burger')
const headerMenu = document.querySelector('.header__menu')

burgerBtn.addEventListener('click', () => {
  header.classList.toggle('header--open')
  headerMenu.classList.toggle('header__menu--opened')
  document.body.classList.toggle('scroll-lock')
})