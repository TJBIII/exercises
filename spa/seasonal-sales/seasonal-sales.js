//get reference to product output in element in DOM
var productOutputEl = document.getElementById('productOutput');


function displayProducts () {
  var productsData = JSON.parse(myProductRequest.responseText);
  console.log("productsData", productsData);

  var products = productsData.products;

  for (var i=0; i < products.length; i++){
    var currentProduct = products[i];
    console.log("currentProduct", currentProduct);
    var productName = currentProduct.name;
    var productPrice = currentProduct.price;
    console.log("productName", productName);  
    var productHTML = `<div class="card"><h4>Product: ${productName}</h4><h4>Price: $${productPrice}</h4></div>`;
    productOutputEl.innerHTML += productHTML;
  }
}




function displayCategories () {
  return;
}



var myProductRequest = new XMLHttpRequest();

myProductRequest.addEventListener("load", displayProducts);
myProductRequest.open("GET", "products.json");
myProductRequest.send();
console.log(myProductRequest);


var myCategoryRequest = new XMLHttpRequest();

myCategoryRequest.addEventListener("load", displayCategories);
myCategoryRequest.open("GET", "products.json");
myCategoryRequest.send();