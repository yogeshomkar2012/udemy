"use strict";

const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);
// map
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
currencies.forEach((cv, key, map) => {
  console.log(`${key} : ${cv}`);
});
console.log(`-----------------`);
const currenciesUnique = new Set(["USD", "GBP", "USD", "EUR", "EUR"]);
currenciesUnique.forEach((cv, key, map) => {
  console.log(`${key} : ${cv}`);
});
console.log(`-----------------`);
console.log(currenciesUnique);
