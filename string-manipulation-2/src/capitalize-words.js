/* eslint-disable no-unused-vars */
function capitalizeWords(string) {
  debugger;
  var firstChar = string[0].toUpperCase();
  var lowerChar = '';
  for (var i = 1; i < string.length; i++) {
    if (string[i] === ' ') {
      var newWordChar = string[i + 1].toUpperCase();
    } else {
      lowerChar += string[i].toLowerCase();
    }

  }
  string = firstChar + lowerChar + newWordChar + lowerChar;
  return string;
}
