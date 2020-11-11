/* eslint-disable no-unused-vars */
function capitalizeWord(word) {
  if (word.length < 4) {
    var firstLetter = word[0].toUpperCase();
    var rest = word.substring(1).toLowerCase();
    word = firstLetter + rest;
    return word;
  } else {
    var j = word[0].toUpperCase();
    var middle = word.substring(1, 4).toLowerCase();
    var s = word[4].toUpperCase();
    var end = word.substring(5).toLowerCase();
    word = j + middle + s + end;
    return word;
  }
}
