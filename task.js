//1.Write a function add(a, b) that takes two numbers a and b as arguments and returns their sum.
function add(a,b){
    console.log(a+b);
}
add(10,20)

//2.Write a function subtract(a, b) that returns the result of subtracting b from a.
function subtract(a,b){
    console.log(a-b);
}
subtract(30,20)

//3.Write a function multiply(a, b) that takes two numbers and returns their product.
function multiply(a,b){
    console.log(a*b);
}
multiply(10,20)

//4.Write a function divide(a, b) that returns the result of dividing a by b. If b is zero, the function should return a message saying "Cannot divide by zero."
function divide(a, b){
    if (b === 0) {
        console.log("Cannot divide by zero.");
      } else {
        console.log(a/b);
      }
}
divide(8, 0)