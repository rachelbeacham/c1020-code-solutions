var $openButton = document.querySelector('.open');
var $surveyQuestion = document.querySelector('.modal');
var $noButton = document.querySelector('.survey');

$openButton.addEventListener('click', function () {
  $surveyQuestion.className = 'active';
});
$noButton.addEventListener('click', function () {
  $surveyQuestion.className = 'modal';

});
