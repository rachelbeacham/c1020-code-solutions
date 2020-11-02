/* eslint-disable no-unused-vars */
function omit(source, keys) {
  debugger;
  var newObj = {};
  for (var i = 0; i < keys.length; i++) {
    for (var key in source) {
      if (keys[i] !== key) {
        newObj[key] = source[key];
      }
    }
  }
  return newObj;
}
