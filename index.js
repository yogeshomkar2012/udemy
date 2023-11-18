//  5 falsy value : 0,"",undefined,null,NaN

console.log(Boolean(0))
console.log(Boolean(""))
console.log(Boolean(undefined))
console.log(Boolean({}))
console.log(Boolean(null))
console.log(Boolean(NaN))

const money = 0;
if (money) {
    console.log(`dont spend it all`)
} else {
    console.log('you shoud get job')
}
const moneys = 100;
if (moneys) {
    console.log(`dont spend it all`)
} else {
    console.log('you shoud get job')
}











