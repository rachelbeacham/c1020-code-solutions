/* eslint-disable no-unused-vars */

/*
function compact(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] !== false && array[i] !== null && array[i] !== 0 && array[i] !== '' && array[i] !== undefined && typeof array[i] !== isNaN(0)) {
      newArray.push(array[i]);
    }
  } return newArray;
}
*/

function compact(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i]) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
