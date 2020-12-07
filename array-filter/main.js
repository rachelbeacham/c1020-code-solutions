/* eslint-disable no-unused-vars, no-console */

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const names = [
  'Ada',
  'Hedy',
  'Jean',
  'Grace',
  'Evelyn',
  'Joan',
  'Elizabeth',
  'Janese',
  'Donna'
];

const evenNumbers = numbers.filter(currentValue => currentValue % 2 === 0);
console.log('Even Numbers:', evenNumbers);

const overFive = numbers.filter(currentValue => currentValue > 5);
console.log('Numbers over five:', overFive);

const startWithE = names.filter(currentValue => currentValue[0] === 'E');
console.log('Names that start with E:', startWithE);

const haveD = names.filter(currentValue => currentValue.toLowerCase().includes('d'));
console.log('Names that inculed a D or d:', haveD);
