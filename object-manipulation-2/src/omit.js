/* eslint-disable no-unused-vars */
function omit(source, keys) {
  debugger;
  var newObj = {};
  for (var key in source) {
    for (var i = 0; i < keys.length; i++) {
      if (keys[i] === key) {
        break;
      } else if (keys[i] !== key) {
        newObj[key] = source[key];

      }
    }
  } return newObj;

}
