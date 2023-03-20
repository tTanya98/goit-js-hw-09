import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const dateInp = document.querySelector('input#datetime-picker');
const startB = document.querySelector('[data-start]');
const fieldDay = document.querySelector('[data-days]');
const fieldHour = document.querySelector('[data-hours]');
const fieldMinute = document.querySelector('[data-minutes]');
const fieldSecond = document.querySelector('[data-second]');

let timeId = null;
let timeDif = 0;
let formatDate = null;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,

    onClose(selectedDates) {
      currentDifferenceDate(selectedDates[0]);
    },
  };

flatpickr(dateInp, options);

startB.addEventListener('click', onStart);

window.addEventListener('keydown', e => {
    if (e.code === 'Escape' && timeId) {
        clearInterval(timeId);
        dateInp.removeAttribute('disabled');
        startB.setAttribute('disabled', true);
        fieldSecond.textContent = '00';
        fieldMinute.textContent = '00';
        fieldHour.textContent = '00';
        fieldDay.textContent = '00';
    }
});

function startB() {
    timeId = setInterval(startTimer, 1000);
}

function currentDifferenceDate(selectedDates) {
    const currentDate = Date.now();
    if (selectedDates < currentDate) {
        startB.setAttribute('disabled', true);
        return Notify.failure('Please choose a future date!');
    }
    timeDif = selectedDates.getTime() - currentDate;
    formatDate = convertMs(timeDif);
    renderDate(formatDate);
    startB.removeAttribute('disabled');
}

function startTimer() {
    startB.setAttribute('disabled', true);
    dateInp.setAttribute('disabled', true);
    timeDif -= 1000;
    if (fieldSecond.textContent <= 0 && fieldMinute.textContent <= 0) {
        Notify.success('Time end');
        clearInterval(timeId);
    } else {
        formatDate = convertMs(timeDif);
        renderDate(formatDate);
    }
}

function renderDate(formatDate) {
    fieldSecond.textContent = formatDate.seconds;
    fieldMinute.textContent = formatDate.minutes;
    fieldHour.textContent = formatDate.hours;
    fieldDay.textContent = formatDate.days;
}