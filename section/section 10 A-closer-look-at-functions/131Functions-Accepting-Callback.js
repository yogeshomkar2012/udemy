"use strict";
//value function

// console.log(oneWord);
const oneWord = (str) => {
  return str.replace(/ /g, "").toLowerCase();
};
// upperCasefunction
const upperFirstWord = (str) => {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};

//Higher-order function
const transformer = function (str, fn) {
  console.log(`original String :${str}`);
  console.log(`transformed string : ${fn(str)}`);
  console.log(`transformed by : ${fn.name}`);
};
transformer("JavaScript is the best!", upperFirstWord);
transformer("JavaScript is the best!", oneWord);
 