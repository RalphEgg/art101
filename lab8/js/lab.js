// index.js - Lab 8 js file
// Author: Davis Goodman 
// Date: 5/8/2023

function double(x){
  return (x * 2);
}

// Test Function
console.log("What is 2x2? ", double(2))
console.log("What is 10x2? ", double(10))

// Array
numbers = [3, 5, 12, 30, 50]
console.log("My Array: ", numbers);

// Function Results
var result = numbers.map(double)
console.log("Doubled Array: ", result);

var result = numbers.map(function(x){
  return x * (3/4);
})
console.log("3/4ths Array: ", result);