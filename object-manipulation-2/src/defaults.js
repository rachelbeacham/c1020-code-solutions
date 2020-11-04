/* eslint-disable no-unused-vars */
function defaults(target, source) {
  var targetKeys = Object.keys(target);
  for (var property in source) {
    if (!targetKeys.includes(property)) {
      target[property] = source[property];
    }
  }
  console.log(target);
}
