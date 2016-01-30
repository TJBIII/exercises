// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var cheesePrices = {
    "American": 1,
    "Provolone": 1,
    "Swiss": 2
  };

  // Augment the original object with another method
  maker.addCheese = function(option) {
    return cheesePrices[option];
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker);