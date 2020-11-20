/* eslint-disable no-unused-vars */
function zip(first, second) {
  var newArray = [];
  var coupleArray;
  if (first.length < second.length) {
    for (var f = 0; f < first.length; f++) {
      coupleArray = [];
      coupleArray.push(first[f]);
      coupleArray.push(second[f]);
      newArray.push(coupleArray);
    }
  } else {
    for (var s = 0; s < second.length; s++) {
      coupleArray = [];
      coupleArray.push(first[s]);
      coupleArray.push(second[s]);
      newArray.push(coupleArray);
    }
  }
  return newArray;
}
