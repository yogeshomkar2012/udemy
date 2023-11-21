/**  
 CHALLENGE #4
Let's improve Steven's tip calculator even more, 
this time using loops!

Your tasks:

1).Create an array called bills containing all 
10 test bill values.

2).Create empty arrays for the tips and the 
totals (tips and totals)

3).Use the calcTip function we wrote before 
(included in the starter code) to calculate 
tips and total values (bill + tip) for every 
bill value in the bills array. Use a for loop 
to perform the 10 calculations!



TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86, and 52.
 */
const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
  };
  const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
  const tips = [];
  const totals = [];
  for (let i = 0; i < bills.length; i++) {
    let tip = calcTip(bills[i])
    let total = bills[i] + tip
    tips.push(tip)
    totals.push(total)
  }
  const calcAverage = function(arr){
   let sum = 0;
    for(let i = 0; i < arr.length;i++){
      sum += arr[i]
    }
    return sum / arr.length
  }
  
  // console.log(bills,tips,totals)
  console.log(calcAverage(totals))