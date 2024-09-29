import {translate} from '../../translate/lenguaje.js';

const tooglebtn = document.getElementById('toogleBtn');
const flag = document.getElementById('flag1');
const flag2 = document.getElementById('flag2');

//Translate ITEMS
const item1 = document.getElementById("item1");
const item2 = document.getElementById("item2");
const item3 = document.getElementById("item3");
const item4 = document.getElementById("item4");


tooglebtn.addEventListener('click', () => {
    flag.classList.toggle('toogleEspRight')
    flag2.classList.toggle('toogleEspRight')
    if(flag.classList.contains('toogleEspRight')){
        item1.innerHTML = translate.english.menu.item1
        item2.innerHTML = translate.english.menu.item2
        item3.innerHTML = translate.english.menu.item3
        item4.innerHTML = translate.english.menu.item4
    }else{
        

        item1.innerHTML = translate.spanish.menu.item1
        item2.innerHTML = translate.spanish.menu.item2
        item3.innerHTML = translate.spanish.menu.item3
        item4.innerHTML = translate.spanish.menu.item4
    }
});
