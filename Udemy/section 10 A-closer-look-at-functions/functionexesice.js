console.log(` 
there are 6 ways in function
Named Functions
Anonimus function
Arrow Funtion
IIFE
Heigher Order function
Constructor Function`);
//anonimus function
let bookings = [];
const CreateBookings = function (
  flightNum = "LH@#$",
  NumPassanger = 1,
  price = 20
) {
  const booking = {
    flightNum,
    NumPassanger,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

CreateBookings("yogeh");
CreateBookings("yogeh", 10);
CreateBookings("yogeh", 10, 180);

// const loop = bookings.map((e) => entries);

// console.table(loop);
console.log(
  bookings.map((e, i) => `${i + 1} : ${e.NumPassanger} -> ${e.flightNum}`)
);
