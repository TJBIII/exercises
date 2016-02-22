"use strict";


function add(a, b) {
  return a + b;
}

function subtract(a, b){
  return a - b;
}

function multiply(a, b){
  return a * b;
}

function divide(a, b){
  return a / b;
}

function square(base, power){
  return Math.pow(base, power);
}

function squareRoot(a){
  return Math.sqrt(a);
}



// User Interface

// Create a user interface for a calculator. One text input and 6 buttons.
// The user will enter a number in the text input.
// The user will then press one of the buttons for an operation.
// The input field should be cleared so that a new number can be typed in.
// The user will then type in a new number and press enter.
// The resulting value of the operation should then be in the text input.

let inputEl = $('#numberInput'), 
    a,
    b,
    operator;

$('#buttons').on('click', 'button', function(){
  a = parseInt(inputEl.val());

  inputEl.val('');

  let buttonText = $(this).html();

  switch (buttonText){
    case "Add":
      operator = add;
      break;
    case "Subtract":
      operator = subtract;
      break;
    case "Multiply":
      operator = multiply;
      break;
    case "Divide":
      operator = divide;
      break;
    case "Square":
      operator = square;
      break;
    case "Square Root":
      operator = squareRoot;
      inputEl.val(operator(a));
      break;
    default:
      alert("THIS APP IS BROKEN");
  }

  inputEl.focus();
  
});


inputEl.keyup(function(e){
  if (e.keyCode === 13){
    b = parseInt(inputEl.val());
    inputEl.val(operator(a, b));
  }
});