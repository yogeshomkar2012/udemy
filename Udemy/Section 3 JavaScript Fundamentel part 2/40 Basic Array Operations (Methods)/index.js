const friends = ["yogesh", "kumar", "ramya"];
console.log(friends);
// push() method
console.log(`---------- push() ----------`);
console.log(`method add a value in end of the array`);
console.log(friends.push("pushMethod"), friends);

// unshift()
console.log(`---------- unshift() ----------`);
console.log("method add a value in begining of the array");
console.log(friends.unshift("unshiftMethod"), friends);

// pop()
console.log(`---------- pop() ----------`);
console.log("remove end element of array");
console.log(friends.pop(friends), friends);

// shift()
console.log(`---------- shift() ----------`);
console.log("remove start element of array");
console.log(friends.shift(friends), friends);

// indexof()
console.log(`---------- indexof() ----------`);
console.log("method is useFull to find index of array of elements");
console.log(
  `${friends.at(friends.indexOf("kumar"))} ${friends.indexOf("kumar")}`,
  friends
);

// includes()
console.log(`---------- includes() ----------`);
console.log(
  " method is usefull to know the Element is in the array returns true or false"
);
console.log(friends.includes("yogesh"), friends);
console.log(friends.includes("chandra"), friends);






//
