var library = [
  {
    isbn: '9780545582957',
    title: 'Harry Potter and the Goblet of Fire',
    author: 'JK Rowling'
  },
  {
    isbn: '9781524763138',
    title: 'Becoming',
    author: 'Michelle Obama'
  },
  {
    isbn: '9780062316097',
    title: 'Sapiens',
    author: 'Yuval Noah Harari'
  }
];
console.log('value of Library: ', library);
console.log('Typeof Library: ', typeof library);

var jsonString = JSON.stringify(library);
console.log('JSON String: ', jsonString);
console.log('Typeof jsonString: ', typeof jsonString);

var student = '{ "numberId" : "247586", "name": "Rachel" }';
console.log('value of Student:', student);
console.log('typeof Student:', typeof student);

var jsonParse = JSON.parse(student);
console.log('value of jsonParse:', jsonParse);
console.log('typeof jsonParse:', typeof jsonParse);
