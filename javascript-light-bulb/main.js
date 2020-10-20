var timesClicked = 0;
var $circle = document.querySelector('.circle');
var $body = document.querySelector('body');

$circle.addEventListener('click', function () {
  timesClicked++;
  if (timesClicked % 2 === 1) {
    $circle.className = 'off';
    $body.className = 'off';
  } else if (timesClicked % 2 === 0) {
    $circle.className = 'on';
    $body.className = 'on';
  }
});
