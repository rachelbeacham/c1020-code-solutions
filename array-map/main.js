/* eslint-disable no-console, no-unused-vars */

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const languages = [
  'Hypertext Markup Language',
  'Cascading Style Sheets',
  'ECMAScript',
  'PHP Hypertext Preprocessor',
  'Structured Query Language'
];

const doubled = numbers.map(current => current * 2);
console.log('Numbers Doubled:', doubled);

const prices = numbers.map(current => '$' + current.toFixed(2));
console.log('Numbers to Prices:', prices);

const upperCased = languages.map(current => current.toUpperCase());
console.log('Languages to Upper Case:', upperCased);

const firstLetters = languages.map(current => current[0]);
console.log('First Letters of Languages:', firstLetters);
