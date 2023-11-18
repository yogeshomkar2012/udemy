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
  // can destructure paramaters like this
  orderDelevery: function (obj) {
    const time = obj.time;
    const add = obj.address;
    const main = obj.mainIndex;
    const starter = obj.starterIndex;
    console.log(
      `YOur Order Is ${this.starterMenu[starter]} And ${this.mainMenu[main]} will Be Delevered at  ${time} to ${add}`
    );
  },
  // or
  // orderDelevery: function ({ time, address, mainIndex, starterIndex }) {
  //   console.log(
  //     `YOur Order Is ${this.starterMenu[starterIndex]} And ${this.mainMenu[mainIndex]} will Recive On ${time} in your Address is ${address}`
  //   );
  // },
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

//destructure
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

//alternative name
const {
  name: restorantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restorantName, hours, tags);

//default Value
const { menu = [], starterMenu: starter = [] } = restaurant;

console.log(menu, starter);

//mutating variables
let a = 111;
let b = 999;
let c = 100;
const obj = { a, b: 7, c: 14 };
({ a, b, c } = obj);
console.log(a, b, c);

//destructure nested Object
const {
  fri: { open: o, close: C },
} = openingHours;
console.log(o, C);
//
restaurant.orderDelevery({
  time: "22:30",
  address: "Halaguru",
  mainIndex: 2,
  starterIndex: 2,
});
//
console.log(restaurant);
