// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var condimentsPrices = {
    "Mayo": 1,
    "Mustard": 1,
    "Relish": 1
  };

  // Augment the original object with another method
  maker.addCondiments = function(option) {
    return condimentsPrices[option];
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker);