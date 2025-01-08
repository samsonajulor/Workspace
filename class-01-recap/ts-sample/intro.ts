let arm: string = 'ar';
arm = 'arm';
console.log({ arm: arm }); // arm
//datatypes
// Primitive Types: string, number, boolean, null, undefined, symbol.
// Non-primitive Types/Objects: object (includes arrays and functions).

// implicit type definitions
let str = 'test';
let number = 1;
let bool = true;
let undefinedlet;
console.log(typeof number);
console.log({ undefinedlet: typeof undefinedlet });
// Type Coercion:
// casting
let coercion3 = Number(null) + Number(10);
console.log({ coercion3: coercion3 }); // 10 as a number
let coercion4 = String(null) + Number(10);
console.log({ coercion4: coercion4 }); // 'null10' as a string
// non primitive types
let object = {
  name: 'John',
};
console.log(object);
let array = [10, 20, 40, '45454'];
console.log({ array: array });
// functions.
let greetInit = function () {
  // function expression.
  console.log('I am greeting');
  return 'I am greeting';
};
// it can take in a parameter
let greet = function (name?: string) { // use the ? if you want to make the type optional
  console.log({ name: name });
  if (name !== undefined) {
    console.log('name is available');
  } else {
    console.log('name is not available');
  }
};
let greet2 = function (name: () => {}) {
  console.log({ name: name });
  if (name !== undefined) {
    console.log('name is available');
  } else {
    console.log('name is not available');
  }
};
(function () {
  console.log('I am a callback function');
  return 'I am a callback function';
})(); // is called an IIFE - Immediately Invoked Function Execution
greet(); // invoking function greet
greet('samson'); // invoking function greet as a string
greet(greetInit()); // needs a parameter
greet2(function () {
  console.log('I am a callback function');
  return 'I am a callback function';
}); // parameter is passed as a function directly without execution
greet(
  (function () {
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
// const http = require('http');
// const createServerParams = (req, res) => {
//   res.writeHead(200, { 'Content-Type': 'text/plain' });
//   res.end('Hello World\n');
// };
// // const server = http.createServer(createServerParams);
// // the function within another function is called a callback function
// // the function that takes in the callback function is called the higher order function.
// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World\n');
// });
// server.listen(16000, () => {
//   console.log(`listening on port 16000`);
// });
