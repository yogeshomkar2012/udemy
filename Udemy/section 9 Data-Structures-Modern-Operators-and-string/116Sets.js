"use strict";
console.log(`A JavaScript Set is a collection of unique 
values. Each value can only occur once in a Set.
A Set can hold any value of any data type.`);

const orderset = new Set([
  "pasta",
  "pizza",
  "Risotto",
  "pizza",
  "pizza",
  "pizza",
  "pasta",
  "resots",
  "gobi",
]);
console.log(`Creates a new Set`);
console.log(new Set("yogesh"));
console.log(orderset);
console.log(`size method Returns the number elements in a Set`);
console.log(orderset.size);
console.log(` has() method Returns true if a value exists casesencitive`);
console.log(orderset.has("pizza"));
orderset.has("Pizza");
console.log(`add() method Adds a new element to the Set`);
console.log(orderset.add("panipuri"));
console.log("delete() method Removes an element from a Set");
console.log(orderset.delete("resots"));
console.log(`clear() method Removes all elements from a Set`);
// orderset.clear();
console.log(
  `value() method Returns an Iterator with all the values in a Set in object format`
);
console.log(orderset.values());
console.log(`keys()	Same as values() A Set has no keys.
keys() returns the same as values().This makes Sets compatible with Maps.`);
console.log(`set is itarable`);
for (const order of orderset) console.log(order);
const staff = ["waiter", "chef", "waiter", "manager"];

console.log(staff);
console.log(`create new set`);
const staffUniqe = new Set(staff);
console.log(staffUniqe);
console.log(`convert set into Array`);
const convertArray = [...staff];
console.log(convertArray);
for (const [i, value] of convertArray.entries()) {
  console.log(`index -> ${i + 1} : values -> ${value}`);
}
console.log(orderset);

const sets = new Set(["yogesh", "halguru", "yogesh", "9844944689"]);
console.log(sets);
// convert set to array
const conSetToArray = [...sets];
console.log(conSetToArray);
console.log(new Set(conSetToArray));
