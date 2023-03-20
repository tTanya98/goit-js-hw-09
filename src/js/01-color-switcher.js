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
    // startB.disabled = true;
    // stopB.disabled = false;
    startB.setAttribute('disabled', true);
    stopB.removeAttribute('disabled');
    // startB.toggleAttribute('disabled')
    timeId = setInterval(changeBackgroundColor, 1000);
}

function onStop() {
    // startB.disabled = true;
    // stopB.disabled = false;
    startB.removeAttribute('disabled');
    stopB.setAttribute('disabled', true);
    clearInterval(timerId);
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}