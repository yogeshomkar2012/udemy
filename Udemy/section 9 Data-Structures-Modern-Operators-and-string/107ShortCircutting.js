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
// use any Data  type, returns any adata type
// first value if it exist second value not considered by javaScript
console.log("-----Or-----");
console.log(2 || "yogesh");
console.log("" || "yogesh");
console.log(true || 0);
console.log(undefined || null);
console.log(undefined || "" || 0 || "hello" || 23);

restaurant.numguest = 9;

const guest1 = restaurant.numguest ? restaurant.numguest : 10;
console.log(guest1);
const guest2 = restaurant.numguest || 20;
console.log(guest2);
console.log("-----And-----");
// all  values must be true
const guest3 = restaurant.numguest && 50;
console.log(guest3);
if (restaurant.orderPizza) restaurant.orderPizza("musrooms", "cake", "pasta");

restaurant.orderPizza && restaurant.orderPizza("musrooms", "cake", "pasta");

console.log(restaurant);
