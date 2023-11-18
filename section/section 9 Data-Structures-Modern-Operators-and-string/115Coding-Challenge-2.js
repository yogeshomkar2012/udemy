"use strict";
const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

console.log(`Let's continue with our football betting app!`);

//task 1
console.log(`task 1).\n Loop over the game.scored array 
and print each player name to the console,along with the
goal number (Example: "Goal 1: Lewandowski")`);
// const goals = game.scored;
for (const [goal, player] of game.scored.entries()) {
  console.log(`Goal "${goal + 1}: ${player},"`);
}
// console.log(goals);
//task 2
console.log(`task 2).\n Use a loop to calculate the 
average odd and log it to the console 
(We already studied how to calculate averages, you
    can go check if you don't remember)`);
const odds = Object.values(game.odds);
let total = 0;
for (const odd of odds) {
  total += odd;
}
const average = total / odds.length;
console.log(average.toFixed(2));
// console.log(odds);
// task 3
console.log(`task 3).\n Print the 3 odds to the console, 
but in a nice formatted way, exaclty like this:
Odd of victory Bayern Munich: 1.33
Odd of draw: 3.25
Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't 
hardcode them (except for "draw"). 
HINT: Note how the odds and the game objects have 
the same property names 😉
`);
for (const [team, odds] of Object.entries(game.odds)) {
  const str = team === "x" ? "draw" : `${game[team]}`;
  console.log(`odd of ${str} : ${odds}`);
}

//Bonus
console.log(`BONUS :\n Create an object called 'scorers' 
which contains the names of the players 
who scored as properties, and the number of goals as the 
value. In this game, it will look like this:
{
  Gnarby: 1,
  Hummels: 1,
    Lewandowski: 2,
}`);
const scorers = {};
for (const player of game.scored) {
  // scorers[player] ? scorers[player]++ : (scorers[player] = 1);
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
console.log(scorers);
console.log(game);
