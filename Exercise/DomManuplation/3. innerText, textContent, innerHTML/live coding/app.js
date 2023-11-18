// innerText
console.log(`*************** InnerText ***************`);
const p = document.querySelector("p");
console.log(p.innerText);
console.log(`*************** Change InnerText ***************`);
const changP = document.querySelector("p");
console.log((changP.innerText = "Text Changed"));
// textContent
console.log(`*************** Textcintent ***************`);
console.log(p.textContent);
// innerHTML
console.log(`*************** InnerHtml ***************`);
console.log(p.innerHTML);
