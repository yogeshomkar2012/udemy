"use strict";
const greet = (greeting) => {
  return (name) => {
    console.log(`${greeting} ${name}`);
  };
};
const greeterHey = greet("Hey");
greeterHey("yogesh");
greeterHey("ramesh");
//simplyfing function

const greeet = (greetings) => (name) => console.log(`${greetings} ${name}`);
const greeetHey = greeet("hello");
greeetHey("simplyfing function");
