/* exported countdown */
function countdown(number) {
  var numbers = [];
  var currentNumber = number;
  while (currentNumber >= 0) {
    numbers.push(currentNumber);
    currentNumber--;
  }
  return numbers;
}
