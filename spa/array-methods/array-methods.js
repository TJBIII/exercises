
// Copy the code below into the JavaScript file
// In your HTML, create an text input and a button.
// The text input should only accept letters. No numbers.
// Implement the logic in the reversal function that reverses the order of the characters in the string, and outputs the result in the DOM, below the text input.
// Implement the logic in the alphabits function that return the characters in alphabetical order, and outputs the result in the DOM, below the text input.
// Implement the logic in the palindrome function that determine whether the string is a palindrome. If it is, display the text "Your string is a palidrome" in the DOM, below the text input.
// When the user presses the enter key in the text input, or clicks the button, set the value of the testString variable (see below) to the value of the input.
// The output of each of the functions should immediately appear as well.


//get reference to the button
var buttonEl = document.getElementById("btn");


//get reference to text input
var inputEl = document.getElementById("userInput");


//get reference to output
var outputEl = document.getElementById("output");


inputEl.addEventListener("keyup", function() {
  if (inputEl.value.match(/[0-9]/g)){

    //remove any numbers when typed in
    var l = inputEl.value.length;
    inputEl.value = inputEl.value.slice(0, l - 1);
  }
});

buttonEl.addEventListener("click", makeOutput);
inputEl.addEventListener("keydown", function(e) {
  if (e.keyCode === 13){
    makeOutput();
  }
});

function makeOutput() {
  testString = inputEl.value;
  
  outputEl.innerHTML = `<div>Reversed: ${reversal(testString)}</div>`;
  outputEl.innerHTML += `<div>Alphabetical: ${alphabits(testString)}</div>`;
  outputEl.innerHTML += `<div>${palindrome(testString)}</div>`;
}


function reversal(s) {
  return s.split("").reverse().join("");
}

function alphabits(s) {
  return s.split("").sort().join("");
}

function palindrome(s) {
  if (s === reversal(s)){
    return "Your string is a palindrome!";
  } else {
    return "Not a palindrome!"
  }
}