const startB = document.querySelector('[data-start]');
const stopB = document.querySelector('[data-stop]');
const bodyF = document.querySelector('body');

let timeId = null;

startB.addEventListener('click', onStart);
stopB.addEventListener('click', onStop);


function changeBackgroundColor() {
    document.body.style.backgroundColor = getRandomHexColor();
}

function onStart() {
    timerId = setInterval(changeBackgroundColor, 1000);
    startB.setAttribute('disabled', true);
    stopB.removeAttribute('disabled');
}

function onStop() {
    clearInterval(timerId);
    startB.removeAttribute('disabled');
    stopB.setAttribute('disabled', true);
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}