/* eslint-disable no-unused-vars */
function capitalize(word) {
  for (var i = 0; i < word.length; i++) {
    if (i === 0) {
      word += word[i].toUpperCase();
    }
  }
  return word;
}
