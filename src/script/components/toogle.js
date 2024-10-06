import es from '../../translate/es.json';
import en from '../../translate/en.json';

const tooglebtn = document.getElementById('toogleBtn');
const flag = document.getElementById('flag1');
const flag2 = document.getElementById('flag2');

//menu
const menu1 = document.getElementById('item11');
const menu2 = document.getElementById('item22');
const menu3 = document.getElementById('item33');
const menu4 = document.getElementById('item44');

const menu11 = document.getElementById('item1');
const menu22 = document.getElementById('item2');
const menu33 = document.getElementById('item3');
const menu44 = document.getElementById('item4');
//parrafos
const pMain = document.getElementById('pMain');
const pproyecto1 = document.getElementById('pproyecto1');
const pproyecto2 = document.getElementById('pproyecto11');
const pproyecto3 = document.getElementById('pproyecto2');
const pproyecto4 = document.getElementById('pproyecto22');
const pproyecto5 = document.getElementById('pproyecto3');
const pproyecto6 = document.getElementById('pproyecto33');
const pproyecto7 = document.getElementById('pproyecto4');
const pproyecto8 = document.getElementById('pproyecto44');
const obj1 = document.getElementById("obj1");
const obj2 = document.getElementById("obj2");
const obj3 = document.getElementById("obj3");
const obj4 = document.getElementById("obj4");
const obj5 = document.getElementById("obj5");
const obj6 = document.getElementById("obj6");
const status = document.getElementById("status");
const btnform = document.getElementById("btnform");
//titulos
const tit1 = document.getElementById('tit1');
const tit2 = document.getElementById('tit2');
const tit3 = document.querySelectorAll("a[data-aos='fade-right']");
const tit4 = document.getElementById("tit4");
const tit5 = document.getElementById("tit5");
const tit6 = document.getElementById("tit6");
const tit7 = document.getElementById("tit7");
const tit8 = document.getElementById("tit8");
const tit9 = document.getElementById("tit9");
const tit10 = document.getElementById("tit10");

tooglebtn.addEventListener('click', () => {
    flag.classList.toggle('toogleEspRight')
    flag2.classList.toggle('toogleEspRight')
    if(flag.classList.contains('toogleEspRight')){
        //spanish
        pMain.innerText = es.parrafos.main;
        menu1.innerHTML = es.menu.item1;
        menu2.innerHTML = es.menu.item2;
        menu3.innerHTML = es.menu.item3;
        menu4.innerHTML = es.menu.item4;
        menu11.innerHTML = es.menu.item1;
        menu22.innerHTML = es.menu.item2;
        menu33.innerHTML = es.menu.item3;
        menu44.innerHTML = es.menu.item4;
        tit1.innerHTML = es.titulos.tit1;
        tit2.innerHTML = es.titulos.tit2;
        for (const tit of tit3) {
            if(tit.style.color === 'rgb(166, 223, 255)'){
                tit.innerHTML = es.titulos.tit4;
            }else if(tit.style.color === 'rgb(199, 255, 235)'){
                tit.innerHTML = es.titulos.tit5;
            }else if(tit.style.color === 'rgb(163, 228, 162)'){
                tit.innerHTML = es.titulos.tit6;
            }else{
                tit.innerHTML = es.titulos.tit3;
            }
            
        }
        pproyecto1.innerHTML = es.parrafos.proyecto1;
        pproyecto2.innerHTML = es.parrafos.proyecto11;
        pproyecto3.innerHTML = es.parrafos.proyecto2;
        pproyecto4.innerHTML = es.parrafos.proyecto22;
        pproyecto5.innerHTML = es.parrafos.proyecto3;
        pproyecto6.innerHTML = es.parrafos.proyecto33;
        pproyecto7.innerHTML = es.parrafos.proyecto4;
        pproyecto8.innerHTML = es.parrafos.proyecto44;
        tit4.innerHTML = es.titulos.tit7;
        tit5.innerHTML = es.titulos.tit8;
        tit6.innerHTML = es.titulos.tit9;
        tit7.innerHTML = es.titulos.tit10;
        tit8.innerHTML = es.titulos.tit11;
        tit9.innerHTML = es.titulos.tit12;
        tit10.innerHTML = es.titulos.tit13;
        obj1.innerHTML = es.parrafos.obj1;
        obj2.innerHTML = es.parrafos.obj2;
        obj3.innerHTML = es.parrafos.obj3;
        obj4.innerHTML = es.parrafos.obj4;
        obj5.innerHTML = es.parrafos.obj5;
        obj6.innerHTML = es.parrafos.obj6;
        status.innerHTML = es.parrafos.status;
        btnform.innerHTML = es.parrafos.btnform;
    }else{
        //english
        pMain.innerText = en.parrafos.main;
        menu1.innerHTML = en.menu.item1;
        menu2.innerHTML = en.menu.item2;
        menu3.innerHTML = en.menu.item3;
        menu4.innerHTML = en.menu.item4;
        menu11.innerHTML = en.menu.item1;
        menu22.innerHTML = en.menu.item2;
        menu33.innerHTML = en.menu.item3;
        menu44.innerHTML = en.menu.item4;
        tit1.innerHTML = en.titulos.tit1;
        tit2.innerHTML = en.titulos.tit2;
        for (const tit of tit3) {
            if(tit.style.color === 'rgb(166, 223, 255)'){
                tit.innerHTML = en.titulos.tit4;
            }else if(tit.style.color === 'rgb(199, 255, 235)'){
                tit.innerHTML = en.titulos.tit5;
            }else if(tit.style.color === 'rgb(163, 228, 162)'){
                tit.innerHTML = en.titulos.tit6;
            }else{
                tit.innerHTML = en.titulos.tit3;
            }
            
        }
        pproyecto1.innerHTML = en.parrafos.proyecto1;
        pproyecto2.innerHTML = en.parrafos.proyecto11;
        pproyecto3.innerHTML = en.parrafos.proyecto2;
        pproyecto4.innerHTML = en.parrafos.proyecto22;
        pproyecto5.innerHTML = en.parrafos.proyecto3;
        pproyecto6.innerHTML = en.parrafos.proyecto33;
        pproyecto7.innerHTML = en.parrafos.proyecto4;
        pproyecto8.innerHTML = en.parrafos.proyecto44;
        tit4.innerHTML = en.titulos.tit7;
        tit5.innerHTML = en.titulos.tit8;
        tit6.innerHTML = en.titulos.tit9;
        tit7.innerHTML = en.titulos.tit10;
        tit8.innerHTML = en.titulos.tit11;
        tit9.innerHTML = en.titulos.tit12;
        tit10.innerHTML = en.titulos.tit13;
        obj1.innerHTML = en.parrafos.obj1;
        obj2.innerHTML = en.parrafos.obj2;
        obj3.innerHTML = en.parrafos.obj3;
        obj4.innerHTML = en.parrafos.obj4;
        obj5.innerHTML = en.parrafos.obj5;
        obj6.innerHTML = en.parrafos.obj6;
        status.innerHTML = en.parrafos.status;
        btnform.innerHTML = en.parrafos.btnform;
    }
});
