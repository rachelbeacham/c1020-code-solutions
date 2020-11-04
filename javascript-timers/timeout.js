var $heading = document.querySelector('h1');

function timeoutFunction() {
  $heading.textContent = 'Hello there';
}

var timeout = setTimeout(timeoutFunction, 2 * 1000);
