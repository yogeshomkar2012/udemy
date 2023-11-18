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
console.log(restaurant);
