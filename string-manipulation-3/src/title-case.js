/* eslint-disable no-unused-vars */
function titleCase(title) {
  var titleArray = title.split(' ');
  var newArray = [];
  var newIndividuals = [];
  for (var i = 0; i < titleArray.length; i++) {
    var current = titleArray[i];
    if (current.length >= 4) {
      if (current === 'javascript' || current === 'Javascript:' || current === 'javascript:') {
        var j = current[0].toUpperCase();
        var middle = current.substring(1, 4).toLowerCase();
        var s = current[4].toUpperCase();
        var end = current.substring(5).toLowerCase();
        current = j + middle + s + end;
        newArray.push(current);
      } else {
        var firstLetter = current[0].toUpperCase();
        var rest = current.substring(1);
        var word = firstLetter + rest;
        newArray.push(word);
      }
    } else if (current === 'api') {
      current = current.toUpperCase();
      newArray.push(current);
    } else if (current === 'web') {
      current = current[0].toUpperCase() + current[1] + current[2];
      newArray.push(current);
    } else {
      newArray.push(current);
    }
  }
  var newString = newArray.join(' ');
  var individuals = newString.split('');
  for (var x = 0; x < individuals.length; x++) {
    if (individuals[x] === ':') {
      var upperCased = individuals[x + 2].toUpperCase();
      newIndividuals.push(individuals[x] + ' ' + upperCased);
      x += 3;
    }
    if (individuals[x] === '-') {
      var capital = individuals[x + 1].toUpperCase();
      newIndividuals.push(individuals[x] + capital);
      x += 1;
    } else {
      newIndividuals.push(individuals[x]);
    }
  }
  var finalString = newIndividuals.join('');
  return finalString;
}
