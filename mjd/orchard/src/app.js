// "use strict";

// function Plant () {
//   this.height = 0;
// }

// Plant.prototype.increaseHeight = function (growth) {
//   this.height += growth;
// }

// Plant.prototype.decreaseHeight = function (decay) {
//   this.height -= decay;
// }



// function Tree() {
//   this.branches = 0;
//   this.tallestTen = 0;

// }
// Tree.prototype = new Plant();

// Tree.prototype.grow = function (amount) {
//   this.height += amount;

//   if (Math.floor(this.height / 10) > this.tallestTen){
//     this.branches += 1;
//     this.tallestTen += 1;
//   }
// }

// Tree.prototype.trim = function (amount) {
//   this.height -= amount;
//   this.branches -= 1;
// }




// var PearTree = new Tree();
// // console.log("PearTree", PearTree);
// var OakTree = new Tree();

// var outputEl = document.getElementById("output");
// var outputHTML;

// var count = 0;
// var intervalID = window.setInterval(runStep, 1000);

// function runStep() {

//   count++;
//   if (count >= 30){
//      clearInterval(intervalID);
//   }

//   if(count % 10 === 0){
//     PearTree.trim(4);
//     OakTree.trim(8);
//   }

//   PearTree.grow(3);
//   OakTree.grow(7);

//   outputHTML = `<div><p>Pear tree is now ${PearTree.height}cm and has ${PearTree.branches} branches</br>`;
//   outputHTML += `OakTree tree is now ${OakTree.height}cm and has ${OakTree.branches} branches</p></div>`;

//   outputEl.innerHTML += outputHTML;
// }



//height gets passed from Tree to Plant to set the initial height
  //http://es6-features.org/#ClassInheritance
  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super 

"use strict";

class Plant {
  constructor (height) {
    this.height = height;
  }

  increaseHeight (growth) {
    this.height += growth;
  }

  decreaseHeight (decay) {
    this.height -= decay;
  }
}


class Tree extends Plant {
  constructor (height) {
    super(height);
    this.branches = 0;
    this.tallestTen = 0;
  }

  grow (amount) {
    this.height += amount;

    if (Math.floor(this.height / 10) > this.tallestTen){
      this.branches += 1;
      this.tallestTen += 1;
    }
  }

  trim (amount) {
    this.height -= amount;
    this.branches -= 1;
  }
}



var PearTree = new Tree(20);
 // console.log("PearTree", PearTree);
var OakTree = new Tree(30);

var outputEl = document.getElementById("output");
var outputHTML;

var count = 0;
var intervalID = setInterval(runStep, 1000);

function runStep() {

  count++;
  if (count >= 30){
     clearInterval(intervalID);
  }

  if(count % 10 === 0){
    PearTree.trim(4);
    OakTree.trim(8);
  }

  PearTree.grow(3);
  OakTree.grow(7);

  outputHTML = `<div><p>Pear tree is now ${PearTree.height}cm and has ${PearTree.branches} branches</br>`;
  outputHTML += `OakTree tree is now ${OakTree.height}cm and has ${OakTree.branches} branches</p></div>`;

  outputEl.innerHTML += outputHTML;
}