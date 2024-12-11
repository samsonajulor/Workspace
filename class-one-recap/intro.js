// what is nodejs?
// Timi Ajibade says Runtime environment for javascript on the server-side. It runs on Chrome's v8 engine

// is nodejs a programming language?
// Rhema Omerah says No!

// syntax to log 'this is a test' to the console';
console.log('this is a test');

// shortcut to comment in mac book and windows.
// Rhema Omerah: cntrl + / and cmd + /

// shortcut to highlight all same text in vscode.
// Timi: cmd + d and cmd + shift + L;

// initialize a variable with let, const and var
// let name = 'Timi';
// var name = 'Timi; this does not regard scopes.
// const age = 7; // immutable // cannot be modified

// list the two classes of datatypes in js
// Primitive: String, number, boolean, null, undefined, symbol
// Non primitive/ objects: Arrays and functions

// primitive types Tahir
// let name = "Tahir"  // string
// let num1 = 67 // number
// let isBooked = true // boolean
// let age; // undefined
// let time = null; // null

// Type Coercion:
// let coercion = '5' + 10; // '510'

// let coercion2 = '5' - 10; // -5 number

// how do we prevent type coercion in js
// Let coercion = number 5 + number 10; //Rhema Omerah

// let coercion = Number("5") +10; // Habeeblai musa

// functions. differentiate between parameters and arguments
const add = (x, y) => x + y // Timi Ajibade // arguments

add(4,5);
  // Timi Ajibade // parameters

  // Habeeblai musa
  // funtion arguments are the stuff we passed during functoion definiton example
  // function defineArgument(a,b) these are argument
  // let a =5, let b=10 are parameters
  // Rhema Omerah
  // Parameters are placeholders
  // Arguments are actual values

  // What are IIFE's
(() => {
    console.log('I am a callback function');
    return 'I am a callback function';
  }
)(); // is called an IIFE - Immediately Invoked Function Execution

const iife = (() => { console.log('Hello world')})();

// Rhema Omerah
(function greet () {
const age = 11
})();

// what are callbacks and higher order functions?
// A callback function is a function that is passed as an argument to another function ?

// A call back function is one that is passed as an argument to another function that is executed when that function completes it's task
// A higher order function is one that takes other function as argument and executed when invoked or when the function completes it's task.


// create a server with the http module
//  import the http module
const http = require('http');

// define the createServer HOF module.
const server = http.createServer((req, res) => {
  
});

// start the server
// list other modules in node js
server.listen(3000, () => {
  console.log('Server is running on port 3000');
})