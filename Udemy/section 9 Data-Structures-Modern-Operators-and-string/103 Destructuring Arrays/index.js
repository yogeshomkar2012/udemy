'use strict';
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};
// destructuring
const [x, y] = restaurant.categories;
console.log(x, y);
const [a, , b] = restaurant.categories;
console.log(a, b);

// Receive 2 return values from a function
const [starter, maniCourse] = restaurant.order(2, 0);
console.log(starter, maniCourse);

// nested arrya
const nestArray = [2, 3, 4, [5, 6, [7, 8, [9, 8]]]];
console.log(nestArray.flat(1));
console.log(nestArray.flat(2));
console.log(nestArray.flat(3));
console.log(nestArray.flat(Infinity));
