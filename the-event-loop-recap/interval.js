/* eslint-disable no-console */
let currentCount = 3;

const interval = setInterval(intervalFunction, 1000);

function intervalFunction() {
  console.log(currentCount--);
  if (currentCount === 0) {
    console.log('Blast off!');
    clearInterval(interval);
  }
}
