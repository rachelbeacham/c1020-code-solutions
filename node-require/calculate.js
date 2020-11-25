/* eslint-disable no-console */
const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');

function parse() {
  let firstNum = process.argv[2];
  const operator = process.argv[3];
  let secondNum = process.argv[4];
  firstNum = parseInt(firstNum);
  secondNum = parseInt(secondNum);
  if (operator === 'plus') {
    console.log('result: ', add(firstNum, secondNum));
  } else if (operator === 'minus') {
    console.log('result: ', subtract(firstNum, secondNum));
  } else if (operator === 'times') {
    console.log('result: ', multiply(firstNum, secondNum));
  } else if (operator === 'over') {
    console.log('result: ', divide(firstNum, secondNum));
  }
}
parse();
