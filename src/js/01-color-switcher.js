const startB = document.querySelector('[data-start]');
const stopB = document.querySelector('[data-stop]');

let intervalid;

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

function changeBackgroundColor() {
    document.body.style.backgroundColor = getRandomHexColor();
}

startB.addEventListener('click', () => {
    if (intervalid)
    return;
    intervalid = setInterval(changeBackgroundColor, 1000);
});

stopB.addEventListener('click', () => {
    clearInterval(intervalid);
});