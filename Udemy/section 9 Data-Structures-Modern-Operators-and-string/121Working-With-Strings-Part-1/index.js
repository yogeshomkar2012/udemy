"use strict";

const airline = "TAP Air Portugal";
const plane = "A320";
console.log(plane[0]);
console.log(plane[2]);
console.log(plane[3]);
console.log("B717"[0]);
console.log(airline.length);
console.log("B717".length);
console.log(`to find postion of string or array`);
/** case sencitive */
console.log(airline.indexOf("a"));
console.log(airline.lastIndexOf("g"));
console.log(airline.slice(0, airline.indexOf(" ")));
console.log(airline.slice(airline.lastIndexOf(" ") + 1));
const checkMiddleSeat = function (seat) {
  // B and C are midle seat
  //   console.log(seat);
  const s = seat.slice(-1);
  const str = `You Got`;
  const ss = s === "B" || s === "E" ? `${str} Middle Seat` : `${str} Lucky`;
  console.log(ss);
};
checkMiddleSeat("11B");
checkMiddleSeat("23C");
checkMiddleSeat("3E");