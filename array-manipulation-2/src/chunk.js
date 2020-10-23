/* eslint-disable no-unused-vars */
function chunk(array, size) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    var section = array.slice(0, size);
    var section2 = array.slice(-size);

  }
  newArray.push(section);
  newArray.push(section2);
  return newArray;
}
