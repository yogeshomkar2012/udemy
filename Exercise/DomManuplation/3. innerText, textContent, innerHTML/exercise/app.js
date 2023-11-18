// 1. Check the innerText of "first" element
console.log(`*************** InnerText ***************`);
const first = document.querySelector(".first");
console.log(first.innerText);
// 2. Check the textContent of "second" element
console.log(`*************** textContent ***************`);
const second = document.querySelector(".second");
console.log(second.textContent);
// 3. Check the innerHTML of "third" element
console.log(`*************** innerHTML ***************`);
const third = document.querySelector(".third");
console.log(third.innerHTML);
console.log(document.body);
