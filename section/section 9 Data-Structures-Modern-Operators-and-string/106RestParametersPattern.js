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
// 1) Destructuring
console.log("Rest is Completly opposit to spread oparaters");
// spread on right side of =
const arr = [1, 2, ...[3, 4]];
console.log(arr);
//  Rest because on Left side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [Italian, , Focaccia, ...rest] = [
  ...restaurant.starterMenu,
  ...restaurant.mainMenu,
];
console.log(Italian, Focaccia, rest);

//Objescts
const { sat, ...weekDays } = restaurant.openingHours;
console.log(sat, weekDays);

// Fonctions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];

  console.log(sum);
};
add(2, 3, 4);
add(2, 3, 4, 5);
add(2, 3, 4, 5, 6);
const x = [24, 2];
add(...x);

const ingredient = ["mushrooms", "onion", "olives", "spinch"];
restaurant.orderPizza(...ingredient);
const [musrooms, ...other] = ingredient;
restaurant.orderPizza(musrooms, other);
restaurant.orderPizza("mushrooms", "onion", "olives", "spinch");
