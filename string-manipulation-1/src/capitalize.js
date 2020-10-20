/* eslint-disable no-unused-vars */
function capitalize(word) {
  var firstLetter = word[0].toUpperCase();
  var rest = word.substring(1);
  word = firstLetter + rest.toLowerCase();
  return word;
}
