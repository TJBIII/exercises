// Variable to hold the final price. Default to 0.
var finalSandwichPrice = 0;

// Variable to hold topping that the user selects
var selectedTopping;

// Get a reference to the <select> element that has all the meat options
var meatChooser = document.getElementById("meat-chooser");

for (var i = 0; i < meatChooser.options.length; i++){
  if (meatChooser.options[i].selected){
    finalSandwichPrice += SandwichMaker.addMeat(meatChooser.options[i])
  }
}

/* 
  A <select> element broadcasts a change event, so you listen for it
  and get the value of the topping from your augmented IIFE
*/
meatChooser.addEventListener("change", function(event) {
  // Get the value chosen from the DOM
  selectedTopping = event.target.value;


  for (var i = 0; i < meatChooser.options.length; i++){
    if (meatChooser.options[i].selected){
      console.log(meatChooser.options[i].value);
      finalSandwichPrice += SandwichMaker.addMeat(meatChooser.options[i].value)
    }
  }

  console.log(finalSandwichPrice);
  // Determine the price of the topping chosen

  // Add the topping to the SandwichMaker to increase the total price
});