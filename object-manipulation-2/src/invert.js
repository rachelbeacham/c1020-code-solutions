/* eslint-disable no-unused-vars */
function invert(source) {
  var newObj = {};
  for (var key in source) {
    var value = source[key];
    newObj[value] = key;
  }
  return newObj;
}
