const tooglebtn = document.getElementById('toogleBtn');
const flag = document.getElementById('flag1');
const flag2 = document.getElementById('flag2');




tooglebtn.addEventListener('click', () => {
    flag.classList.toggle('toogleEspRight')
    flag2.classList.toggle('toogleEspRight')
    if(flag.classList.contains('toogleEspRight')){
        //english
    }else{
        //spanish
    }
});
