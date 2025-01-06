// loops: if you have repetitive codes, use loops;
// loops: if you want to access each element in a list or array, use loops. this is called iteration. any data type whose individual items can be accessed is usually referred to as an iterable e.g. arrays and objects

// console.log(0);
// console.log(1);
// console.log(2);
// console.log(3);

// for (let i = 0; i < 100000; i++) {
//  console.log(i); // 0, 1, 2, 3
// }

 // for (initialization; condition; increment) {
 //   // Code to execute
 // }

// for (let i = 0; i <= 100000; i++) {
//   console.log(i); // 0, 1, 2, 3, 4
// }

// let i = 0;

// while (i<=4) {
//  console.log(i);
//  i++; // if you do not increment, you will get an infinite loop.
// }

const arr = [1, 2, 3, 4, 5];
// other types of for loops: for of, for in;

// for (const num of arr) {
//  console.log(num * 2);
// }

// using the traditional for loop:
// a. get the length of the list/array
// b. create a loop starting with the preferred index location using the length as the upper boundary
// c. access each item by the index
// const lengthOfArr = arr.length
// for (let index = 0; index < lengthOfArr; i++) {
//  console.log('i is: ', index);
//  const itemOfArray = arr[index];
//  console.log({ itemOfArray });
// }

// replicating what the map function did in the other script.
// access all the items in a list
// multiply them by 3
// create a new list;
// my new list should be [3, 6, 9, 12, 15];

let newArr = [];

for (let i = 0; i < arr.length; i++) {
 let item = arr[i];
 let modification = item * 3
 newArr.push(modification);
}

const finalValueOfNewArray = newArr;

console.log({ finalValueOfNewArray });
