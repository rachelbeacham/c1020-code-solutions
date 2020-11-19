/* eslint-disable no-unused-vars */
function isPalindromic(string) {
  var reverseString = '';
  for (var i = string.length - 1; i >= 0; i--) {
    reverseString += string[i];
  }
  var stringOne = string.replaceAll(' ', '');
  var stringTwo = reverseString.replaceAll(' ', '');
  return stringOne === stringTwo;
}
