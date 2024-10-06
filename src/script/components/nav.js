const home = document.getElementById("item1");
const work = document.getElementById("item2");
const training = document.getElementById("item3");
const contact = document.getElementById("item4");
const menu = document.getElementById("barMenu");
const fondo = document.getElementById('contentMain');
const bloq = document.querySelector('.btnNavMovile__contents__bloq');
const bloq1 = document.querySelector('.btnNavMovile__contents__bloq:nth-child(1)');
const bloq2 = document.querySelector('.btnNavMovile__contents__bloq:nth-child(2)');
const bloq3 = document.querySelector('.btnNavMovile__contents__bloq:nth-child(3)');

const close = () => {
    menu.style.display = 'none'
    fondo.style.opacity = "1"
    bloq.style.marginBottom = '.4rem'
    bloq1.style.transform = "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)"
    bloq1.style.transformStyle = "preserve-3d"
    bloq2.style.opacity = "1"
    bloq3.style.transform = "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)"
    bloq3.style.transformStyle = "preserve-3d"
}

home.addEventListener('click', () => {
    if(menu.style.display === 'block'){
        close();
    }
});
work.addEventListener('click', () => {
    if(menu.style.display === 'block'){
        close();
    }
});
training.addEventListener('click', () => {
    if(menu.style.display === 'block'){
        close();
    }
});
contact.addEventListener('click', () => {
    if(menu.style.display === 'block'){
        close();
    }
});