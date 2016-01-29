// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var meatPrices = {
    "Turkey": 3,
    "Ham": 4,
    "Chicken": 5
  };

  // Augment the original object with another method
  maker.addMeat = function(option) {
    maker.updatePrice(meatPrices[option]);
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker);