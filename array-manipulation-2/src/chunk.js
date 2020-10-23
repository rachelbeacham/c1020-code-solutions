/* eslint-disable no-unused-vars */
function chunk(array, size) {
  var newArray = [];
  debugger;
  for (var i = 0; i < array.length; i = i + size) {
    var section = array.slice(i, i + size);
    newArray.push(section);
  }
  return newArray;
}
