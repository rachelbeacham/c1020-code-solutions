/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro
 */

function isUnderFive(number) {
  if (number < 5) {
    return true;
  } else {
    return false;
  }
}

function isEven(number) {
  if ((number % 2) === 0) {
    return true;
  } else {
    return false;
  }
}

function startsWithJ(string) {
  if (string[0] === 'J') {
    return true;
  } else {
    return false;
  }
}

function isOldEnoughToDrink(person, name, age) {
  if (person.age >= 21) {
    return true;
  } else {
    return false;
  }
}

function isOldEnoughToDrive(person, name, age) {
  if (person.age >= 16) {
    return true;
  } else {
    return false;
  }
}

function isOldEnoughToDrinkAndDrive(person, name, age) {
  if (person.age >= 0) {
    return false;
  }
}

function categorizeAcidity(pH) {
  if ((pH <= 6) && (pH >= 0)) {
    return ('acid');
  } if ((pH <= 14) && (pH >= 8)) {
    return ('base');
  } if (pH === 7) {
    return ('neutral');
  } else {
    return ('invalid pH level');
  }
}

function introduceWarnerBro(name) {
  if ((name === 'yakko') || (name === 'wakko')) {
    return ("We're the warner brothers!");
  } if (name === 'dot') {
    return ("I'm cute~");
  } else {
    return ('Goodnight everybody!');
  }
}
