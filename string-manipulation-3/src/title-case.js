/* eslint-disable no-unused-vars */
function titleCase(title) {
  var titleArray = title.split(' ');
  var newArray = [];
  for (var i = 0; i < titleArray.length; i++) {
    var current = titleArray[i];
    if (current.length >= 4) {
      if (current === 'javascript' || current === 'javascript:') {
        var j = current[0].toUpperCase();
        var middle = current.substring(1, 4).toLowerCase();
        var s = current[4].toUpperCase();
        var end = current.substring(5).toLowerCase();
        current = j + middle + s + end;
        newArray.push(current);
      } else {
        var firstLetter = current[0].toUpperCase();
        var rest = current.substring(1);
        var word = firstLetter + rest;
        newArray.push(word);
      }
    } else if (current === 'api') {
      current = current.toUpperCase();
      newArray.push(current);
    } else if (current === 'web') {
      current = current[0].toUpperCase() + current[1] + current[2];
      newArray.push(current);
    } else {
      newArray.push(current);
    }
  }
  var newString = newArray.join(' ');
  return newString;
}
