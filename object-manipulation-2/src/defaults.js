/* eslint-disable no-unused-vars */
function defaults(target, source) {
  for (var property in source) {
    target[property] = source[property];
  }
  console.log(target);
}
