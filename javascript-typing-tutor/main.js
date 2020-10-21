var letter = document.querySelectorAll('span');
var body = document.querySelector('body');

body.addEventListener('keydown', function (event) {
  var charEntered = event.key;
  console.log(charEntered);

  if (charEntered === letter) {
    letter.className = 'correct';
  }
});
