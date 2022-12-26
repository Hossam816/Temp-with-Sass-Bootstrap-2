const btnToggle= document.querySelector('.menu-btn');
const mainMenu = document.querySelector('.main-menu')

btnToggle.addEventListener('click', () => {
    mainMenu.classList.toggle('show')
})