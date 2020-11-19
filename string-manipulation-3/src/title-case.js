/* eslint-disable no-unused-vars */

function titleCase(title) {
  var newArray = [];
  var finalArray = [];
  var titleArray = title.split(' ');
  for (var i = 0; i < titleArray.length; i++) {
    if (isMinorWord(titleArray[i]) === false) {
      newArray.push(capitalizeWord(titleArray[i]));
    } else {
      newArray.push(titleArray[i]);
    }
  }
  for (var n = 0; n < newArray.length; n++) {
    if (isKnownWord(newArray[n]) === true && newArray[n] === 'Javascript:') {
      finalArray.push(capitalizeKnown(newArray[n]) + ' ' + capitalizeWord(newArray[n + 1]));
      n++;
    } else if (isKnownWord(newArray[n]) === true) {
      finalArray.push(capitalizeKnown(newArray[n]));
    } else {
      finalArray.push(newArray[n]);
    }
  }
  return finalArray.join(' ');
}

function isMinorWord(word) {
  if (word.length > 3) {
    return false;
  } else {
    return true;
  }
}

function capitalizeWord(word) {
  var finalArray = [];
  var firstLetter = word[0].toUpperCase();
  var rest = word.substring(1).toLowerCase();
  word = firstLetter + rest;
  var wordArray = word.split('');
  for (var i = 0; i < wordArray.length; i++) {
    if (wordArray[i] === '-') {
      var capital = wordArray[i + 1].toUpperCase();
      finalArray.push(wordArray[i] + capital);
      i += 2;
    }
    finalArray.push(wordArray[i]);
  }
  return finalArray.join('');
}

function isKnownWord(word) {
  if (word === 'Javascript' || word === 'api' || word === 'web' || word === 'Javascript:') {
    return true;
  } else {
    return false;
  }
}

function capitalizeKnown(word) {
  if (word === 'api') {
    word = word.toUpperCase();
  } else if (word === 'web') {
    word = capitalizeWord(word);
  } else {
    var j = word[0].toUpperCase();
    var middle = word.substring(1, 4).toLowerCase();
    var s = word[4].toUpperCase();
    var end = word.substring(5).toLowerCase();
    word = j + middle + s + end;
  }
  return word;
}
