/* eslint-disable no-unused-vars */
function swapChars(firstIndex, secondIndex, string) {
  var phrase = '';
  for (var i = 0; i < string.length; i++) {
    if (i === firstIndex) {
      phrase += string[secondIndex];
    } else if (i === secondIndex) {
      phrase += string[firstIndex];
    } else {
      phrase += string[i];
    }
  }
  return phrase;
}
