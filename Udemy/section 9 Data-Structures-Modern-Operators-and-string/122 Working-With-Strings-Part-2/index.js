'use strict';
const airline = 'TAP Air Portugal';
//fix capitalization
const passenger = 'YOgesH';
const passengerLowerCase = passenger.toLocaleLowerCase();
const passengerCorrect =
  passengerLowerCase[0].toUpperCase() + passengerLowerCase.slice(1);
console.log(passengerCorrect);

// comparing Email
const registeredEmail = `helloyogseh.io`;
const loginEmail = ` HelloYogseh.io`;
const checkingEmail =
  loginEmail === registeredEmail ? `valid Email` : `invalid email`;
console.log(checkingEmail);
const correctEmail =
  loginEmail.toLocaleLowerCase().trim() === registeredEmail
    ? "email Cheked"
    : "not Checked";
console.log(correctEmail);

// replacing
const priceus = "2020,67$";
const priceIndia = priceus.replace("$","Rs").replace(",", ".");
console.log(priceIndia)
const announcement =
  "All passangers cone to boarding door 23, boarding door 23";
console.log(announcement.replace("door", "gate"));
console.log(announcement.replaceAll("door", "gate"));
// capitaliz of every first letter of a word
let str = "apple banana kiwi";

const capitalized = function (str) {
  const names = str.split(" ");

  for (let n of names) {
    console.log(n[0].toUpperCase() + n.slice(1, n.lastIndexOf()));
  }
};

capitalized(str);