// what are operators
// types include: logical, conditional, arithmetic and comparison.
// arithmetic operators are symbols used for mathematical expressions e.g. addition (+), subtraction (-), multiplication (*), division (/), modulo or remainder (%), increment (++), decrement (--);
// let answer = 6 - 5;
// let answer = Math.round(6 / 5);
// let answer = 6 % 7;
// console.log({ answer });

// logical operators are used to derive the result of a conditional expression
// logical AND (&&), logical OR (||) and logical NOT (!);

let conditionOne = true;
let conditionTwo = false;
let arr = [];
let obj = {};
let num = 0;
let num1 = 3;
let str = '3';

// let ans1 = !conditionOne
// console.log({ ans1 }); // false

// let ans2 = !conditionTwo;
// console.log({ ans2 }); // true

// let ans3 = !arr; // arrays and objects give truthy values whether empty or not.
// console.log({ ans3 }); // false;

// let ans4 = !obj;
// console.log({ ans4 }); // false

// let ans5 = !num; // zero is a falsy value
// console.log({ ans5 }); // true

// let ans6 = !num1; // any other number other than zero is a truthy value.
// console.log({ ans6 }); // false

let ans7 = !str; // strings are truthy values
console.log({ ans7 }); // false

// let result = conditionOne && conditionTwo;
// console.log({ result }); // false because conditionTwo is false;

// let result = conditionTwo && conditionOne;
// console.log({ result });

// let result = conditionOne && 'a function to execute';
// console.log({ result }); // this returns 'a function to execute';

// comparison operators strict equality (===) simple equality (==) greater than (>) less than (<), inequality (!=) strict inequality (!==)

// strict comparison compares both type and value.
let x = 10;
let y = '10';
// const result = x === y;
// console.log({ result }); // is false

// const result = x == y;
// console.log({ result }); // is true

// const result = x !== y;
// console.log({ result }); // true;

const result = x != y;
console.log({ result }); // is false

// conditional operators
// we try to execute codes by using conditions.
// if and else
// switch case
// ternary conditions.