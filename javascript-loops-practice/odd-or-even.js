/* exported oddOrEven */
function oddOrEven(numbers) {
  var newArray = [];
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      newArray.push('even');
    } else if (numbers[i] !== 0) {
      newArray.push('odd');
    }
  }
  return newArray;
}
