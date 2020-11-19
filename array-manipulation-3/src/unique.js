/* eslint-disable no-unused-vars */
function unique(array) {
  var newArray = [];
  if (array.length !== 0) {
    newArray.push(array[0]);
    for (var i = 1; i < array.length; i++) {
      if (!newArray.includes(array[i])) {
        newArray.push(array[i]);
      }
    }
    return newArray;
  }
  return newArray;
}
