var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];


var hohohoElement = document.getElementById("reindeer");

var reindeerHTML = "<ul>";

for (var i = 0; i < colors.length; i++) {
  reindeerHTML += '<li>' + colors[i] + ' ' + reindeer[i] + '</li>';
}

reindeerHTML += '</ul>';


hohohoElement.innerHTML = reindeerHTML;