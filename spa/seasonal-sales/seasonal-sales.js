function createProductObj () {
  return;
}

function createCategoryObj () {
  return;
}



var myProductRequest = new XMLHttpRequest();

myProductRequest.addEventListener("load", createProductObj);
myProductRequest.open("GET", "products.json");
myProductRequest.send();
console.log(myProductRequest);


var myCategoryRequest = new XMLHttpRequest();

myCategoryRequest.addEventListener("load", createCategoryObj);
myCategoryRequest.open("GET", "products.json");
myCategoryRequest.send();