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
};
//Destructur
const [main, , second] = restaurant.categories;
console.log(main, second);
//Switching
const [maine, secondary] = [second, main];
console.log(maine, secondary);
//recive 2 return form function
const [starter, mainCores] = restaurant.order(2, 0);
console.log(starter, mainCores);

//nested array
const nest = [1, 2, 3, [4, 5]];
console.log(nest);
//nest array Destructure
const [a, b, c, [d, e]] = nest;
console.log(a, b, c, d, e);

//default Values;
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
// array destructurning and Rest operator
const [g, h, ...others] = restaurant.categories;
console.log(g, h, others);
console.log(restaurant);
