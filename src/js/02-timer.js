import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const dateInp = document.querySelector('input#datetime-picker');
const startBut = document.querySelector('[data-start]');
const fieldDay = document.querySelector('[data-days]');
const fieldHour = document.querySelector('[data-hours]');
const fieldMinute = document.querySelector('[data-minutes]');
const fieldSecond = document.querySelector('[data-secondes]');

let timeId = null;
let selectedDate = null;
let currentDate = null;

startBut.disabled = true;
startBut.addEventListener('click', onStart);

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,

    onClose(selectedDates) {
        if (selectedDates[0].getTime() < Date.now()) {
            return Notify.failure('Please choose a future date!');
        } else {
            selectedDate = selectedDates[0].getTime();
            startBut.disabled = false;
        }
    },
  };

  const flatp = flatpickr(dateInp, options); 

function onStart() {
    counter.start();
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

const counter = {
  start() {
    timeId = setInterval(() => {
      currentDate = Date.now();
      const deltaTime = selectedDate - currentDate;
      updateTimerface(convertMs(deltaTime));
      startBut.disabled = true;
      dateInp.disabled = true;

      if (deltaTime <= 1000) {
        this.stop();
        Report.info(
          'Time end'
        );
      }
    }, 1000);
  },

  stop() {
    startBut.disabled = true;
    dateInp.disabled = false;
    clearInterval(timeId);
    return;
  },
};

function updateTimerface({ days, hours, minutes, seconds }) {
  fieldDay.textContent = `${days}`;
  fieldHour.textContent = `${hours}`;
  fieldMinute.textContent = `${minutes}`;
  fieldSecond.textContent = `${seconds}`;
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}