"use strict";

let f;
const g = () => {
  const a = 23;
  f = () => {
    console.log(a * 2);
  };
};
const h = () => {
  const b = 777;
  f = () => {
    console.log(b * 2);
  };
};

g();
f();
///////////
h();
f();
//example
const boardPssanger = (n, wait) => {
  const pergroup = n / 3;
  setTimeout(() => {
    console.log(
      `we are now boarding all ${n} passengers \n Ther are 3 groups, each with ${pergroup.toFixed(
        2
      )}`
    );
  }, wait * 1000);
  console.log(`will start boarding in ${wait} seconds`);
};

boardPssanger(100, 3);
