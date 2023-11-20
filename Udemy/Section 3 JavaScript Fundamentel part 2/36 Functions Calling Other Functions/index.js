// Exmple One
const fruitProccessor = (apples, oranges) => {
  const applePieces = (fruits) => {
    return fruits * 4;
  };
  const orangePieces = (fruits) => {
    return fruits * 4;
  };
  const juice = `Juce with ${applePieces(
    apples
  )} pieces of apple and ${orangePieces(oranges)} pices of orange`;
  return juice;
};
console.log(fruitProccessor(2, 3));

// Example Two
const cutPices = (fruits) => {
  return fruits * 4;
};

const fruitProccessors = (apples, oranges) => {
  const applePieces = cutPices(apples);
  const orangePieces = cutPices(oranges);
  return `Juce with ${applePieces} pieces of apple and ${orangePieces} pices of orange`;
};
console.log(fruitProccessors(2, 3));
