/* eslint-disable no-unused-vars */
function flatten(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    var current = array[i];
    if (Array.isArray(current) === true) {
      for (var a = 0; a < current.length; a++) {
        newArray.push(current[a]);
      }
    } else {
      newArray.push(current);
    }
  }
  return newArray;
}
