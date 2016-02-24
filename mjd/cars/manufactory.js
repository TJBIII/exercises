function Vehicle () {
  this.manufactured_date = Date.now();
  this.model = null;
  this.tires = [];
  this.currentSpeed = 0;
  // this.direction = null;
}

Vehicle.prototype.accelerateTo = function (speed) {
  if (speed <= 0 || speed > 300){
    return;
  }
  this.currentSpeed = speed;
};

Vehicle.prototype.turn = function (whichWay){
  this.direction = whichWay;
}


 Vehicle.prototype.changeManufacturedDate = function (newDate) {
  this.manufactured_date = newDate;
 };

/*
  Create a function named Car with one property named `manufactured_date`
 */

 function Car () {
  
 }
 Car.prototype = new Vehicle();


 function Van () {
  
 }
 Van.prototype = new Vehicle();


 function Truck () {

 }
 Truck.prototype = new Vehicle();

 



function Tire () {

}


function Pirelli () {

}
Pirelli.prototype = new Tire();
 

function PExtreme () {

}

PExtreme.prototype = new Pirelli();


var tire1 = new PExtreme();
var tire2 = new PExtreme();
var tire3 = new PExtreme();
var tire4 = new PExtreme();
/*
  Create a function named Make. 
  Set its prototype to the Car function.
  Define a property `manufacaturer` with a default value of empty string.
 */

 function Make (maker) {
  this.manufacturer = maker;
 }


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
// console.log("ferrari", ferrari);


/*
    Create a new Model object of your favorite model (e.g. Clubman)
*/

var enzo = new Model();
enzo.modelName = "Enzo";

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


// console.log("enzo2", enzo2);


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






var aNewCar = new Car();

aNewCar.model = enzo1;

console.log("aNewCar", aNewCar);

aNewCar.tires.push(tire1, tire2, tire3, tire4);
// aNewCar.tires = [tire1, tire2, tire3, tire4];

aNewCar.accelerateTo(30);

aNewCar.turn("left");
