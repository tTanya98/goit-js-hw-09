import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const dateInp = document.querySelector('#datetime-picker');
const startBut = document.querySelector('[data-start]');
const fieldDay = document.querySelector('[data-days]');
const fieldHour = document.querySelector('[data-hours]');
const fieldMinute = document.querySelector('[data-minutes]');
const fieldSecond = document.querySelector('[data-seconds]');

let timeId = null;
let timeDif = 0;
let formatDate = null;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,

    onClose(selectedDates) {
        console.log(selectedDates[0]);
        currentDifferenceDate(selectedDates[0]);
    },
};
startBut.setAttribute('disabled', true)
flatpickr(dateInp, options); 
startBut.addEventListener('click', onStart);


function onDateCheck(selectedDates) {
    selectedDate = selectedDates[0].getTime();
    currentDate = new Date().getTime();

    if (selectedDate > currentDate) {
        startBut.disabled = false;
        Report.success();
        return;
    }
    Report.failure('Please, choose a future date');
}

function onStart() {
    timeId = setInterval(() => {
        currentDate = new Date().getTime();
        if (selectedDate - currentDate <= 1000) {
            clearInterval(timeId);
            startBut.disabled = true;
            dateInp.disabled = false;
            return;
        } else {
            startBut.disabled = true;
            dateInp.disabked = true;
            currentDate += 1000;
            remainingTime = Math.floor(selectedDate - currentDate);
            convertMs(remainingTime);
        }
}, 1000);
}

function createMarkup({ days, hours, minutes, seconds }) {
  fieldDay.textContent = days;
  fieldHour.textContent = hours;
  fieldMinute.textContent = minutes;
  fieldSecond.textContent = seconds;
}

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