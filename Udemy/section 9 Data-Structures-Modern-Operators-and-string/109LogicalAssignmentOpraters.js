"use strict";

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelevery: function (obj) {
    const { starterIndex } = obj;
    const { mainIndex } = obj;
    const { time } = obj;
    const { address } = obj;
    console.log(
      `Hello Your Order ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} Will Be Recived To ${address} At ${time}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here Is Your Delicious Pasta Witha ${ing1}, ${ing2}, ${ing3}`);
  },
  orderPizza: function (mainIngredients, ...otherIngrediats) {
    console.log(mainIngredients);
    console.log(otherIngrediats);
  },
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};
//add properties no one have
const Bar1 = {
  name: "raviLiqure",
  numDrikers: 20,
};
const Bar2 = {
  name: "madhuMathi",
  woner: "ramachandra",
};
// or assinment oprater
// Bar2.numDrikers = Bar2.numDrikers || 10;
// Bar2.numDrikers ||= 10;
// Bar1.woner = Bar1.woner || "yogesh";
// Bar1.woner ||= "yogesh";

//nullish oprator
Bar1.woner ??= "yogesh";
Bar2.numDrikers ??= 10;

console.log(Bar1);
console.log(Bar2);
