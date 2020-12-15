const fetchResponse = fetch('https://jsonplaceholder.typicode.com/users');
fetchResponse
  .then(response => response.json())
  .then(data => console.log(data));

fetch('https://pokeapi.co/api/v2/pokemon/pikachu', { method: 'GET' })
  .then(response => response.json())
  .then(data => console.log(data));
