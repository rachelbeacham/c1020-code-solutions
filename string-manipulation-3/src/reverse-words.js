/* eslint-disable no-unused-vars */
function reverseWords(string) {
  var stringArray = string.split(' ');
  var reverseString = '';
  for (var i = 0; i < stringArray.length; i++) {
    var current = stringArray[i];
    for (var j = current.length - 1; j >= 0; j--) {
      reverseString += current[j];
      if (i !== stringArray.length - 1 && j === 0) {
        reverseString += ' ';
      }
    }
  }
  return reverseString;
}
