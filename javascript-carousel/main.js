var $image = document.querySelectorAll('.image');
var $progressIndicators = document.querySelector('.progress-indicators');
var $circles = document.querySelectorAll('.circle');
var $leftArrow = document.querySelector('.left');
var $rightArrow = document.querySelector('.right');
var position = 0;

var interval = setInterval(rotate, 3000);

$progressIndicators.addEventListener('click', function (e) {
  var view = parseInt(e.target.dataset.view);
  position = view;
  updateImage(view);
});

$rightArrow.addEventListener('click', rotate);

$leftArrow.addEventListener('click', function () {
  if (position === 0) {
    position = $image.length - 1;
  } else {
    position--;
  }
  updateImage(position);
});

function rotate() {
  if (position === $image.length - 1) {
    position = 0;
  } else {
    position++;
  }
  updateImage(position);
}

function updateImage(currentValue) {
  for (var i = 0; i < $image.length; i++) {
    $image[i].className = 'image hidden';
    $circles[i].className = 'far fa-circle circle';
    if (i === currentValue) {
      $image[i].className = 'image';
      $circles[i].className = 'far fa-circle circle current';
    }
  }
}
