// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var breadPrices = {
    "White": 2,
    "Wheat": 2,
    "Italian": 3
  };

  // Augment the original object with another method
  maker.addBread = function(option) {
    return breadPrices[option];
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker);