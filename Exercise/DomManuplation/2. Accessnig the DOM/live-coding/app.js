// ************ DOM SELECTORS ************
// 1. getElementsByTagName
console.log(document.getElementsByTagName("h1"));
// 2. getElementById
console.log(document.getElementById("id-1"));
console.log(document.getElementById("main"));
// 3. getElementsByClassName
console.log(document.getElementsByClassName("cls"));
// 4. querySelector
console.log(document.querySelector("#main"));
console.log(document.querySelector(".cls"));
console.log(document.querySelector("h1"));
// 5. querySelectorAll
console.log(document.querySelectorAll("li"));
// ---------------------------------------
// Storing data in variables
const h1 = document.querySelector("h1");
console.log(h1);
const h2 = document.querySelectorAll("li");
console.log(h2);
