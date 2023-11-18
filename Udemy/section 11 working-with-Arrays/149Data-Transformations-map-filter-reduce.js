"use strct";
// map
const arr = [1, 2, 3, 4, 5, 6, 7, 8];
const arrMap = arr.map((e) => e * 2);
console.log(arrMap);
//filter
const filter = arrMap.filter((e) => e > 4);
console.log(filter);
//reduce
const reduce = filter.reduce((acc, cv) => acc + cv);
console.log(reduce);
