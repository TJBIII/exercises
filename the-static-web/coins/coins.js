/*
  Input: 0.67
  Output:
  {
    quarters: 2,
    dimes: 1,
    nickels: 1,
    pennies: 2
  }

*/

function coinCounter (amount) {
  // Initialize a JavaScript object to hold the coins
  var coinPurse = {};


  coinPurse.quarters = Math.floor(amount / .25);
  amount = (amount - coinPurse.quarters * 0.25).toFixed(2);

  console.log("amount after quarters",  amount);

  coinPurse.dimes = Math.floor(amount / .10);
  amount = (amount - coinPurse.dimes * 0.1).toFixed(2);
  console.log("amount after dimes",  amount);

  coinPurse.nickels = Math.floor(amount / 0.05);
  amount = (amount - coinPurse.nickels * 0.05).toFixed(2);
  console.log("amount after nickels",  amount);

  
  coinPurse.pennies = Math.floor(amount / 0.01);

  return coinPurse;
}

var coins = coinCounter(0.95);
console.log(coins);