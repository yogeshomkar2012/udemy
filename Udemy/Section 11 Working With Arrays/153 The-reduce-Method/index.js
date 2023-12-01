'use strict';

/////////////////////////////////////////////////
// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');
/////////////////////////////////////////////////

// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

/////////////////////////////////////////////////

const displayMovements = movements => {
  containerMovements.innerHTML = '';
  movements.forEach((mov, i) => {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
    <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } You  ${type}</div>
        <div class="movements__value">${Math.abs(mov)}€</div>
    </div>
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

displayMovements(account1.movements);
const calcdisplayBalance = function (movements) {
  const balance = movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${balance} €`;
  console.log(balance);
};
calcdisplayBalance(account1.movements);
// creating userName
const creatinUserName = function (accs) {
  accs.forEach(acc => {
    acc.userName = acc.owner
      .toLocaleLowerCase()
      .split(' ')
      .map(acc => acc[0])
      .join('');
  });
};
creatinUserName(accounts);

////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [-200, 450, -400, 3000, -650, -130, 70, 1300];
//////////////////////////////////////
// reduce Method
console.log(`<---------using filter Method--------->`);
const balance = movements.reduce(function (acc, cur, i, arr) {
  console.log(`${i} acc -> ${acc} cur -> ${cur} total ${cur + acc}`);
  return cur + acc;
}, 400);
console.log(balance);

console.log(`<---------using for of loop--------->`);
let balanceForOfLoop = 400;
for (const [i, mov] of movements.entries()) {
  console.log(
    `${i} acc -> ${balanceForOfLoop} cur -> ${mov} total ${
      balanceForOfLoop + mov
    }`
  );
  balanceForOfLoop = balanceForOfLoop + mov;
}
console.log(balanceForOfLoop);
/////////////////////////////////////
// filter Method
// console.log(`<---------using filter Method--------->`);
// const transactions = [100, 200, 300, -100, -200, 900, 300, -50];
// const positiveValues = transactions.filter(positive => positive > 0);
// console.log(positiveValues);
// const negitveValues = transactions.filter(positive => positive < 0);
// console.log(negitveValues);
// const deposits = movements.filter(function (mov) {
//   return mov > 0;
// });
// console.log(deposits);
// console.log(`<---------using for loop--------->`);
// const depositsForLoop = [];
// for (let mov of movements) {
//   mov > 0 ? depositsForLoop.push(mov) : '';
// }
// console.log(depositsForLoop);
//////////////////////////////////////
// const eurToUsd = 1.1;
// const movementsUSD = movements.map(function (mov) {
//   return mov * eurToUsd;
// });
// console.log(movementsUSD);
// // console.log(Math.abs(movementsUSD))
// console.log(movements);
// const movementsDecription = movements.map(
//   (mov, i) =>
//     `movement ${i + 1} : You ${mov > 0 ? 'Deposited' : 'Withdrawal'} ${Math.abs(
//       mov
//     )}`
// );
// console.log(movementsDecription);
