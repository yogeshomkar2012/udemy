"use strict";

const secureBooking = () => {
  let passengerCount = 0;
  return () => {
    passengerCount++;
    console.log(`${passengerCount}`);
  };
};

const booker = secureBooking(); // finshed execution;
booker();
console.dir(secureBooking);
