function ExampleConstructor() {

}
console.log('value of ExampleConstructor.prototype:', ExampleConstructor.prototype);
console.log('typeof ExampleConstructor.prototype:', typeof ExampleConstructor.prototype);

var newExample = new ExampleConstructor();
console.log('value of newExample:', newExample);

var instance = (newExample instanceof ExampleConstructor);
console.log('value of instanceOf:', instance);
