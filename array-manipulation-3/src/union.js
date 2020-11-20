/* eslint-disable no-unused-vars */
function union(first, second) {
  for (var i = 0; i < second.length; i++) {
    if (!first.includes(second[i])) {
      first.push(second[i]);
    }
  }
  return first;
}
