"use strict";
const splited = "a+Very+ggod+apple".split("+")
console.log(splited)
const fname = "Hv";
const lname = "yogeSH";
const fulname = ["MR .", fname, lname.toLocaleLowerCase()].join(" ")
console.log(fulname)

const capitalized = function (name) {
    const splitName = name.split(" ")
    const nameUpper = [];
    for (const n of splitName) {
        nameUpper.push(n.replace(n[0], n[0].toUpperCase()))
    }
    console.log(splitName)
    console.log(nameUpper.join(" "))
    
}
capitalized("yogesh kamala vimala rani")
let str = "apple banana kiwi";
const capitalize = function (str) {
  const names = str.split(" ");

  for (const n of names) {
    console.log([n[0].toUpperCase() + n.slice(1, n.lastIndexOf())].join(" "));
    }
};

capitalize(str);
const message = "Go To Gate 23";
console.log(message);
console.log(message.padStart(10, "+").padEnd(20, "+"));
console.log("yogesh".padStart(15, "+").padEnd(10, "+"));
console.log("0569".padStart(12, "*"));

const maskCrditCard = function (number) { 
    const convertStr = number + ""
    const last = convertStr.slice(-4);
    return last.padStart(convertStr.length, "*") 
}
console.log(maskCrditCard(9844944689));
console.log(maskCrditCard(8844944689456127));

// repeat
const mesg = `bad weather... All Departures delyed \n`;
console.log(mesg.repeat(5));
const repeatMessage = function (n) {
  return `There are ${n} of Planes Are Waiting for departure`;
};
console.log(repeatMessage(5));
console.log(repeatMessage(6));