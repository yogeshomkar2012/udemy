"use strict";

const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const order = function (starterIndex, mainIndex) {
  return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
};
const orderDelevery = function (obj) {
  const { starterIndex } = obj;
  const { mainIndex } = obj;
  const { time } = obj;
  const { address } = obj;
  console.log(
    `Hello Your Order ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} Will Be Recived To ${address} At ${time}`
  );
};

const orderPasta = function (ing1, ing2, ing3) {
  console.log(`Here Is Your Delicious Pasta Witha ${ing1}, ${ing2}, ${ing3}`);
};

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  order,
  orderDelevery,
  //es6 function format
  orderPizza(mainIngredients, ...otherIngrediats) {
    console.log(mainIngredients);
    console.log(otherIngrediats);
  },
  // object literals
  openingHours,
};
/*--------------------*/
console.log(`A Map holds key-value pairs where the keys can be any datatype.
A Map remembers the original insertion order of the keys.
A Map has a property that represents the size of the map`);

const fruites = new Map([
  ["apples", 500],
  ["Apples", 500],
  ["bananas", 300],
  ["oranges", 200],
]);
const fruitesSet = new Set([
  ["apples", 500],
  ["Apples", 500],
  ["bananas", 300],
  ["oranges", 200],
]);
console.log(fruites);
console.log(`apples : ${fruites.get("apples")}`);
console.log("size method");
console.log(fruites.size);
fruites.delete("Apples");
console.log(fruites);

const rest = new Map();
console.log(`set() method`);
rest.set("name", "yogsh");
rest.set(1, "goals");
rest
  .set("open", 11)
  .set("close", 23)
  .set(true, "we are open")
  .set(false, "we are close");

const time = 8;
console.log(
  rest.get(time > rest.get("open") && rest.get(time < rest.get("close")))
);
console.log(time);
console.log(rest);

console.log(`convet map to array`);
console.log(`map`);
console.log(fruites);
const conMapToArray = [...fruites];
console.log(conMapToArray);
console.log(`convert Array to Set`);
const conArrToSet = new Set(conMapToArray);
console.log(fruitesSet);
console.log(conArrToSet);
console.log(`convert map to Set`);
console.log(new Set(fruites));
console.log(`convert set to map`);
console.log(new Map(fruitesSet));
