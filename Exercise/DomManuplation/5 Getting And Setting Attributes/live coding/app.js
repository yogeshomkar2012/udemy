console.log(`*************** get attribute ***************`);
// href
const a = document.querySelector("a");
console.log(a.href);

// value
const inputValue = document.querySelector("input");
console.log(`value Get : ${inputValue.value}`);
// type
console.log(`type Get: ${inputValue.type}`);
// getAttribute(attrName)
console.log(inputValue.getAttribute("type"));

// setAttribute(attrName, value)
inputValue.setAttribute("type", "password");
console.log(inputValue.getAttribute("type"));

/////////////////////////////////////////////
console.log(`*************** Set attribute ***************`);
const setLink = (a.href =
  "https://www.youtube.com/watch?v=mSnpYJsaT9g&list=PLSDeUiTMfxW7lm7P7GZ8qtNFffHAR5d_w");
console.log(setLink);
// console.log(`set Value : ${(inputValue.value = "yogesh")}`);
