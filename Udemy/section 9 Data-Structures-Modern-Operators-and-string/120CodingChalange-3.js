"use strict";

const gameEvents = new Map([
  [17, "⚽️ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽️ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽️ GOAL"],
  [80, "⚽️ GOAL"],
  [92, "🔶 Yellow card"],
]);


// task 3
console.log(`task 3 : \n Print the following string to the 
console: "An event happened, on average, every 9 minutes"
(keep in mind that a game has 90 minutes)`);
const keys = [...gameEvents.keys()].length;
const avgminutes = 90 / keys;
console.log(`An event happened, on average, every ${avgminutes} minutes`);
// task 4
console.log(`task 4 : \n Loop over the events and log 
them to the console, marking whether it's in the first 
half or second half (after 45 min) of the game, like 
this: [FIRST HALF] 17: ⚽️ GOAL`);
for (const [key, value] of gameEvents) {
  const half = key <= 43 ? "FIRST HALF" : "SECOND HALF";
  console.log(`[${half} ${key}] : ${value}`);
}
