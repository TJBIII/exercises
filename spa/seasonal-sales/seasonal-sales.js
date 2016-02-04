//get reference to product output in element in DOM
var productOutputEl = document.getElementById('productOutput');

var selectEl = document.getElementById('season-select');

var productsData;
var categoryData;

var products;
var categories;

function displayProducts () {

  var myCategoryRequest = new XMLHttpRequest();
  myCategoryRequest.addEventListener("load", displayAll);
  myCategoryRequest.open("GET", "categories.json");
  myCategoryRequest.send();


  productsData = JSON.parse(myProductRequest.responseText);
  products = productsData.products;

  function displayAll() {

    categoryData = JSON.parse(myCategoryRequest.responseText);
    categories = categoryData.categories;

    selectEl.addEventListener("change", update);

    update();
/*
    // console.log(products);
    // console.log(categories);

    for (var i=0; i < products.length; i++){
      var currentProduct = products[i];
      // console.log("currentProduct", currentProduct);
      var productName = currentProduct.name;
      var productPrice = currentProduct.price;
      // console.log("productName", productName);  

      var productCatId = currentProduct.category_id;

      for (var category in categories){
        var currentCat = categories[category];

        var catId = currentCat.id;

        if (catId === productCatId){
          var productDept = currentCat.name;
        }
      }

      var productHTML = `<div class="card"><h4>Product: ${productName}</h4>`;
      productHTML += `<h4>Price: $${productPrice}</h4>`;
      productHTML += `<h4>Dept: ${productDept}</h4></div>`;
      productOutputEl.innerHTML += productHTML;
    }

    selectEl.addEventListener("change", function(){
        console.log("changed!", selectEl.value);
      })
  } */
  }
}

function update() {
  productOutputEl.innerHTML = "";

  var selectedDiscountId = selectEl.value;
  console.log("selectedDiscountId", selectedDiscountId);

  for (var i=0; i < products.length; i++){
    var currentProduct = products[i];
    // console.log("currentProduct", currentProduct);

    var productName = currentProduct.name;
    // console.log("productName", productName);

    var productPrice = currentProduct.price;


    var productCatId = currentProduct.category_id;
    //console.log("productCatId", productCatId);

    for (var category in categories){
      var currentCat = categories[category];
      var catDiscount = currentCat.discount;

      var catId = currentCat.id;

      if (catId === productCatId){
        var productDept = currentCat.name;
      }

      if (productCatId.toString() === selectedDiscountId){
        //console.log("discount applied");
        productPrice =(productPrice * (1-catDiscount)).toFixed(2);
      }
    }

    var productHTML = `<div class="card"><h4>Product: ${productName}</h4>`;
    productHTML += `<h4>Price: $${productPrice}</h4>`;
    productHTML += `<h4>Dept: ${productDept}</h4></div>`;
    productOutputEl.innerHTML += productHTML;
  }

}



var myProductRequest = new XMLHttpRequest();
myProductRequest.addEventListener("load", displayProducts);
myProductRequest.open("GET", "products.json");
myProductRequest.send();
