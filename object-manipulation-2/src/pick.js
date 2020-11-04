/* eslint-disable no-unused-vars */
function pick(source, keys) {
  var newObj = {};
  for (var key in source) {
    if (source[key] !== undefined) {
      if (keys.includes(key)) {
        newObj[key] = source[key];
      }
    }
  }
  return newObj;
}
