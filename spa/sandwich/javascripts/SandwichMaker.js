var SandwichMaker = (function() {

  // Private variable to store the price
  var totalPrice = 0;

  // Return the public interface that other code can interact with
  return {
    updatePrice: function(priceToAdd){
      totalPrice += priceToAdd;
    },

    getTotal: function(){
      return totalPrice;
    },

    addTopping: function(toppingPrice) {
      totalPrice += toppingPrice;
    }
  };
})();