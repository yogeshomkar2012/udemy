const yogesh = {
  // key and values
  fname: "yogesh",
  ln: "hv",
  birthyear: 1984,
  age: 2023 - 1984,
  job: "teacher",
  friends: ["kamala", "kumara", "chandra"],
  win: true,
};
console.log(yogesh);

// getting Proprties
// dot notation
console.log(yogesh.fname);
// bracket notation
console.log(yogesh["fname"]);
// const intrestedIn = prompt(
//   `what you want now about yogesh ? choose fname, ln, birthyear,job,age`
// );
// console.log(yogesh[intrestedIn]);
// if (yogesh[intrestedIn]) {
//   console.log(yogesh[intrestedIn]);
// } else {
//   console.log(`wrong request`);
// }

// add aditional infromation to object
yogesh.location = "Halaguru";
yogesh["education"] = "BBM";
console.log(yogesh);

console.log(
  `${yogesh.fname} has ${
    yogesh.friends.length
  } , and his best friend is called ${yogesh.friends.at(
    yogesh.friends.indexOf("kamala")
  )}`
);
