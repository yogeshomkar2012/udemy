//  equality oprators : == vs ===

const age = 18;
const ages = "18";

if (age === 18) {
  console.log(typeof age);
  console.log(typeof String(age));
}
if (ages === 18) {
  console.log(typeof ages);
} else {
  console.log(typeof ages);
}
//Coercion || convertion
if (ages === 18) {
  console.log(typeof ages);
} else {
  console.log(typeof +ages);
}
