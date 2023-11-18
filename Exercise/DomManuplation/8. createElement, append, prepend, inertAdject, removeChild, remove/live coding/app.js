// ------------------------------------
// createElement()
// append()
// prepend()
// insertBefore()

/* insertAdjacentElement(
    'beforebegin'
    'afterend'
    'beforeend'
    'afterend',
    element
) */

// removeChild()
// remove()
// ------------------------------------
//creating Element
const h1 = document.createElement("h1");
h1.textContent = "Hello I am new Content";
h1.classList.add("greeting");
// appending Child
const body = document.body;
body.appendChild(h1);

// creating li Element
const ul = document.querySelector("ul");

const newLi = document.createElement("li");
newLi.innerText = "I am new Li";
// ul.appendChild(newLi);

// selector.insertBefore(what, where);
const firstLi = document.querySelector("li");
ul.insertBefore(newLi, firstLi);
// insertAdjacentElement
const firstP = document.querySelector("p");
firstP.style.border = "1px solid red";
firstP.style.padding = "13px";
const i = document.createElement("i");
i.innerText = "I am Italic";
i.style.color = "skyblue";
firstP.insertAdjacentElement("beforeend", i);
console.log(i.style);
//-------------
console.log(ul);
console.log(h1);
console.log(firstLi);
console.log(document.body);
