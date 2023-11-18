"use strict";
const flight = "LH1234";
const passengers = {
  name: "yogesh",
  passport: 12345678912345,
};
const checkIn = (flightNum, passanger) => {
  flightNum = "LH999";
  passanger.name = "Mr. " + passanger.name;
  if (passanger.passport === 12345678912345) {
    // alert("Checked In");
  } else {
    // alert("wrong passport");
  }
  console.log(flightNum, passanger);
};

checkIn(flight, passengers);
console.log(flight);
console.log(passengers);
// is the same as doing...
const flightNum = flight;
const passanger = "rama";

const newPassport = (passengers) => {
  passengers.passport = Math.trunc(Math.random() + 10000000000000);
};
newPassport(passengers);
newPassport(passengers, flight);
