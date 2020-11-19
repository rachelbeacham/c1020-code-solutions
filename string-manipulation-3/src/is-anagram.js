/* eslint-disable no-unused-vars */
function isAnagram(firstString, secondString) {
  var stringOne = firstString.replaceAll(' ', '').split('').sort().join('');
  var stringTwo = secondString.replaceAll(' ', '').split('').sort().join('');
  return stringOne === stringTwo;
}
