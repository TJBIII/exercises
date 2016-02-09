/*
  .....  YOUR MISSION  .....
  1. Author functions that define the Make
      and Model of a Car and the Car itself.
  2. Create three instances of your Car that
      each have a different color.
  3. Each Car you create should inherit the
      make and model name.
*/


/*
  Create a function, Make, that has a property
   of makeName and give it the value of your
   vehicle's make.
 */

function Make() {
  this.makeName = "BMW";
}



/*
Create a function, Model, to hold the
corresponding property and value
*/

function Model() {
  this.modelName = "M3";
}



// Define the prototype of a Model?
Model.prototype = new Make();

// Define a Car

function Car(color) {
  this.color = color;
}

// Define the prototype of a Car?

Car.prototype = new Model();


// // Create the first car
var car1 = new Car('black');
console.log("car1", car1);

// // Create the second car
var car2 = new Car('blue');
console.log("car2", car2);

// // Create the third car
var car3 = new  Car('white');
console.log("car3", car3);