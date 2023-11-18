"use strict";
document.querySelector(".header").innerHTML = "String Methods";
const string =
  "    I love cats Cats are very easy to love. Cats are very popular Apple, Banana, Kiwi, Apple,APPLE,APPLE    ";
const string2 = "concat, concat, concat, concat";
const string3 = 5;
console.log(string.length);
console.log(string.slice(7, 13));
console.log(string.slice(-7, -4));
console.log(string.substring(1, 17));
console.log(string.replace(",", "@"));
//case sensitive
console.log(string.replace(/APPLE/g, "@"));
//globale
console.log(string.replace(/Apple/g, "@"));
console.log("Replace All");
console.log(string.replaceAll(/Cats/g, "Dogs"));
console.log(string.replaceAll("Cats", "Dogs"));
console.log("convert LowerCase");
console.log(string.toLocaleLowerCase());
console.log("convert UpperCase");
console.log(string.toLocaleUpperCase());
console.log("Concat");
console.log(string.concat(string2));
console.log("trim");
console.log(`Trim Both Side ${string.trim().length} `);
console.log(`Trim From Start ${string.trimStart().length} `);
console.log(`${string.trimEnd().length} Trim From End`);
console.log(string3.toString().padStart(4, "0"));
console.log(string3.toString().padEnd(4, "0"));
console.log(string.charAt(11));

const myArr = string.split("");
let text = "";
for (let i = 0; i < myArr.length; i++) {
  text = myArr[i];
}
console.log(text);
console.log(myArr[0]);
console.log(string);
const strrr = "A a";
console.log(strrr.charCodeAt(0));
