//get reference to product output in element in DOM
var productOutputEl = document.getElementById('productOutput');


function displayProducts () {

  var myCategoryRequest = new XMLHttpRequest();
  myCategoryRequest.addEventListener("load", displayAll);
  myCategoryRequest.open("GET", "categories.json");
  myCategoryRequest.send();


  var productsData = JSON.parse(myProductRequest.responseText);
  var products = productsData.products;

  function displayAll() {

    var categoryData = JSON.parse(myCategoryRequest.responseText);
    var categories = categoryData.categories;

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
  }
}



var myProductRequest = new XMLHttpRequest();
myProductRequest.addEventListener("load", displayProducts);
myProductRequest.open("GET", "products.json");
myProductRequest.send();
