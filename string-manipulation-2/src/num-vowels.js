/* eslint-disable no-unused-vars */
function numVowels(string) {
  var vowels = 0;
  for (var i = 0; i < string.length; i++) {
    if (string[i] === 'a' || string[i] === 'A' || string[i] === 'e' ||
    string[i] === 'E' || string[i] === 'i' || string[i] === 'I' ||
    string[i] === 'o' || string[i] === 'O' || string[i] === 'u' ||
    string[i] === 'U') {
      vowels += 1;
    }
  }
  return vowels;
}
