/* eslint-disable no-unused-vars, no-console */
const takeAChance = require('./take-a-chance');

const promise = takeAChance('Rachel');

promise.then(value => {
  console.log(value);
});

promise.catch(value => {
  const e = value;
  console.log(e.message);
});
