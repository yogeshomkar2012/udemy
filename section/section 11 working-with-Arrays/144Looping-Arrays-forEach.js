"use strict";

const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

console.log(`if want use brake then use for method `);
// for (const movement of movements) {
//   if (movement > 0) {
//     console.log(`You Have Deposited ${movement}`);
//   } else {
//     console.log(`You Have Withdrew ${Math.abs(movement)}`);
//   }
// }
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`${i + 1} : Have Deposited ${movement}`);
  } else {
    console.log(`${i + 1} : You Have Withdrew ${Math.abs(movement)}`);
  }
}
console.log(`---------forEach()---------`);
// forEach()
// movements.forEach((movement) => {
//   if (movement > 0) {
//     console.log(`You Have Deposited ${movement}`);
//   } else {
//     console.log(`You Have Withdrew ${Math.abs(movement)}`);
//   }
// });
movements.forEach((movement, index) => {
  if (movement > 0) {
    console.log(`${index + 1} : You Have Deposited ${movement}`);
  } else {
    console.log(`${index + 1} : You Have Withdrew ${Math.abs(movement)}`);
  }
});
