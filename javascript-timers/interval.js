var $heading = document.querySelector('h1');

var interval = setInterval(intervalFunction, 1000);

function intervalFunction() {
  $heading.textContent--;
  if ($heading.textContent === '0') {
    $heading.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(interval);
  }
}
