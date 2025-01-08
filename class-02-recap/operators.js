// arithmetic operations. +, -, / and *
let num1 = 5
let num2 = 10;
// console.log(num1 + num2);
// console.log(num2 % num1);
// console.log(num2 - num1)
// samples with modulo, increment and decrement.

// console.log(3 % 2) //  1
// let num = 1;
// console.log(++num) // 2
// console.log(num++) // 2
// console.log(num--) // 3
// console.log(num)

// logical operators AND, NOT and OR
// hint: all datatypes can be considered as either truthy or falsy
// falsy values are values that will equate to true when negated! e.g. 0, null, undefined (empty string ''), NaN
let emptyString = ' '; // truthy
let zero = 0; // falsy
let str = ''; // falsy
let nul = null
let undefined;

// console.log(typeof zero);
// console.log(!!zero); true
// console.log(!zero); false
console.log(!emptyString);

// console.log({ or: !!emptyString || zero});
console.log({ or: !!emptyString && zero}); // 0;

// comparison operators < > >= >==;

// what is the difference between >= and >==
// what is the difference between == and ===

// let age = 25;
// let id= true;

// console.log(age > 18 &&  id); // true

let age = 0;
let id= 'quikdb';

console.log(age == '0') // true
// console.log(age = '0') // '0'
console.log(age === '0') // false;
console.log(age === '0' &&  id); // quikdb

// conditional operators
// if else; switch case; ternary
// 1. Let's write a program that checks if a number is positive, negative, or zero (use if else);

// 2. "Write a program that checks the day of the week using a switch-case statement. Given a number from 1 to 7, it should print the corresponding day of the week."

// 3. "Write a program that checks if a number is even or odd using the ternary operator. You should assign a string value of "even" or "odd" to a variable based on the result."

// const prompt = require('prompt-sync')();
// const num = prompt('Enter a number: ');
// const checkNum = (num) => { num % 2 === 0  ? console.log("even") :  console.log("odd" ) }

// checkNum(num);

// const prompt = require('prompt-sync')();
// const input = prompt('Enter a number: ');
// const number = Number(input); // type casted.

// if (number > 0) {
//   console.log('It is a positive number.');
// } else if (number < 0) {
//   console.log('It is a negative number.');
// } else {
//   console.log('It is zero.');
// }

// let number = prompt('Enter a number:');

// number = parseFloat(number);

// if (number > 0) {
//   console.log('The number is positive.');
// } else if (number < 0) {
//   console.log('The number is negative.');
// } else {
//   console.log('The number is zero.');
// }
