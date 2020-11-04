/* eslint-disable no-unused-vars */
function ransomCase(string) {
  debugger;
  for (var i = 0; i < string.length; i += 2) {
    string = string[i].toLowerCase() + string[i + 1].toUpperCase();
  }
  return string;
}
