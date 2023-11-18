// ----------- BAD WAY-----------
const secondBtn = document.querySelector(".second-btn");
secondBtn.onclick = function () {
  console.log("bad Way");
};
console.log(secondBtn);
// ----------- GREAT WAY-----------
const best = document.querySelector(".best");
function greeting() {
  console.log("best Way");
}
best.addEventListener("click", greeting);
// ----------- Event (e) Object -----------
const para = document.querySelector(".para");

para.addEventListener("click", (event) => {
  console.log(event);
});

const form = document.querySelector("form");
const inputbtn = document.querySelector("input");
form.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("form");
});
console.log(para);
