'use strict';
/** 
console.log(
  `DOM: DOCUMENT OBJECT MODEL : structured represntation 
    of the html documents. Allows javascript to access 
    html elements and styles to manipulation them`
);
// selecting dom element and assigning to a variable
// const message = document.querySelector('.message');
// console.log(message);
// targeting text content of selected element
// console.log(message.textContent);
// changing(manuplating) text of targeted element
// console.log((message.textContent = 'text content changed'));

console.log(document.querySelector(".message").textContent);
document.querySelector('.number').textContent = 13;
document.querySelector(".score").textContent = 16;
document.querySelector(".guess").value = 16;
console.log(document.querySelector(".guess").value = 16)
*/
const message = document.querySelector('.message');
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let heihScore = 0
document.querySelector('.number').textContent = secretNumber;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // no Value
  if (!guess) {
    message.textContent = 'Please Enter A Number';
    // player is win
  } else if (guess === secretNumber) {
    message.textContent = 'Correct Number';
    document.querySelector('body').style.backgroundColor = 'green';
    if (score > heihScore) {
      heihScore = score;
      document.querySelector(".highscore").textContent = heihScore
    }
    // guess Too Heigh secrate Number
  } else if (guess > secretNumber) {
    if (score > 1) {
      message.textContent = 'Too Heigh';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      message.textContent = 'You Loos the game';
      document.queryS;
      elector('.score').textContent = 0;
    }
    // guess Too Low secrate Number
  } else if (guess < secretNumber) {
    if (score > 1) {
      message.textContent = 'Too Low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      message.textContent = 'You Loos the game';
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  message.textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
});
