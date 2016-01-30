// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var veggiesPrices = {
    "Olives": 1,
    "Peppers": 2,
    "Lettuce": 1,
    "Tomatos": 1
  };

  // Augment the original object with another method
  maker.addVeggies = function(option) {
    return veggiesPrices[option];
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker);