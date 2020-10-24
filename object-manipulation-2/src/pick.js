/* eslint-disable no-unused-vars */
function pick(source, keys) {
  var newObj = {};
  for (var key in source) {
    for (var i = 0; i < keys.length; i++) {
      if (keys[i] === key) {
        newObj[keys[i]] = source.key;
      }
    }
  }
  return newObj;
}
