// 1. Select the anchor tag
const a = document.querySelector("a");
console.log(a);
// 2. Use getAttribute(attrName) to check the attribute.
const attributeName = a.getAttribute("href");
console.log(attributeName);
// 3. Select a-two & set "href" attribute
// setAttribute(attrName, value)
const a2 = document.querySelector(".a-two");
console.log(a2);
a2.setAttribute(
  "href",
  "https://www.youtube.com/watch?v=mSnpYJsaT9g&list=PLSDeUiTMfxW7lm7P7GZ8qtNFffHAR5d_w"
);
const getAtt = a2.getAttribute("href");
console.log(getAtt);
console.log(document.body);
