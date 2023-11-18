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

///////////////////////////////////////////
//Lecture
const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const arr = [
  [1, 2],
  [3, 4],
  [
    [5, 6],
    [7, 8],
  ],
];
console.log(arr.flat(2));
console.log(arr.flat(Infinity));
const accountMovments = accounts.map((acc) => acc.movements);
const overAllBalance1 = accounts
  .map((acc) => acc.movements)
  .flat(Infinity)
  .reduce((acc, cv) => acc + cv);
console.log(overAllBalance1);

const overAllBalance2 = accounts
  .flatMap((acc) => acc.movements)
  .reduce((acc, cv) => acc + cv);
console.log(overAllBalance2);
