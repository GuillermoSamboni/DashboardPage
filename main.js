
const btn_Menu = document.querySelector('.btn-menu');

btn_Menu.addEventListener('click', () => {
    document.querySelector('.ds-left-menu').classList.toggle('menu-active');
    document.querySelector('.ds-panel').classList.toggle('tab-menu')
})

