function toCelsius (temp) {
  return ((temp - 32) * (5/9)); 
}

function toFahrenheit (temp) {
  return ((temp * (9/5)) + 32);
}

// Get a reference to div element where answer will go
var answerElement = document.getElementById('answer');

// Get a reference to the button element in the DOM
var button = document.getElementById("converter");
var clear = document.getElementById('clear');

//This function will clear the fields
function clearFields(clickEvent) {
  document.getElementById('fahrenheit').checked = false;
  document.getElementById('celsius').checked = false;
  document.getElementById('temp').value = "";
  document.getElementById('answer').innerHTML = "";
}

// This function should determine which conversion should
// happen based on which radio button is selected.
function determineConverter (clickEvent) {
  var temp = document.getElementById('temp').value
  console.log("temp to convert", temp);

  //store converted temp in newTemp variable
  var newTemp;

  var fahrenheitChecked = document.getElementById('fahrenheit').checked
  var celsiusChecked = document.getElementById('celsius').checked

  if (fahrenheitChecked) {
    newTemp = toFahrenheit(temp);
    if (newTemp > 90){
      answerElement.style.color = "red";
    } else if (newTemp < 32) {
      answerElement.style.color = "blue";
    } else {
      answerElement.style.color = "green";
    }
  } else if (celsiusChecked) {
    newTemp = toCelsius(temp);
    if (newTemp > 32){
      answerElement.style.color = "red";
    }
    if (newTemp < 0){
      answerElement.style.color = "blue";
    } else {
      answerElement.style.color = "green";
    }
  } else {
    console.log("Radio button not selected");
  }

  answerElement.innerHTML = newTemp.toFixed(2);
}

// Assign a function to be executed when the button is clicked
button.addEventListener("click", determineConverter);
clear.addEventListener("click", clearFields);

addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {  //checks whether the pressed key is "Enter"
        e.preventDefault();
        determineConverter();
    }
});