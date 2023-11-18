"use strict";
const lufthansa = {
  airline: "Lufthansa",
  iatacode: "LH",
  booking: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iatacode}${flightNum}`
    );
    this.booking.push({
      flight: `${this.iatacode}${flightNum}`,
      name: name,
    });
  },
};
const eurowings = {
  airline: "eurowings",
  iatacode: "EW",
  booking: [],
};
//Bind Method not immideatly invoke but return a function
const book = lufthansa.book;
const bookEW = book.bind(eurowings);
bookEW(25, "BindMethod");

const bookLufthasa = book.bind(lufthansa);
bookLufthasa(26, "lufthansa");
const bookLufthansa = book.bind(lufthansa, 27);
bookLufthansa("rama");

console.log(lufthansa);
console.log(eurowings);
//with event Listner
console.log(lufthansa);
lufthansa.planes = 23;
lufthansa.buyPlane = function () {
  this.planes++;
  console.log(this.planes);
};
// lufthansa.buyPlane();
document
  .querySelector(".buy")
  .addEventListener("click", lufthansa.buyPlane.bind(lufthansa));

// partial Application
const addTax = function (rate, value) {
  const rateIndecimal = rate / 100;
  return value + value * rateIndecimal;
};
const addVat = addTax.bind(null, 24);
console.log(addVat(100));
console.log(addVat(23));
console.log(addTax(10, 100));

const addTaxRate = function (rate) {
  return function (value) {
    const rateIndecimal = rate / 100;
    return value + value * rateIndecimal;
  };
};
const addVat2 = addTaxRate(23);
console.log(addVat2(100));
console.log(addVat2(200));
