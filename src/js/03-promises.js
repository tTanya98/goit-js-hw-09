import { Notify } from 'notiflix/build/notiflix-notify-aio';

const formRef = document.querySelector('.form')

formRef.addEventListener('submit', onSubmitForm); 

function createPromise(position, delay) {
  const obj = { position, delay };
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
    resolve(obj);
      } else {
    reject(obj);
      }
    }, delay);
  });
}

function onSubmitForm(e) {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  const dataParam = {};
  for (const [key, value] of formData.entries()) {
    dataParam[key] = Number(value);
  }
  let { amount, step, delay} = dataParam;
  for (let i = 1; i <= amount; i += 1) {
    delay += step;
  createPromise(i, delay)
  .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });
  }
}
