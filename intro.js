// console.log('this is a test')

//  variables in js
// var, let and const

// function test () {
//   var variableOne = 3;
//   if (true) {
//     var variableThree = 5
//   }
//   console.log({variableThree}); // 5
//   var variableTwo = 2;
//   console.log({variableTwo}); // 2
// }
// shortcut to comment cmd + / or cntrl + / for windows.
function test() {
  var variableOne = 3;
  if (true) {
    let variableThree = 5;
  }
  console.log({ variableThree }); // not available
  var variableTwo = 2;
  console.log({ variableTwo }); // 2
}

// let and const;

// const means constant;
// const leg = 'leg';
// leg = 'arm';
// console.log({ leg }); //throw and error. | TypeError: Assignment to constant variable.

// let is mutable;
let arm = 'ar';
arm = 'arm';
console.log({ arm }); // arm

//datatypes
// Primitive Types: string, number, boolean, null, undefined, symbol.
// Non-primitive Types/Objects: object (includes arrays and functions).
let str = 'test';
let number = 1;
let bool = true;
let nullVar = null;
let undefinedVar;
console.log(typeof number);
console.log({ undefinedVar: typeof undefinedVar });

// Type Coercion:
// JavaScript automatically converts values between types in certain operations. This is called type coercion.

let coercion = '5' + 10;
console.log({ coercion }); // '510'

let coercion2 = '5' - 10;
console.log({ coercion2 });

// casting
let coercion3 = Number(null) + Number(10);
console.log({ coercion3 }); // 10 as a number

let coercion4 = String(null) + Number(10);
console.log({ coercion4 }); // 'null10' as a string

// non primitive types
const object = {
  name: 'John',
};

console.log(object);

let array = [10, 20, 40, '45454'];

console.log({ array });

// functions.
function greet() {
  // regular function
  console.log(' I am greeting');
}

const greetInit = () => {
  // function expression.
  console.log('I am greeting');
  return 'I am greeting';
};

// it can take in a parameter
const greet = (name) => {
  console.log({ name });
};

(() => {
  console.log('I am a callback function');
  return 'I am a callback function';
})(); // is called an IIFE - Immediately Invoked Function Execution

// greet(); invoking function greet
// greet('samson'); invoking function greet as a string
// greet(greetInit()); // needs a parameter
greet(() => {
  console.log('I am a callback function');
  return 'I am a callback function';
}); // parameter is passed as a function directly without execution

greet(
  (() => {
    console.log('I am a callback function');
    return 'I am a callback function';
  })()
); // parameter is passed as a function directly with execution

// inbuilt modules
// Commonly Used Built-in Modules:
// http: For creating an HTTP server.
// fs: For interacting with the file system.
// path: For handling file paths.
// os: For operating system-related utilities.
//import http module
const http = require('http');

const createServerParams = (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World\n');
};
// const server = http.createServer(createServerParams);
// the function within another function is called a callback function
// the function that takes in the callback function is called the higher order function.
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(16000, () => {
  console.log(`listening on port 16000`);
});
