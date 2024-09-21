const btnnavMovile = document.getElementById('btnMenuMovile')
btnnavMovile.addEventListener('click', () => {
    const submenu = document.getElementById('barMenu')
    const bloq = document.querySelector('.btnNavMovile__contents__bloq')
    const bloq1 = document.querySelector('.btnNavMovile__contents__bloq:nth-child(1)')
    const bloq2 = document.querySelector('.btnNavMovile__contents__bloq:nth-child(2)')
    const bloq3 = document.querySelector('.btnNavMovile__contents__bloq:nth-child(3)')
    const fondo = document.getElementById('contentMain')
    const { marginBottom } = window.getComputedStyle(bloq, null);
    console.log(marginBottom)
    if(marginBottom === '6.4px'){
        bloq.style.marginBottom = '0'
        bloq1.style.transform = "translate3d(0px, 7px, 45px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(45deg) skew(0deg, 0deg)"
        bloq1.style.transformStyle = "preserve-3d"
        bloq2.style.opacity = "0"
        bloq3.style.transform = "translate3d(0px, -7px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(-45deg) skew(0deg, 0deg)"
        bloq3.style.transformStyle = "preserve-3d"
        submenu.style.display = "block"
        fondo.style.opacity = ".5"
    }else{
        bloq.style.marginBottom = '.4rem'
        bloq1.style.transform = "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)"
        bloq1.style.transformStyle = "preserve-3d"
        bloq2.style.opacity = "1"
        bloq3.style.transform = "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)"
        bloq3.style.transformStyle = "preserve-3d"
        submenu.style.display = "none"
        fondo.style.opacity = "1"
    }
})