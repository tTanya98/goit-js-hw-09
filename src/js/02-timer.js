import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const startBut = document.querySelector('[data-start]');
const fieldDay = document.querySelector('[data-days]');
const fieldHour = document.querySelector('[data-hours]');
const fieldMinute = document.querySelector('[data-minutes]');
const fieldSecond = document.querySelector('[data-seconds]');

let timeId = null;
startBut.disabled = true;
startBut.addEventListener('click', onStart);

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,

    onClose(selectedDates) {
       const currentDate = new Date();
       if (selectedDates[0] - currentDate > 0) {
        startBut.disabled = false;
       } else {
        startBut.disabled = true;
        Notify.failure('Please, choose a future date');
       }
    },
};

function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    const days = Math.floor(ms / day);
    const hours = Math.floor((ms % day) / hour);
    const minutes = Math.floor(((ms % day) % hour) / minute);
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
} 

function addLeadingZero(value) {
    return String(value).padStart(2, 0);
}

function onStart() {
    const selectedDate = fp.selectedDates[0];
    timeId = setInterval(() => {
        const startTime = new Date();
        const countdown = selectedDate - startTime;
        startBut.disabled = true; 
        if (countdown < 0) {
            clearInterval(timeId);
            return;
        }
        updateTimer(convertMs(countdown));
    }, 1000);
}

function updateTimer({ days, hours, minutes, seconds }) {
  fieldDay.textContent = addLeadingZero(days);
  fieldHour.textContent = addLeadingZero(hours);
  fieldMinute.textContent = addLeadingZero(minutes);
  fieldSecond.textContent = addLeadingZero(seconds);
}
const fp = flatpickr('#datetime-picker', options);