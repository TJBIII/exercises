"use strict";

function checkWordCount (str) {
  return str.split(" ").length < 100;
}

function duplicateCheck (str) {
  let strippedStr = str.replace(/\W/g, " ");
  strippedStr = strippedStr.replace(/\s{2}/, " ");
  let arrFromStrippedStr = strippedStr.split(" ");
  
  let strippedSet = new Set(arrFromStrippedStr);
  let arrFromStrippedSet = Array.from(strippedSet);

  // console.log("arrFromStrippedSet", arrFromStrippedSet);
  // console.log("arrFromStrippedStr", arrFromStrippedStr);

  return arrFromStrippedStr.length === arrFromStrippedSet.length;
}


function verifyAlphaNumeric (str) {
  let newStr = str.replace(/\W/g, "");
  str = str.replace(/\s/g, "")
  // console.log("str", str);
  // console.log("newStr", newStr);

  return str === newStr;
}



$('#validateBtn').click( () => {
  let text = $('#text').val();

  let outputHTML = "";
  outputHTML += `<div><p>Word count < 100: ${checkWordCount(text)}</p>`;
  outputHTML += `<p>Duplicate Check: ${duplicateCheck(text)}</p>`;
  outputHTML += `<p>AlphaNumeric Chars Present: ${verifyAlphaNumeric(text)}</p>`;

  $('#output').html(outputHTML);
});