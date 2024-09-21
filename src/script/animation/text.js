function animation() {
    const letters = [
        ['{','C','o','d','e','}'],
        ['F','u','l','l',' ','S','t','a','c','k','<','>']
                    ]
    const content = document.getElementById('contentAnimationText')
    let iteratorLetter = -1
    let lvl = 0

    function recurcivePaintText(){
        iteratorLetter++
        content.textContent += letters[lvl][iteratorLetter]
        if(iteratorLetter === (letters[lvl].length - 1)){
            clearInterval(interval)
            setTimeout(() => {
                interval = setInterval(() => {
                    content.textContent = ""
                    iteratorLetter--
                    letters[lvl].pop()
                    letters[lvl].forEach((letter) => {
                        content.textContent += letter
                    })

                    if(iteratorLetter < 0){
                        clearInterval(interval)
                        lvl++
                        interval = setInterval(recurcivePaintText,150)
                        if(lvl > letters.length - 1){
                            clearInterval(interval)
                            lvl = 0
                            animation()
                        }
                    }
                },150)
            }, 1000)
        }
    }

    let interval = setInterval(recurcivePaintText, 150)
}

window.addEventListener('load',animation)