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

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').textContent = 'Please Enter A Number';
  }
});




