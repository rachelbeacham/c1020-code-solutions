const { forwardRef } = require('react');

/* exported getLastElement */

function getLastElement(array) {
  var lastIndex = array.length - 1;
  var lastElement = array[lastIndex];
  return lastElement;
}
