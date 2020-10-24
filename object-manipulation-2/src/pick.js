/* eslint-disable no-unused-vars */
function pick(source, keys) {
  var newObj = {};
  for (var key in source) {
    var value = source[key];
    for (var i = 0; i < keys.length; i++) {
      if (keys[i] === key) {
        var property = [keys[i]];
      }
    }
    newObj[property] = value;
  }
  return newObj;
}
