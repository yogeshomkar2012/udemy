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
/**-------------------------------------------- */
console.log(
  "The nullish coalescing (??) operator is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand."
);
/*---------------*/
//checking proties exists
// console.log(restaurant.openingHours.mon.open);

if (restaurant.openingHours && restaurant.openingHours.mon) {
  console.log(restaurant.openingHours.mon.open);
}
// with optional chaining
//code will exicute if mon exist
console.log(restaurant.openingHours.mon?.open);
//code will exicute if openingHours and mon exist
console.log(restaurant.openingHours?.mon?.open);
//code will exicute if openingHours and thu exist
console.log(restaurant.openingHours?.thu?.open);

for (const day of weekdays) {
  const open = restaurant.openingHours[day]?.open ?? "closed";
  console.log(`on ${day}, we open at ${open}`);
}

//methods
console.log(restaurant.order?.(0, 1)) ?? "Method Does Not Exist";
console.log(restaurant.orderRistto?.(0, 1)) ?? "Method Does Not Exist";

//Array
const users = [{ name: "yogesh", email: "yogesh@gmail.com" }];
const user = [];
console.log(`user Name is : ${users[0]?.name}` ?? "user list empty");
console.log(`user Name is : ${users[0]?.name}` ?? "user list empty");
console.log(restaurant);
