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
/*--------------------*/
const questions = new Map([
    ["question", "what is best programing language"],
    [1, "C"],
    [2, "Java"],
    [3, "javascript"],
    ["correct", 3],
    [true, "Correct"],
    [false, "try Again"],
  ]);
  console.log(questions);
  console.log(`convert object to map`);
console.log(new Map(Object.entries(openingHours)));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

//quize app;
console.log(questions.get("question"));
for (const [key, value] of questions) {
  if (typeof key === "number") {
    console.log(`Answer is ${key} : ${value}`);
  }
}
// const answer = Number(prompt("Your Answer  "));
const answer = 3;
console.log(answer);
console.log(questions.get(questions.get("correct") === answer));

console.log(`convert map to array`);
console.log([...questions]);
//
console.log([...questions.entries()]);
console.log([...questions.values()]);
console.log([...questions.keys()]);