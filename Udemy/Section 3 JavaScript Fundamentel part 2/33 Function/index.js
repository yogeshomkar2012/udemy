function functionName(params) {
  console.log("function Body");
  const returssomting = "returning";
  return returssomting;
}
//calling/invoking/running
functionName();
console.log(functionName());

function fruiteprosecer(apple, oranges) {
    console.log(apple, oranges);
//   const juice = `juice with ${apple} apple and & ${oranges}`;
  const juice = apple && oranges > 0  ? `juice with ${apple} apple and & orange ${oranges}`:`juice with ${oranges} orange `;
  return juice;
}

const applejuice = fruiteprosecer(0, 1);
console.log(applejuice);
