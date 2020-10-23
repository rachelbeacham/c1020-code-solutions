var $letters = document.querySelectorAll('span');
var $body = document.querySelector('body');
var $button = document.querySelector('button');
var $h1 = document.querySelector('h1');
console.log($letters);
var index = 0;
var currentChar = $letters[index];

$body.addEventListener('keydown', function (event) {
  var charEntered = event.key;
  console.log(charEntered);
  if (index === $letters.length - 1) {
    $button.className = 'shown';
    $h1.className = 'hidden';
    return;
  }
  if (charEntered === currentChar.textContent) {
    currentChar.className = 'correct';
    index++;
    currentChar = $letters[index];
    currentChar.className = 'next';
  } else {
    currentChar.className = 'wrong next';
  }
});
