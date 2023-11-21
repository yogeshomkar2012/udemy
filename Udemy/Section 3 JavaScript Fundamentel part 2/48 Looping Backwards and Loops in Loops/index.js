const yogesh = [
  "yogesh",
  "suma",
  2023 - 1984,
  "teacher",
  ["kamala", "vimala", "kumar"],
  98449446879,
];
// forword looping
for (let index = 0; index < yogesh.length; index++) {
  const element = yogesh[index];
  console.log(element);
}
// backward looping
for (let i = yogesh.length - 1; i >= 0; i--) {
  console.log(yogesh[i]);
}
// loop in loop
for (let exer = 1; exer < 4; exer++){
    console.log(`------exercise a day ${exer}------`);
  for(let pushup = 1; pushup < 6; pushup++){
    console.log(`pushup repitition ${pushup + 1}`)
  }
}



