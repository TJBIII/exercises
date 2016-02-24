/*
  Create a function named Car with one property named `manufactured_date`
 */

 function Car () {
  this.manufactured_date = Date.now();
 }

 Car.prototype.changeManufacturedDate = function (newDate) {
  this.manufactured_date = newDate;
 };

 
/*
  Create a function named Make. 
  Set its prototype to the Car function.
  Define a property `manufacaturer` with a default value of empty string.
 */

 function Make (maker) {
  this.manufacturer = maker;
 }

 Make.prototype = new Car();



/*
    Create a function named Model. 
    Set its prototype to the Make function.
    Define a property `modelName` with a default value of empty string.
*/

function Model () {
  this.modelName = "";
}

Model.prototype = new Make();


/*
    Create a new Make object - your favorite one (e.g. Mini)
*/

var ferrari = new Make("Ferrari");
console.log("ferrari", ferrari);


/*
    Create a new Model object of your favorite model (e.g. Clubman)
*/

var enzo = new Model();
// enzo.manufacturer = "Ferrari";
enzo.modelName = "Enzo";
// console.log("enzo", enzo);

/*
    Being an avid car collector, you own three different cars all of
    same model from your favorite manufacturer.

    Create three new objects for each of your three favorite cars.
*/
function Ferrari(model){
  this.modelName = model;
}

Ferrari.prototype = new Make("Ferrari");


function Enzo (name) {
  this.name = name;
}

Enzo.prototype = new Ferrari("Enzo")

var enzo1 = new Enzo("Betty");
var enzo2 = new Enzo("Sunshine");
var enzo3 = new Enzo("Bob");

// var enzo2 = new Model();
// enzo2.manufacturer = "Ferrari";
// enzo2.modelName = "Enzo";

// var enzo3 = new Model();
// enzo3.manufacturer = "Ferrari";
// enzo3.modelName = "Enzo";


console.log("enzo2", enzo2);


/*
    Being a rich, avid car collector, you own 2 cars from your second
    favorite manufacturer. You also one 1 car from your third favorite
    manufacturer.
*/

function Porsche (model) {
  this.modelName = model;
}

Porsche.prototype = new Make("Porsche");

var porsche1 = new Porsche("911 GT3 RS");

var porsche2 = new Model();
porsche2.manufacturer = "Porsche";
porsche2.modelName = "911 GT3 RS";


var lambo1 = new Model();
lambo1.manufacturer = "Lamborghini";
lambo1.modelName = "Gallardo";

