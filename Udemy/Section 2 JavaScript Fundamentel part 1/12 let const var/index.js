console.log(`
1. var
is a function-scoped variable, which means that it can 
be accessed anywhere within the function in which it 
is declared.

2. let
is a block-scoped variable, which means that it can 
only be accessed within the block of code in which it 
is declared.


3. const
is a constant variable, which means that its value 
cannot be changed once it has been assigned.

`);
// var is function-scoped
function myFunction() {
  var myVar = 1;
  console.log(myVar); // 1
  {
    // let is block-scoped
    let myLet = 2;
    console.log(myLet); // 2
  }
  console.log(myLet); // Error: myLet is not defined
}

// const is a constant variable
const myConst = 3;
console.log(myConst); // 3
myConst = 4; // Error: Assignment to constant variable
