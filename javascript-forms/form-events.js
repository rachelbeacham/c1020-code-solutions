function handleFocus(event) {
  console.log('focus event fired');
  console.log('event.target.name: ', event.target.name);
}
function handleBlur(event) {
  console.log('blur event fired');
  console.log('event.target.name:', event.target.name);
}
function handleInput(event) {
  console.log('value of ' + event.target.name + ': ' + event.target.value);
}

var $userName = document.querySelector('#user-name');
var $email = document.querySelector('#user-email');
var $message = document.querySelector('#user-message');

$userName.addEventListener('focus', handleFocus);
$userName.addEventListener('blur', handleBlur);
$userName.addEventListener('input', handleInput);

$email.addEventListener('focus', handleFocus);
$email.addEventListener('blur', handleBlur);
$email.addEventListener('input', handleInput);

$message.addEventListener('focus', handleFocus);
$message.addEventListener('blur', handleBlur);
$message.addEventListener('input', handleInput);
