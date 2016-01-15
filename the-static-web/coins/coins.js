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
  amount -= coinPurse.quarters * 0.25;

  coinPurse.dimes = Math.floor(amount / .10);
  amount -= coinPurse.dimes * 0.1;

  coinPurse.nickels = Math.floor(amount / 0.05);
  amount -=  coinPurse.nickels * 0.05;

  coinPurse.pennies = Math.floor(amount / 0.01);
  amount -= coinPurse.pennies * 0.01;

  return coinPurse;
}

var coins = coinCounter(0.67);
console.log(coins);