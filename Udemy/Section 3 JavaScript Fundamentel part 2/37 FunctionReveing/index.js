const calcAge = (year) => {
  const currentYear = new Date().getFullYear();
  const retir = currentYear - year;
  return retir;
};
const YearsUntilRetirment = (birthYear, name) => {
  const age = calcAge(birthYear);
  const retirment = 65 - age;
  if (retirment > 0) {
    console.log(`Mr ${name} You are Will Retire ${retirment} Years`);
    return retirment;
  } else {
    console.log(`Mr ${name} has alredy Retired`);
    return -1;
  }
  return retirment;
};

console.log(YearsUntilRetirment(1984, "yogesh"));
console.log(YearsUntilRetirment(1950, "yogesh"));
