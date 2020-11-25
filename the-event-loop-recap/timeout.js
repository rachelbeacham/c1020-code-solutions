/* eslint-disable no-console */
console.log('Hello, just a moment...');
function returnMessage() {
  console.log('Thanks for waiting!');
}
const timeout = setTimeout(returnMessage, 2000);
