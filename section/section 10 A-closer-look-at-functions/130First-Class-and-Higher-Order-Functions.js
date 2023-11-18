"use strict";
console.log(`
store function in variables of properties \n
const add = (a,b)=> a + b;
const counter = {
    value:23,
    inc:function(){this.value++;}
} 
pass fuction as arguments to other functions:
const greet = ()=> console.log('hey yogesh');
btnClose.addEventListner("click",greet)
`);
