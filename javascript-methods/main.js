var numberOne = 20;
var numberTwo = 13;
var numberThree = 7;
var maximumValue = Math.max(numberOne, numberTwo, numberThree);
console.log('Value of maximumValue:', maximumValue);

var heroes = ['mom', 'deadpool', 'aquaman', 'wolverine'];
var randomNumber = Math.random();
randomNumber *= heroes.length;
var randomIndex = Math.floor(randomNumber);
console.log('Value of randomIndex:', randomIndex);
var randomHero = heroes[randomIndex];
console.log('Value of randomHero:', randomHero);

var library = [
  {
    title: 'Harry Potter',
    author: 'J. K. Rowling'
  },
  {
    title: 'Sapiens',
    author: 'Yuval Noah Harari'
  },
  {
    title: 'Becoming',
    author: 'Michelle Obama'
  }
];

var lastBook = library.pop();
console.log('Value of lastBook:', lastBook);
var firstBook = library.shift();
console.log('Value of firstBook:', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};
library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('Value of library array:', library);

var fullName = 'Rachel Beacham';
var firstAndLastName = fullName.split(' ');
console.log('Value of fristAndLastName:', firstAndLastName);
var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('Value of sayMyName:', sayMyName);
