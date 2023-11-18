"use strict";
let bookigs = [];
const flightBooking = (
  flightNum,
  numPassenger = 1,
  price = 199 * numPassenger
) => {
  const booking = {
    flightNum,
    numPassenger,
    price,
  };
  console.log(booking);
  bookigs.push(booking);
};
console.log(bookigs);
flightBooking("LH123", 4, 199);
flightBooking("LH123", undefined, 100);
