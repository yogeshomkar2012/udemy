'use strict';
// selecting Elements
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//starting Condition
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

//Rolling dice funtionality
let currentScore = 0;
console.log(currentScore);
btnRoll.addEventListener('click', function () {
  // generating random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  // display dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  // check for rolled 1 if true switch next player
  if (dice !== 1) {
    // add dice to current score
    currentScore += dice;
    current0El.textContent = currentScore;
  } else {
    // switch next player
  }
});
