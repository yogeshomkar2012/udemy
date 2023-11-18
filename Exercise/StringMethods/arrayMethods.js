"use strict";
document.querySelector(".header").innerHTML = "Array Methods";
const stri = "While the above could have been achieved by using map";
const StudentName = [];
const college = [
  "yogesh",
  "suhash",
  "kamla",
  "manojkumar",
  "divya",
  "veena",
  "ramya",
  "druva",
];
const puCollege = ["divya", "sudha", "shivakumar", "manju"];
const numbers = [1, 2, 3, 4];
const nestArray = [1, 2, [3, 4], [5, 6]];
const accounts1 = [1000, 100, -10, 2000, 3200, 200, 500, -1000, 3000, -1000];
const accounts2 = [-1000, 100, 10, 2000, 3200, 200, 500, 1000, 3000, -1000];
const accounts3 = [2000, 1000, 100, 2000, -3200, 200, 500, 1000, 3000, -1000];
const allAccounts = [accounts1, accounts2, accounts3];
console.log(college);
// concat();
////////////////////////////////////////////
console.log(college.concat(puCollege));
// copywithin(index);
console.log(college.copyWithin(1, 2));
// every();
////////////////////////////////////////////
const check = function (numbers) {
  return numbers > 0;
};
console.log(numbers.every(check));
console.log([1, undefined, 3].every((x) => x !== undefined)); // true
console.log([2, , 2].every((x) => x === 2)); // true
numbers.every((elem, i, arr) => {
  //   numbers[i + 1]--;
  arr[i]--;
  console.log(`[${arr}][${i}] -> ${elem}`);
  return elem < 3;
});
////////////////////////////////////////////
//filter();
const result = college.filter(function (elem) {
  //   console.log(`[${arr}] : ${i} : ${elem} -> ${elem.length}`);
  //   return elem.length > 6;
  console.log(elem);
});
////////////////////////////////////////////
//flat();
console.log(nestArray.flat());
// in case nested in deep
const nestArraDeep = [1, 2, [3, 4, [5, [7, 8]]]];
console.log(nestArraDeep.flat(3));
console.log(nestArraDeep.flat(Infinity));
// console.log(allAccounts.flat(Infinity));
////////////////////////////////////////////
//flatMap() is just like map
const flatmapMethod = allAccounts.flatMap((element) => {
  return element;
});
console.log(flatmapMethod);
// total of acconuts ;
const balance = allAccounts
  .flatMap((element) => element)
  .reduce((acc, cur) => acc + cur);
console.log(balance);
const striArr = stri
  .split(" ")
  .map((e) => [`${e}`])
  .flatMap((e, i) => {
    i++;
    return `${i}: ${e}`;
  });
console.log(...striArr);
////////////////////////////////////////////
// forEach()
const colleges = [
  "yogesh",
  "suhash",
  "kamla",
  "manojkumar",
  "divya",
  "veena",
  "ramya",
  "druva",
];
colleges.forEach((e, i) => console.log(`${i} : ${e}`));
////////////////////////////////////////////
//indexOf(item,start)
const indexof = colleges.indexOf("manojkumar", 2);
console.log(indexof);
////////////////////////////////////////////
[0, 1, 2, 3, 4].reduceRight(
  (accumulator, currentValue, index, array) => accumulator + currentValue
);
////////////////////////////////////////////
//reverse()
console.log(colleges.reverse());
///////////////////////////////////////////
//slice(start,end);
const collegess = [
  "akash",
  "yogesh",
  "suhash",
  "kamla",
  "manojkumar",
  "divya",
  "veena",
  "ramya",
  "druva",
  "zakir",
];
const slicefunction = (s, e) => {
  return `${collegess.slice(s, e)}`;
};
console.log(slicefunction(2, 4));
console.log(slicefunction(-4, -1));
///////////////////////////////////////////
//some(f(v,i,arr))
const someMethod = colleges.some(function (v, i) {
  return v.length > 6;
});
if (someMethod === true) {
  console.log(colleges.find((x) => x.length > 6));
}
///////////////////////////////////////////
//sort(comparing function)
console.log(collegess.sort((a, b) => b.length - a.length));
console.log(nestArraDeep.flat(Infinity).sort((a, b) => b - a));
const items = [
  { name: "Edward", value: 21 },
  { name: "Sharpe", value: 37 },
  { name: "And", value: 45 },
  { name: "The", value: -12 },
  { name: "Magnetic", value: 13 },
  { name: "Zeros", value: 37 },
];
console.log(
  items.sort((a, b) => {
    const nameA = a.name.toUpperCase();
    return nameA;
  })
);
console.log(collegess.sort((a, b) => a.localeCompare(b)));
console.log(
  items
    .map((v, i) => {
      return `${i + 1} -> name : ${v.name}: value : ${v.value}`;
    })
    .sort((a, b) => b.name - a.name)
);
///////////////////////////////////////////
//splice(startposition,numberOfItemes,addItem1,addItem2.....)
console.log(collegess);
collegess.splice(2, 2, "rahula");
console.log(collegess);
///////////////////////////////////////////
//entries() noParamaeters
const a = ["a", "b", "c", undefined];
for (let [i, e] of a.entries()) {
  console.log(`${i} : ${e}`);
}
//------useing for loop-----
const arrayEntries = a.entries();
for (const [indx, element] of arrayEntries) {
  console.log(`${indx} : ${element}`);
}
///////////////////////////////////////////
//fill(value,start,end);
const fillMethod = [1, 2, 3, 4, 5];
console.log(fillMethod.fill(0, 1, 3));
const fillnewArray = new Array(5).fill(0);
console.log(fillnewArray);
//find(calbackFunction(e,i,arr))
const ages = [17, 20, 19, 18, 18, 21, 22];
const ageCheckFunction = function (chekAge) {
  return chekAge.find((e) => e > 20);
};
console.log(ageCheckFunction(ages));
const inventory = [
  { name: "apples", quantity: 2 },
  { name: "bananas", quantity: 0 },
  { name: "cherries", quantity: 5 },
];
function checkArray(fruits) {
  return fruits.name === "apples";
}
console.log(inventory.find(checkArray));
console.log(inventory.find((x) => (x.name = "bananas")));
///////////////////////////////////////////
//findIndex(calbackFunction(e,i,arr));
function indexChek(elements) {
  return elements > 18;
}
console.log(ages.findIndex(indexChek));
