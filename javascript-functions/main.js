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
  var firstName = person.firstName;
  return firstName;
}
var firstNameResult = getFirstName({ firstName: 'Rachel', lastName: 'Beacham' });
console.log('First Name Result:', firstNameResult);

function getLastElement(array) {
  var lastIndex = array.length - 1;
  var lastItem = array[lastIndex];
  return lastItem;
}
var getLastElementResult = getLastElement(['Poodle', 'Labrador', 'Golden Retreiver', 'Huskey']);
console.log('Last element result:', getLastElementResult);
