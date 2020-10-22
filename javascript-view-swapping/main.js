var $tabContainer = document.querySelector('.tab-container');
var $tabNodes = document.querySelectorAll('.tab');
var $viewNodes = document.querySelectorAll('.view');

$tabContainer.addEventListener('click', function (e) {
  if (e.target.matches('.tab')) {
    $tabNodes.forEach(
      function (currentValue) {
        if (currentValue === e.target) {
          currentValue.className = 'tab active';
        } else {
          currentValue.className = 'tab';
        }
      }
    );
  }
  var dataValue = e.target.getAttribute('data-view');
  console.log(dataValue);
  console.log($viewNodes);
  $viewNodes.forEach(
    function (currentValue) {
      if (currentValue.attributes[1].nodeValue === dataValue) {
        currentValue.className = 'view';
      } else {
        currentValue.className = 'view hidden';
      }
    }
  );

});
