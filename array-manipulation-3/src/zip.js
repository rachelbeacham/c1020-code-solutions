/* eslint-disable no-unused-vars */
function zip(first, second) {
  var newArray = [];
  for (var i = 0; i < first.length; i++) {
    for (var s = 0; s < second.length; s++) {
      if (i === s) {
        var coupleArray = [];
        coupleArray.push(first[i]);
        coupleArray.push(second[s]);
        newArray.push(coupleArray);
      }
    }
  }
  return newArray;
}
