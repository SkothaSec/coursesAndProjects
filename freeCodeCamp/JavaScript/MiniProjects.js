//------------Create Shopping List with arrays: item, quantity------------//
var myList = [
    ["Juice", 10], 
    ["Crackers", 40], 
    ["Bananas", 100], 
    ["Yogurt", 120],
    ["Pizza", 1]
];

//------------create function named reusable function that prints "Hi World" to dev console------------//
function reusableFunction() {
    console.log("Hi World");
}

//call the function
reusableFunction();


//-----------Create a function: accepts two arguments, outputs their sum to the dev console.------------//
/*
Parameters are variables that act as placeholders for the values that are to be input to a function when it is called. 
When a function is defined, it is typically defined along with one or more parameters. 
The actual values that are input (or "passed") into a function when it is called are known as arguments.
*/

function functionWithArgs(int1, int2) {
  console.log(int1 + int2);
}

functionWithArgs(13, 8);


//------------Global Scope and Functions------------//
/* 
In JavaScript, scope refers to the visibility of variables. 
Variables which are defined outside of a function block have Global scope. 
This means, they can be seen everywhere in your JavaScript code.

Variables which are used without the var keyword are automatically created in the global scope. 
This can create unintended consequences elsewhere in your code or when running a function again. 
You should always declare your variables with var.
*/
// Declare your variable here
var myGlobal = 10;

function fun1() {
  // Assign 5 to oopsGlobal Here
  oopsGlobal = 5;
}

// Only change code above this line
function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}

//-------------Local Scope and Functions-------------//
/*
Variables which are declared within a function, as well as the function parameters have local scope. 
That means, they are only visible within that function.
*/

function myLocalScope() {
  'use strict'; // you shouldn't need to edit this line
  var myVar = 7;
  console.log(myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
console.log(myVar);

// remove or comment out the console log line outside of the function to pass the test


//---------------Global vs Local Scope in Functions-------------/
/*
It is possible to have both local and global variables with the same name. 
When you do this, the local variable takes precedence over the global variable.
*/
// Setup
var outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
  var outerWear = "sweater"
  // Only change code above this line
  return outerWear;
}

myOutfit();
//my Outfit should return "sweater" since it is local to the function


//--------------- Return a Value from a Function with Return---------------//
function timesFive(int) {
  return int * 5;
}

console.log(timesFive(5)); //should return 25
console.log(timesFive(2)); //should return 10


//--------------- Understanding Undefined Value returned from a Function ---------------//
/*
A function can include the return statement but it does not have to. 
In the case that the function doesn't have a return statement, when you call it, 
the function processes the inner code but the returned value is undefined.
*/

/*
Create a function addFive without any arguments. 
This function adds 5 to the sum variable, but its returned value is undefined.
*/
var sum = 0;

function addFive() {
  sum = sum + 5;
}

var returnedValue = addFive();


//--------------------Assignment with a Returned Value----------------//
/*
Call the processArg function with an argument of 7 and 
assign its return value to the variable processed.
*/
var processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

// Only change code below this line
var processed = processArg(7);
console.log(processed)


//------------------Stand in Line----------------//
/*
In Computer Science a queue is an abstract Data Structure where items are kept in order. 
New items can be added at the back of the queue and old items are taken off from the front of the queue.
*/
//Write a function nextInLine which takes an array (arr) and a number (item) as arguments.
//Add the number to the end of the array, then remove the first element of the array.
//The nextInLine function should then return the element that was removed.

function nextInLine(arr, item) {
  // Your code here
  arr.push(item)
  
  var removedElement = arr.shift()
  return removedElement;  // Change this line
}

// Test Setup
var testArr = [1,2,3,4,5];

// Display Code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6)); // Modify this line to test
console.log("After: " + JSON.stringify(testArr));

//--------------Use Conditional Logic with If Statements------------------//

