/* eslint-disable no-unused-vars */
function difference(first, second) {
  var newArray = [];
  for (var f = 0; f < first.length; f++) {
    if (!second.includes(first[f])) {
      newArray.push(first[f]);
    }
  }
  for (var s = 0; s < second.length; s++) {
    if (!first.includes(second[s])) {
      newArray.push(second[s]);
    }
  }
  return newArray;
}
