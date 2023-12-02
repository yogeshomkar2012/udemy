"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};
const account5 = {
  owner: "Yogesh Kumar",
  movements: [430, 1000, 700, 50, 90, -10],
  interestRate: 1,
  pin: 1111,
};
const account6 = {
  owner: "Vasu Kumar",
  movements: [430, 1000, 700, 50, 90, -10],
  interestRate: 1,
  pin: 1111,
};

const accounts = [account1, account2, account3, account4, account5, account6];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

// ---------------------------------------------------->
let currentAccount;
btnLogin.addEventListener("click", function (e) {
  e.preventDefault();
  currentAccount = accounts.find(
    (acc) => acc.userName === inputLoginUsername.value
  );
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    //welcome message display ui
    labelWelcome.textContent = `Welcome Back ${
      currentAccount.owner.split(" ")[0]
    }`;
    containerApp.style.opacity = 100;
    //clear fields
    inputLoginUsername.value = inputLoginPin.value = "";

    inputLoginPin.blur();
    //updateUI function
    updateUI(currentAccount);
  }
});

// ---------------------------------------------------->

const displayMovments = (movements) => {
  containerMovements.innerHTML = "";
  movements.forEach((mov, i) => {
    const type = mov > 0 ? "deposit" : "withdrawal";
    const html = `<div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__date">3 days ago</div>
        <div class="movements__value">${Math.abs(mov)} €</div>
      </div>`;
    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

// ---------------------------------------------------->

const updateUI = (acc) => {
  //display movements
  displayMovments(acc.movements);

  //display ballance
  calcDisplayBalance(acc);

  //display summary
  calcDisplaySummary(acc);
};
// ---------------------------------------------------->
const calcDisplayBalance = (acc) => {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance} €`;
};
// ---------------------------------------------------->
const createUserNames = function (accs) {
  accs.forEach((acc) => {
    acc.userName = acc.owner
      .toLocaleLowerCase()
      .split(" ")
      .map((name) => name.charAt(0))
      .join("");
  });
};
createUserNames(accounts);

// ---------------------------------------------------->
const calcDisplaySummary = (acc) => {
  const income = acc.movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${income} €`;

  const out = acc.movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)} €`;

  const interest = acc.movements
    .filter((mov) => mov > 0)
    .map((mov) => (mov * acc.interestRate) / 100)
    .reduce((acc, cul) => acc + cul, 0);
  labelSumInterest.textContent = `${interest.toFixed(2)} €`;
};

// ---------------------------------------------------->

btnTransfer.addEventListener("click", (e) => {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    (acc) => acc.userName === inputTransferTo.value
  );
  inputTransferTo.value = inputTransferAmount.value = "";
  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.userName !== currentAccount.userName
  ) {
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    console.log(amount, receiverAcc, currentAccount.userName);
    updateUI(currentAccount);
  }
});

// ---------------------------------------------------->

btnLoan.addEventListener("click", function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  if (
    amount > 0 &&
    currentAccount.movements.some((mov) => mov >= amount * 0.1)
  ) {
    //add movements
    currentAccount.movements.push(amount);
    // update UI
    updateUI(currentAccount);
  }
});

// ---------------------------------------------------->

btnClose.addEventListener("click", function (e) {
  e.preventDefault();
  if (
    inputCloseUsername.value === currentAccount.userName &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      (acc) => acc.userName === currentAccount.userName
    );
    // console.log(index);
    //delete account
    accounts.splice(index, 1);
    // hide ui
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = "";
});

// ---------------------------------------------------->
////////////////////////////////////
// LECTURES
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
////////////////////////////
console.log(`<---------161 Some and Every Method--------->`);

// check if All Movements are positive
const positiveAllMoves = movements.every((mov) => mov > 0);
console.log(positiveAllMoves)
// check if at least one number is positive
const positiveOneMove = movements.some((mov)=>mov > 0)
console.log(positiveOneMove)


// console.log(`<---------157 The-find-index-Method--------->`);
// const indexs = movements.findIndex(cu => cu === 450);
// console.log(typeof indexs);
// console.log(movements.splice(1, 1));

// console.log(movements);

//////////////////////////////////////

// console.log(`<---------157 The-find-Method--------->`);
// const firstWithdraal = movements.find(mov => mov < 0);
// console.log(firstWithdraal);

// console.log(accounts);
// const account = accounts.find(acc => acc.owner === 'Jessica Davis');
// console.log(account);

//////////////////////////////////////

/* 
Rewrite the 'calcAverageHumanAge' function from the previous 
challenge, but this time as an arrow function, and using 
chaining!

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/
// const calcAverageHumanAge = (ages) =>
//   ages
//     .map((age) => (age <= 2 ? 2 * age : 16 + age * 4))
//     .filter((age) => age >= 18)
//     .reduce((acc, age, i, arr) => acc + age / arr.length, 0);

// const age1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// const age2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
// console.log(age1, age2);
//////////////////////////////////////

// console.log(`<---------155 The-Magic-of-Chaining-Methods--------->`);
// const euroToUsd = 1.1;
// const totalDepositsUSD = movements
//   .filter(mov => mov > 0)
//   .map(mov => mov * euroToUsd)
//   .reduce((acc, cur) => acc + cur, 0);
// console.log(totalDepositsUSD);
// reduce Method
// console.log(`<---------using filter Method--------->`);
// const balance = movements.reduce(function (acc, cur, i, arr) {
//   console.log(`${i} acc -> ${acc} cur -> ${cur} total ${cur + acc}`);
//   return cur + acc;
// }, 400);
// console.log(balance);

// console.log(`<---------using for of loop--------->`);
// let balanceForOfLoop = 400;
// for (const [i, mov] of movements.entries()) {
//   console.log(
//     `${i} acc -> ${balanceForOfLoop} cur -> ${mov} total ${
//       balanceForOfLoop + mov
//     }`
//   );
//   balanceForOfLoop = balanceForOfLoop + mov;
// }
// console.log(balanceForOfLoop);
/////////////////////////////////////////////
// coding Chanllenge
/* 
Let's go back to Julia and Kate's study 
about dogs. This time, they want to convert 
dog ages to human ages and calculate the 
average age of the dogs in their study.

Create a function 'calcAverageHumanAge', 
which accepts an arrays of dog's ages 
('ages'), and does the following things in order:

1. Calculate the dog age in human years using 
the following formula: 
if the dog is <= 2 years old, humanAge = 2 * dogAge. 
If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human 
years old (which is the same as keeping dogs 
    that are at least 18 years old)
3. Calculate the average human age of 
all adult dogs (you should already know 
    from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5,2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

// const calcAverageHumanAge = (ages) => {
//   const humages = ages.map((age) => (age <= 2 ? 2 * age : 16 + age * 4));
//   const adults = humages.filter((age) => age >= 18);
//   const average = adults.reduce((acc, cval) => acc + cval, 0) / adults.length;
//   return average;
// };
// const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
// console.log(avg1, avg2);

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
