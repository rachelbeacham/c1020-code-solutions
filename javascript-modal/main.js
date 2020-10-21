var $openButton = document.querySelector('.open');
var $surveyQuestion = document.querySelector('.hidden');
var $noButton = document.querySelector('.survey');
var $box = document.querySelector('.box');

$openButton.addEventListener('click', function () {
  $surveyQuestion.className = 'active';
  $box.className = 'box modal';
});
$noButton.addEventListener('click', function () {
  $surveyQuestion.className = 'hidden';
  $box.className = 'box';
});
