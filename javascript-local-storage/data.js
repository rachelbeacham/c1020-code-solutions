/* exported todos */

var todos = [];
var previousTodosJson = localStorage.getItem('javascript-local-storage');
todos = JSON.parse(previousTodosJson);
window.addEventListener('beforeunload', function (e) {
  var todosJson = JSON.stringify(todos);
  localStorage.setItem('javascript-local-storage', todosJson);
});
