"strict";
const inputs = document.getElementById("inp");
const text = document.querySelector(".text");
const add = document.querySelector(".add");

add.addEventListener("click", function () {
  let inputValue = inputs.value;
  if (inputValue === "") {
    alert("Please Enter Your Task");
    return;
  }
  
  const newEle = document.createElement("ul");
  newEle.innerHTML = `<li>${inputValue} <i class="fa fa-trash"></i>`;
  text.appendChild(newEle);
  inputs.value = "";
  
  newEle.querySelector("i").addEventListener("click", function () {
    newEle.remove();
  });
});
