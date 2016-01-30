// Variable to hold the final price. Default to 0.
var finalSandwichPrice = 0;


//reference to the output div
var outputEl = document.getElementById("output");



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


meatChooser.addEventListener("change", calcPrice);
condimentsChooser.addEventListener("change", calcPrice);
cheeseChooser.addEventListener("change", calcPrice);
veggieChooser.addEventListener("change", calcPrice);
breadChooser.addEventListener("change", calcPrice)


function calcPrice() {

  var outputHTML = "<h1>Your order</h1>";

  // Variable to hold the final price. Default to 0.
  var finalSandwichPrice = 0;

  //loop through and get all selected meat options 
  for (var i = 0; i < meatChooser.options.length; i++){
    if (meatChooser.options[i].selected){
      console.log(meatChooser.options[i].value, SandwichMaker.addMeat(meatChooser.options[i].value));
      outputHTML += `<div> ${meatChooser.options[i].value} : $${SandwichMaker.addMeat(meatChooser.options[i].value)}</div>`;

      // Add the topping to the SandwichMaker to increase the total price
      finalSandwichPrice += SandwichMaker.addMeat(meatChooser.options[i].value)
    }
  }

  //loop through and get all selected cheese options
  for (var i = 0; i < cheeseChooser.options.length; i++){
    if (cheeseChooser.options[i].selected){
      console.log(cheeseChooser.options[i].value, SandwichMaker.addCheese(cheeseChooser.options[i].value));
      outputHTML += `<div> ${cheeseChooser.options[i].value} : $${SandwichMaker.addCheese(cheeseChooser.options[i].value)}</div>`;

      // Add the topping to the SandwichMaker to increase the total price
      finalSandwichPrice += SandwichMaker.addCheese(cheeseChooser.options[i].value)
    }
  }

  //loop through and get all selected condiment options
  for (var i = 0; i < condimentsChooser.options.length; i++){
    if (condimentsChooser.options[i].selected){
      console.log(condimentsChooser.options[i].value, SandwichMaker.addCondiments(condimentsChooser.options[i].value));
      outputHTML += `<div> ${condimentsChooser.options[i].value} : $${SandwichMaker.addCondiments(condimentsChooser.options[i].value)}</div>`;

      // Add the topping to the SandwichMaker to increase the total price
      finalSandwichPrice += SandwichMaker.addCondiments(condimentsChooser.options[i].value)
    }
  }


  // loop through and get all selected veggie options
  for (var i = 0; i < veggieChooser.options.length; i++){
    if (veggieChooser.options[i].selected){
      console.log(veggieChooser.options[i].value, SandwichMaker.addVeggies(veggieChooser.options[i].value));
      outputHTML += `<div> ${veggieChooser.options[i].value} : $${SandwichMaker.addVeggies(veggieChooser.options[i].value)}</div>`;
      // Add the topping to the SandwichMaker to increase the total price
      finalSandwichPrice += SandwichMaker.addVeggies(veggieChooser.options[i].value)
    }
  }

  // loop through and get selected bread option
  for (var i = 0; i < breadChooser.options.length; i++){
    if (breadChooser.options[i].selected){
      console.log(breadChooser.options[i].value, SandwichMaker.addBread(breadChooser.options[i].value));
      outputHTML += `<div> ${breadChooser.options[i].value} Bread : $${SandwichMaker.addBread(breadChooser.options[i].value)}</div>`;
      // Add the topping to the SandwichMaker to increase the total price
      finalSandwichPrice += SandwichMaker.addBread(breadChooser.options[i].value)
    }
  }


  console.log(finalSandwichPrice);
  outputHTML += `<h2> Total : $${finalSandwichPrice}</h2>`;

  outputEl.innerHTML = outputHTML;

}