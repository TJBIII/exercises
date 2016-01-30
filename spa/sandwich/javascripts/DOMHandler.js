// Variable to hold the final price. Default to 0.
var finalSandwichPrice = 0;


// Get a reference to the <select> element that has all the meat options
var meatChooser = document.getElementById("meat-chooser");

// Get a reference to the <select> element that has all the bread options
var breadChooser = document.getElementById("bread-chooser");

// Get a reference to the <select> element that has all the cheese options
var cheeseChooser = document.getElementById("cheese-chooser");

// Get a reference to the <select> element that has all the condiment options
var condimentsChooser = document.getElementById("condiments-chooser");

// Get a reference to the <select> element that has all the veggie options
var veggieChooser = document.getElementById("veggies-chooser");



//Meat
meatChooser.addEventListener("change", function(event) {
  //loop through and get all selected options 
  for (var i = 0; i < meatChooser.options.length; i++){
    if (meatChooser.options[i].selected){
      console.log(meatChooser.options[i].value);

      // Add the topping to the SandwichMaker to increase the total price
      finalSandwichPrice += SandwichMaker.addMeat(meatChooser.options[i].value)
    }
  }

  console.log(finalSandwichPrice);
});

//Bread
breadChooser.addEventListener("change", function(event) {
  selectedBread = event.target.value;
  finalSandwichPrice += SandwichMaker.addBread(selectedBread);
  console.log(finalSandwichPrice);
});

//Cheese
cheeseChooser.addEventListener("change", function(event) {
  for (var i = 0; i < cheeseChooser.options.length; i++){
    if (cheeseChooser.options[i].selected){
      console.log(cheeseChooser.options[i].value);

      // Add the topping to the SandwichMaker to increase the total price
      finalSandwichPrice += SandwichMaker.addCheese(cheeseChooser.options[i].value)
    }
  }

  console.log(finalSandwichPrice);
});


//Condiments
condimentsChooser.addEventListener("change", function(event) {
  for (var i = 0; i < condimentsChooser.options.length; i++){
    if (condimentsChooser.options[i].selected){
      console.log(condimentsChooser.options[i].value);

      // Add the topping to the SandwichMaker to increase the total price
      finalSandwichPrice += SandwichMaker.addCondiments(condimentsChooser.options[i].value)
    }
  }

  console.log(finalSandwichPrice);
});


//Veggies
veggieChooser.addEventListener("change", function(event) {
  for (var i = 0; i < veggieChooser.options.length; i++){
    if (veggieChooser.options[i].selected){
      console.log(veggieChooser.options[i].value);

      // Add the topping to the SandwichMaker to increase the total price
      finalSandwichPrice += SandwichMaker.addVeggies(veggieChooser.options[i].value)
    }
  }

  console.log(finalSandwichPrice);
});