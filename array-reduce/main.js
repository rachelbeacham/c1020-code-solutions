/* eslint-disable no-console, no-unused-vars */

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];

const sum = numbers.reduce((initial, current) => {
  initial += current;
  return initial;
});
console.log('Sum:', sum);

const product = numbers.reduce((initial, current) => {
  initial *= current;
  return initial;
});
console.log('Product:', product);

const balance = account.reduce((initial, current) => {
  if (current.type === 'deposit') {
    initial.amount += current.amount;
  } else {
    initial.amount -= current.amount;
  }
  return initial;
});
console.log('Balance:', balance.amount);

const composite = traits.reduce((initial, current) => Object.assign(initial, current));
console.log('Composite:', composite);
