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
    team1: 7.33,
    x: 3.25,
    team2: 6.5,
  },
};
// Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this 
challenge we're gonna work with the data. So here are your tasks:*/
//task 1
console.log(
  "task 1. \n Create one player array for each team (variables 'players1' and 'players2'"
);
const [player1, player2] = game.players;
console.log(player1, player2);
//task 2
console.log(`task 2. \n The first player in any player array is the goalkeeper and the others are 
field players. For Bayern Munich (team 1) create one variable ('gk') with the 
goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players`);
const [playergk1, playergk25, ...fielders1] = player1;
console.log(playergk1, playergk25, fielders1);
const [playergk2, ...fielders2] = player2;
console.log(playergk2, fielders2);
//task 3
console.log(
  `task 3. \n Create an array 'allPlayers' containing all players of both teams (22 players)`
);
const allplayers = [...player1, ...player2];
console.log(allplayers);
//task 4
console.log(`task 4. \n During the game, Bayern Munich (team 1) used 3 substitute players. So create a 
new array ('players1Final') containing all the original team1 players plus 'Thiago',
'Coutinho' and 'Perisic'`);
const players1Final = [...player1, "Thiago", "Coutinho", "Perisic"];
console.log(players1Final);
//task 5
console.log(
  `task 5. \n Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')`
);
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(`team1: ${team1}, \n x: ${draw}, \n team2: ${team2}`);
//task 6
console.log(`task 6. \n Write a function ('printGoals') that receives an arbitrary number of player names
 (NOT an array) and prints each of them to the console, along with the number of goals
 that were scored in total (number of player names passed in \n TEST DATA FOR : 
Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, 
 call the function again with players from game.scored)`);
const printGoals = function (...players) {
  console.log(`${players.length} goals were scored`);
};
printGoals("Davies", "Muller", "Lewandowski", "Kimmich");
printGoals(...game.scored);
//task 7
console.log(`task 7. \n The team with the lower odd is more likely to win. Print to the console which te
is more likely to win, WITHOUT using an if/else statement or the ternary operator.`);
team1 < team2 && console.log("team 1 is more likely to min");
team1 > team2 && console.log("team 2 is more likely to min");

console.log(game);
