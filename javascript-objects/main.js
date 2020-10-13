/* eslint-disable no-console, no-unused-vars, dot-notation */
var student = {
  firstName: 'Rachel ',
  lastName: 'Beacham',
  age: 25
};
var fullName = student.firstName + student.lastName;
console.log('Value of fullName: ', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'Customer Service';
console.log('Value of student.livesInIrvine: ', student.livesInIrvine);
console.log('Value of student.previousOccupation: ', student.previousOccupation);
console.log('Value of student: ', student);

var vehicle = {
  make: 'Honda',
  model: 'Pilot',
  year: 2006
};
vehicle['color'] = 'blue/green';
vehicle['isConvertable'] = false;
console.log('Value of vehicle["color"]: ', vehicle.color);
console.log('Value of vehicle["isConvertable"]: ', vehicle.isConvertable);
console.log('Value of vehicle: ', vehicle);

var pet = {
  name: 'Patti',
  type: 'dog'
};
delete pet.name;
delete pet.type;
console.log('Value of pet: ', pet);
