// function Declaration
// function CalcAge1 (birthYear) {
//     return `function Declaration : ${2023 - birthYear}`;
// }
// convertion Arrow Function
CalcAge1 = (birthYear) => {
  return `function Declaration : ${2023 - birthYear}`;
};
const Age1 = CalcAge1(1984);

// Function Expression
//   const calcAge2 = function (birthYear) {
//     return `function Expression : ${2023 - birthYear}`;
// };
const calcAge2 = (birthYear) => {
  return `function Expression : ${2023 - birthYear}`;
};
// convertionArrow function

const age2 = calcAge2(1984);
console.log(Age1, age2);
