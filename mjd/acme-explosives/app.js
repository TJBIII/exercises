"use strict";

Explosives.loadInventory('categories.json')
.then(function(response) {
  console.log("Success!", response);
}, function(error) {
  console.error("Failed!", error);
});