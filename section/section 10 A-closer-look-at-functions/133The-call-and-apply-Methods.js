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

// use lufthansa object method
console.log(lufthansa);
lufthansa.book(23, "yogesh");
lufthansa.book(23, "yogesh");
lufthansa.book(23, "yogesh");

console.log(
  ` call() method allows an object to use the method (function) of another object`
);
const eurowings = {
  airline: "eurowings",
  iatacode: "EW",
  booking: [],
};

const book = lufthansa.book;
book.call(eurowings, 24, "eurowings");
const callarr = [24, "euroWingsArr"];
console.log(eurowings);
/////////////---OR---///////////////
book.call(eurowings, ...callarr);
// apply method same as call() but assess only array
const flightData = [25, "applyMethod"];
book.apply(eurowings, flightData);
