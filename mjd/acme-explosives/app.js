"use strict";

// let categoriesPromise = Explosives.loadInventory('categories.json');
// let typesPromise = Explosives.loadInventory('types.json');
// let productsPromise = Explosives.loadInventory('products.json');

let selectedCatId;


let categoriesData;
let typesData;
let productsData;

function loadData () {

  if (!(categoriesData || typesData || productsData)){
    Explosives.loadInventory('categories.json').then(
      function(response) {
        categoriesData = response.categories;
        return Explosives.loadInventory('types.json');
      }, function(error) {
        console.error("Failed!", error);
      }
    ).then(
      function(response) {
        typesData = response.types;
        return Explosives.loadInventory('products.json');
      }, function(error) {
        console.error("Failed!", error);
      }
    ).then(
      function(response) {
        productsData = response.products;
        console.log("ran");
        // updateDom();
        updatePage();
      }, function(error) {
        console.error("Failed!", error);
      }
    );
  } else {
  console.log('categories', categoriesData);
  console.log('types', typesData);
  console.log('products', productsData);
  updatePage()
  }
}

const $outputEl = $('#output');
let outputHTML;
let productCount;

function updatePage () {
  productCount = 0;
  outputHTML = "";

  let selectedCatObj = categoriesData[selectedCatId];
  console.log("selectedCatObj", selectedCatObj);
  let selectedCatStr = selectedCatObj.name;

  let currentType;
  let currentProduct;
  let currentTypeCat;

  //loop through types
  for (let i = 0; i < typesData.length; i++){
    currentType = typesData[i];
    // console.log("currentType", currentType);
    currentTypeCat = currentType.category;

    //if the type doesnt belong to the category then break
    if (currentTypeCat !== selectedCatId){
      continue;
    }

    // console.log("currentType.id", currentType.id);

    //loop through products
    for (let j=0; j < productsData.length; j++){
      currentProduct = productsData[j];

      if (currentProduct.type !== currentType.id){
        continue;
      }

      if (productCount % 3 === 0 && productCount > 0){
        outputHTML += `</div>`;
      }
      if (productCount % 3 === 0){
        outputHTML += `<div class="row">`;
      }
      outputHTML += `<div class="col-md-4 card"><h4>Category:</h4><p>${selectedCatObj.name.toUpperCase()}</p>`;
      outputHTML += `<h4>Type:</h4><p>${currentType.name.toUpperCase()}</p>`;
      outputHTML += `<h4>Product Name:</h4><p>${currentProduct.name.toUpperCase()}</p>`;
      outputHTML += `<h4>Description:</h4><p>${currentProduct.description}</p></div>`;
      productCount++;
    }

  }
  outputHTML += `</div>`;
  $outputEl.html(outputHTML);

}


