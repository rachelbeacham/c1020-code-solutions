var $image = document.querySelectorAll('.image');
var $progressIndicators = document.querySelector('.progress-indicators');
var $circles = document.querySelectorAll('.circle');
var $leftArrow = document.querySelector('.left');
var $rightArrow = document.querySelector('.right');
var position = 0;

var interval = setInterval(rotate, 3000);

$progressIndicators.addEventListener('click', function (e) {
  var view = e.target.dataset.view;
  updateImage(view);
});

$rightArrow.addEventListener('click', rotate);

$leftArrow.addEventListener('click', function () {
  position--;
  updateImage(position);
  if (position === -1) {
    updateImage('4');
  }
});

function rotate() {
  position++;
  updateImage(position);
  if (position === 5) {
    updateImage('0');
  }
}

function updateImage(currentValue) {
  var i = parseInt(currentValue);
  for (var j = 0; j < $image.length; j++) {
    $image[j].className = 'image hidden';
    $circles[j].className = 'far fa-circle circle';
    if (j === i) {
      $image[j].className = 'image';
      $circles[j].className = 'far fa-circle circle current';
    }
  }
  position = i;
}
