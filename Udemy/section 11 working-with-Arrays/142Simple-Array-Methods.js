"use strict";
let arr = ["a", "b", "c", "d", "e"];
//slice(start,end);
console.log(arr.slice(1, 3));
console.log(arr.slice(-1));
console.log(arr.slice(arr.length - 1));
console.log(arr.slice(1, -1));
console.log(arr.slice());
console.log(arr.slice([...arr]));
//splice()
// console.log(arr.splice(2));
console.log(arr);
//reverse(); this mutate array
console.log(arr.reverse());

let arr1 = ["f", "g", "h", "i", "j"];
console.log("yoegsh hv halaguru malavalli tq mandya dist".split(" "));
// concat()
console.log(arr.concat(arr1).reverse());
//join();
console.log(arr.join("-"));
