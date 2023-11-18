const fistLi = document.querySelector("li");
console.log(fistLi);

console.log(fistLi.parentElement);
console.log(fistLi.parentElement.parentElement);
console.log(fistLi.parentElement.parentElement.parentElement);

const fourth = document.querySelector(".fourth");
console.log(fourth);

const ul = document.querySelector("ul");
console.log((ul.children[0].innerText = "Yogesh 1"));
console.log((ul.children[1].innerText = "Jeevan 2"));
console.log((ul.children[2].innerText = "jayanth 3"));
console.log((ul.children[3].innerText = "yogesh kumar 4"));
console.log(`******************* siblling *******************`);
console.log(fistLi.nextElementSibling.textContent);
console.log(fistLi.nextElementSibling.nextElementSibling.textContent);
console.log(`******************* siblling *******************`);

console.log(fourth.previousElementSibling);
