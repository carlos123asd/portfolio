const word = document.getElementById('wordChallengeAnimation');
const icon = document.getElementById('iconHello');
word.addEventListener('click', () => {
    icon.classList.toggle('animationHello');
    setTimeout(() => {
        icon.classList.remove('animationHello')
    },3000)
});