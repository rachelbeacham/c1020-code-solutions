function convertMinutesToSeconds(minutes) {
  var seconds = minutes * 60;
  return seconds;
}
var convertMinutesToSecondsResult = convertMinutesToSeconds(10);
console.log('Convert minutes to seconds result:', convertMinutesToSecondsResult);

function greet(name) {
  var greeting = 'Hey' + ' ' + name + '!';
  return greeting;
}
var greetingResult = greet('Rachel');
console.log('Greeting Result:', greetingResult);

function getArea(width, height) {
  var area = width * height;
  return area;
}
var areaResult = getArea(20, 20);
console.log('Area result:', areaResult);

function getFirstName(person) {
  var name = {
    firstName: 'Rachel',
    lastName: 'Beacham'
  };
  return name.firstName;
}
var firstNameResult = getFirstName();
console.log('First Name Result:', firstNameResult);

function getLastElement(array) {
  var dogs = ['Poodle', 'Labrador', 'Golden Retreiver', 'Huskey'];
  var lastIndex = dogs.length - 1;
  var lastDog = dogs[lastIndex];
  return lastDog;
}
var getLastElementResult = getLastElement();
console.log('Last element result:', getLastElementResult);
