/*
const num1 = 15;
const num2 = 10;


// Equivalent to num1 = num1 + num2
var sum=num1+num2;

console.log("Sum of the given number is :", sum);
*/
/*
const prompt =require('prompt-sync')();
// Take user input
var x = parseInt(prompt("Enter first number: "));
var y = parseInt(prompt("Enter second number: "));
 
// Add two numbers
var sum = x + y;
 
// Display output
console.log("The sum of " + x + " and " + y+ " is: " + sum);
*/

function add()
{
  var x, y, z;
  x = parseInt(document.getElementById("first").value);
  y = parseInt(document.getElementById("second").value);
  z = x + y;
  document.getElementById("answer").value = z;
}

function sub()
{
  var x, y, z;
  x = parseInt(document.getElementById("first").value);
  y = parseInt(document.getElementById("second").value);
  z = x -y;
  document.getElementById("answer").value = z;
  console.log(z);
}

function alt()
{
  alert("hello");
}