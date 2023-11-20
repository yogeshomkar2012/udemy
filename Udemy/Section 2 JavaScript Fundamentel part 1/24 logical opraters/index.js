const hasDriversLicence = true; //A
// const hasGoodVision = true; // B
const hasGoodVision = false; // B

console.log(hasDriversLicence && hasGoodVision);
console.log(hasDriversLicence || hasGoodVision);
console.log(!hasDriversLicence);

// const yogeshCanDrive = hasDriversLicence && hasGoodVision;
const yogeshCanDrive = hasDriversLicence || hasGoodVision;
if (!yogeshCanDrive) {
  console.log(`yogesh Can drive`);
} else {
  console.log("yogesh not Able to drive");
}
if (yogeshCanDrive) {
  console.log(`yogesh Can drive`);
} else {
  console.log("yogesh not Able to drive");
}
