const fd1 = "yogesh1";
const fd2 = "yogesh2";
const fd3 = "yogesh3";

const friends = ["yogesh1", "yogesh2", "yogesh3"];
console.log(friends);

// diff way array
const fds = new Array("yogesh1", "yogesh2", "yogesh3");
console.log(fds);

console.log(fds[0]);
console.log(fds[1]);
console.log(fds[2]);
//geting length of array Use length method
console.log(friends.length);
console.log(friends[friends.length - 1]);
// changing or mutating array
friends[0] = "ramya";
console.log(friends);
const fname = "kumar";
const kumar = [fname, friends, 2023 - 1984];
console.log(kumar);
const years = [1990, 2020, 1984];
console.log(years);

const calAge = (birthYear) => {
  const currentYear = new Date().getFullYear();
  return currentYear - birthYear;
};
// useing For loop
for (let i = 0; i < years.length; i++) {
  console.log(calAge(years[i]));
}
