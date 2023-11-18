"use strict";

//Fonctions
// function logger() {
//   console.log("hi Yogesh");
// }
// logger();

// function juiceProcessor(apple, orange) {
//   // console.log(apple,orange);
//   const juice = `juice with ${apple}, and juice with ${orange}`;
//   return juice;
// }
// console.log(juiceProcessor(5, 0));
// console.log(juiceProcessor(5, 6));
// const calcAverage = (a, b, c) => (a + b + c) / 3;

// const avgDolphins = calcAverage(88, 46, 142).toFixed(2);
// const avgKoalas = calcAverage(30.5, 27, 24.5).toFixed(2);

// const checkWinner = function (avgDolphins, avgKoalas) {
//   if (avgDolphins >= 2 * avgKoalas) {
//     return `Dolphins win the match  ${avgDolphins} vs ${avgKoalas}`;
//   } else if (avgKoalas >= 2 * avgDolphins) {
//     return `Koalas win the match  ${avgKoalas} vs ${avgDolphins}`;
//   } else {
//     return `No One Win....... `;
//   }
// };

// console.log(checkWinner(avgDolphins, avgKoalas));
// console.log(`Dolphins ${avgDolphins}`);
// console.log(`Kolas ${avgKoalas}`);

/*Object methods */

// const yogesh = {
//   firstName: "yogesh",
//   lastName: "hv",
//   birthYear: 1984,
//   job: "teacher",
//   hasDrivingLicense: true,
//   drAmt: 3000,
//   crAmt: 20000,
//   calcAge: function () {
//     return 2023 - this.birthYear;
//   },

//   amtCal: function () {
//     if (this.drAmt > this.crAmt) {
//       return `your Debit Balance is ${this.drAmt - this.crAmt}`;
//     } else {
//       return `your Credit Balance is ${this.crAmt - this.drAmt}`;
//     }
//   },
// };

// console.log(yogesh.calcAge());
// console.log(yogesh.amtCal());

/*Object methods */

/* Loops */
// const yogesh = ["yogsh", "hv", 2023 - 1984, "teacher", ["sham", "suman"]];
// for (let i = 0; i <= yogesh.length; i++) {
//   console.log(yogesh[i].findIndex(i));
// }
// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//   ages.push(2037 - years[i]);
// }
// console.log(ages);
// for (let i = 1; i < 5; i++) {
//   console.log(i);
//   for (let j = 1; j <= i; j++) {
//     console.log(`* ${j}`);
//   }
// }
/* Loops */
// console.log(document.querySelector(".message").textContent);

// console.log((document.querySelector(".message").textContent = "gussed"));

// const checkHandler = function () {
//   console.log(document.querySelector(".guess").value);
// };
// document.querySelector(".check").addEventListener("click", checkHandler);

let secreNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector(".numbers").textContent = secreNumber;

let score = 20;
let heighScore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const gussedNumber = Number(document.querySelector(".guess").value);

  if (!gussedNumber) {
    // document.querySelector(".message").textContent = "Invalid Number try Again";
    displayMessage("Invalid Number try Again");
  } else if (gussedNumber === secreNumber) {
    document.querySelector(".number").textContent = secreNumber;
    displayMessage("Currect Number");
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "10rem";
    if (score > heighScore) {
      heighScore = score;
      document.querySelector(".highscore").textContent = heighScore;
    }
  } else if (gussedNumber !== secreNumber) {
    if (score > 1) {
      displayMessage(gussedNumber > secreNumber ? "Too Heigh" : "Too Low");
      // document.querySelector(".message").textContent =
      //   gussedNumber > secreNumber ? "Too Heigh" : "Too Low";
      score = score - 1;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("You Lost The Game");
      document.querySelector(".score").textContent = score;
    }
  }
  //  else if (gussedNumber > secreNumber) {
  //   if (score > 1) {
  //     document.querySelector(".message").textContent = "Too Heigh";
  //     score = score - 1;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent = "You Lost The Game";
  //     document.querySelector(".score").textContent = score;
  //   }
  // } else if (gussedNumber < secreNumber) {
  //   if (score > 1) {
  //     document.querySelector(".message").textContent = "Too Low";
  //     score = score - 1;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent = "You Lost The Game";
  //     document.querySelector(".score").textContent = score;
  //   }
  // }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secreNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".numbers").textContent = secreNumber;
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
