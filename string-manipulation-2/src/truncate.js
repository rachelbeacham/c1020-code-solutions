/* eslint-disable no-unused-vars */
function truncate(length, string) {
  var newString = '';
  if (string.length === 0) {
    return '...';
  }
  if (length > string.length) {
    return string + '...';
  } else {
    for (var i = 0; i < length; i++) {
      newString += string[i];
    }
  }
  return newString + '...';
}
