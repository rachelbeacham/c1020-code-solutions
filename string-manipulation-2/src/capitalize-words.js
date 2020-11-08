/* eslint-disable no-unused-vars */
function capitalizeWords(string) {
  var firstChar = string[0].toUpperCase();
  var phrase = '';
  for (var i = 1; i < string.length; i++) {
    phrase += string[i].toLowerCase();
    if (string[i] === ' ') {
      phrase += string[i + 1].toUpperCase();
      i++;
    }
  }
  return firstChar + phrase;
}
