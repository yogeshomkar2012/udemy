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
const arr = [3, 4, 5];
console.log(arr);

const newArr = [1, 2, ...arr];
console.log(newArr);
console.log(...newArr);

const newMenu = [...restaurant.mainMenu, "Gobi Manchuri"];
console.log(...newMenu);
// copy Array
const mainMenu = [...restaurant.mainMenu];
console.log(mainMenu);
// joining 2 array
const joiningArray = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(joiningArray);
console.log(...joiningArray);

console.log("spread opraters works only itarables");
console.log('itarabeles are "strings, array, map and sets not objects"');
const str = "yogesh";
console.log(...str);
const letters = [...str, " ", "name"];
console.log(letters);

const ingredients = [
  //   prompt("Ingredient 1"),
  //   prompt("Ingredient 2"),
  //   prompt("Ingredient 2"),
];

restaurant.orderPasta(...ingredients);
console.log(ingredients);
// Objects
console.log("Adding New Values To Existing Objectz");
const newRestorant = { foundedIn: 1984, ...restaurant, founder: "yogesh" };
console.log(newRestorant);

console.log(restaurant);
