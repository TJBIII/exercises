/*
  Create a function that multiplies two numbers
  passed in as arguments. Return the product.
 */
function mul(x, y) {
  return x * y;
}


/*
  Create a function that adds two numbers
  passed in as arguments. Return the sum.
 */
function add(x, y) {
  return x + y;
}

/*
  Create a function that subtracts two numbers
  passed in as arguments. Return the difference.
 */
function sub(x, y){
  return x - y;
}

/*
  Create a function that divides two numbers
  passed in as arguments. Return the quotient.
 */
function div(x, y) {
  return x / y;
}

/*
  Create a function that accepts three arguments.
    1. First number
    2. Second number
    3. A function that performs an operation on them

  Return the value of the operation.
 */

function operate(x, y, func) {
  return func(x, y);
}

//reference to answer div
var ansEl = document.getElementById('answer');

//get reference to input fields
var input1 = document.getElementById('x');
var input2 = document.getElementById('y');

//get reference to each button in the DOM
var addBtnEl = document.getElementById('addBtn');
var mulBtnEl = document.getElementById('mulBtn');
var subBtnEl = document.getElementById('subBtn');
var divBtnEl = document.getElementById('divBtn');


function getNum1(){
  return parseFloat(input1.value);
}

function getNum2() {
  return parseFloat(input2.value);
}

var ans;

addBtnEl.addEventListener("click", function() {
  x = getNum1();
  y = getNum2();
  ans = operate(x, y, add);
  ansEl.innerHTML = ans;
})

mulBtnEl.addEventListener("click", function() {
  x = getNum1();
  y = getNum2();
  ans = operate(x, y, mul);
  ansEl.innerHTML = ans;
})

subBtnEl.addEventListener("click", function() {
  x = getNum1();
  y = getNum2();
  ans = operate(x, y, sub);
  ansEl.innerHTML = ans;
})

divBtnEl.addEventListener("click", function() {
  x = getNum1();
  y = getNum2();
  ans = operate(x, y, div);
  ansEl.innerHTML = ans;
})
