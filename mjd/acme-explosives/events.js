"use strict";


$('#menu').change(function() {
  selectedCatId = parseInt($('#menu ').val());
  console.log("selectedCatId", selectedCatId);
  loadData();
});