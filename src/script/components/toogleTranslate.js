const tooglebtn = document.getElementById('toogleBtn');
const flag = document.getElementById('flag1');
const flag2 = document.getElementById('flag2');
const theme = document.getElementById('toogleTheme');
const themesvg = document.querySelector('#SVGRepo_iconCarrier g');
const contentTheme = document.getElementById('contentToogleTheme');


tooglebtn.addEventListener('click', () => {
    flag.classList.toggle('toogleEspRight')
    flag2.classList.toggle('toogleEspRight')
});

theme.addEventListener('click', () => {
    themesvg.classList.toggle('toogleTheme')
});