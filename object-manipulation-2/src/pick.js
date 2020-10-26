/* eslint-disable no-unused-vars */
function pick(source, keys) {
  var newObj = {};
  for (var key in source) {
    if (source[key] !== undefined) {
      for (var i = 0; i < keys.length; i++) {
        if (keys[i] === key) {
          var property = [keys[i]];
          newObj[property] = source[key];
        }
      }
    }
  }
  return newObj;
}
