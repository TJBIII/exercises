var element = document.getElementById("sonnet");

//Take the contents of the sonnet div and place it in a variable
var sonnetText = element.innerHTML;

//Find and output the starting position of the word "orphans"
var orphanPosition = sonnetText.indexOf('orphans');
console.log("orphan position:", orphanPosition);

//Output the number of characters in the sonnet
var sonnetLength = sonnetText.length;
console.log("sonnet length:", sonnetLength);

//Replace the first occurance of the string "winter" with "yuletide"
sonnetText = sonnetText.replace("winter", "yuletide");

//Replace all occurances of the string "the" with "a large"
sonnetText = sonnetText.replace(/the/g, "a large");

//Set the content of the sonnet div with the new string
element.innerHTML = sonnetText;