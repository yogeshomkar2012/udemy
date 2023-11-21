const yogesh = [
  "yogesh",
  "suma",
  2023 - 1984,
  "teacher",
  ["kamala", "vimala", "kumar"],
  98449446879,
];
// for (let i = 0; i < yogesh.length; i++) {
//   console.log(yogesh[i]);
// }
// filling an array
const types = [];
for (let i = 0; i < yogesh.length; i++) {
  console.log(typeof yogesh[i]);
  //   types[i] = typeof yogesh[i]
  types.push(typeof yogesh[i]);
}
console.log(types);

//example
const years = [1987, 1984, 1945, 1999];
const age = [];

for (let i = 0; i < years.length; i++) {
  const urrentYear = new Date().getFullYear();
  age.push(urrentYear - years[i]);
}
console.log(age);
console.log(`---string printing---`);
for (let i = 0; i < yogesh.length; i++) {
  if (typeof yogesh[i] !== "string") continue;
  console.log(yogesh[i], typeof yogesh[i]);
}
console.log(`---break printing---`);
for (let i = 0; i < yogesh.length; i++) {
  if (typeof yogesh[i] === "number") break;
  console.log(yogesh[i], typeof yogesh[i]);
}
