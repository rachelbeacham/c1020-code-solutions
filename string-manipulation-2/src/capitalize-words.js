/* eslint-disable no-unused-vars */
function capitalizeWords(string) {
  debugger;
  var firstChar = string[0].toUpperCase();
  var lowerChar = '';
  for (var i = 1; i < string.length; i++) {
    if (string[i] === ' ') {
      var word = string.substring(1, i).toLowerCase() + string[i + 1].toUpperCase();
    }
  }
  string = firstChar + word;
  return string;
}
