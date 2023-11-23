'use strict';
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
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
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({ time, address, mainIndex = 1, starterIndex = 0 }) {
    console.log(
      `Order Recived! 
      ${this.starterMenu[starterIndex]}
       and
       ${this.mainMenu[mainIndex]} 
       will be delevered to Via el sole,
       ${address} at ${time}`
    );
  },
};

console.log(`-------spread oprator-------`);
const arr = [1, 2, [3, 4], [5, 6, [7, 8, [9, 0]]]];
console.log(...arr);
console.log(...arr.flat(Infinity));
const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);
// copy array
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);
// join two array
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);
//Iterable: array,strings, map,sets, Not objects
const str = 'yogesh';
const letters = [...str];
console.log(letters);
//object
const newRestorant = {
  foundedIn: 1984,
  ...restaurant,
  founder: 'yogesh',
};
console.log(newRestorant);
/**  
restaurant.orderDelivery({
  time: '10.30',
  address: 'halaguru',
  mainIndex: 2,
  starterIndex: 2,
});
 
// object Destructuring
console.log('-------object Destructuring-------');
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

console.log('------assignign Default Value------');
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

console.log('------default values------');
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

console.log('-------nested objct-------');
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);
*/
/** 
// array Destructuring
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

*/
