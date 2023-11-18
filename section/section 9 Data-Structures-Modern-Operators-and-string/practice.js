"use strict";
console.log(`Set`);
const set = new Set(["yogesh", "yogesh", "kamala", "kavya"]);
console.log(set);
console.log(`convert set into array`);
const setToArr = [...set];
console.log(setToArr);
console.log(`convet array to set`);
const conArryToSet = new Set(setToArr);
console.log(conArryToSet);
for (const [key, value] of setToArr.entries()) {
  console.log(`index ${key} : values ${value}`);
}
console.log(`----------------------------`);
//////////////////////////
console.log(`Map`);
const fruites = new Map([
  ["apples", 500],
  ["Apples", 500],
  ["bananas", 300],
  ["oranges", 200],
]);
console.log(fruites);
console.log(`convert map to set`);
const conMapToSet = new Set(fruites);
console.log(`convert set to map`);
console.log(new Map(conMapToSet));

console.log(`convet map to array`);
const conMaptoArr = [...fruites];
console.log(conMaptoArr);

console.log(`convet array to set`);
const conArrToSet = new Set(conMaptoArr);
console.log(conArrToSet);
console.log(`----------------------------`);
////////////////
console.log(`array`);
const arr = ["yogesh", "yogesh", "kamala", "kavya"];
console.log(arr);
console.log(`convet array to set`);
console.log(new Set(arr));
console.log(`----------------------------`);
//////////////////////////
console.log(`objects`);
const car = { type: "Fiat", model: "500", color: "white" };
console.log(car);
console.log(`convert object to map`);
console.log(new Map(Object.entries(car)));
console.log(`convert object to array`);
console.log([...new Map(Object.entries(car))]);
console.log(`convert object to array`);
console.log(new Set([...new Map(Object.entries(car))]));
console.log(Object.entries(car));
