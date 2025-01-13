// what is an array
// it is an ordered collection of elements or items. you can also refer to them as lists.

const arr = []; // empty list;
const arr2 = [1, 2, 4, 3, -1, -3] // a list of numbers;

///////       0 | 1     | 2    | 3
const arr3 = [1, 'string', null, undefined];

console.log({arr3});

arr3.pop()
console.log({ arr3 }); // => [1, 'string', null];

arr3.push(null)
console.log({ arr3 }); // => [1, 'string', null, null];

arr3.shift()
console.log({ arr3 }); // => ['string', null, null];

arr3.unshift('data');
console.log({ arr3 }); // => ['data', 'string', null, null];

// extras
console.log('the first item of arr3', arr3[0]);
console.log('the second item of arr3', arr3[1]);
console.log('the last item of arr3', arr3[3]); // this might be a guess if I need the last item of the array.

console.log('length of arr3 is: ', arr3.length);
// if the length of arr3 is 4 then the index of the last item is 4 - 1 => 3
console.log('index of the last item in arr3 is : ', arr3.length - 1);
const indexOfLastItem = arr3.length - 1;
console.log('the last item of arr3', arr3[indexOfLastItem]); // this might be a guess if I need the last item of the array.

// const newArr = [...arr2, ...arr3]; // array concatenation
// console.log({ newArr });
// arr3.unshift(...arr2); // this is not recommended bcos it modifies the original arr3
// console.log({ arr3 }); // => [1, 2, 3, 'data', 'string', null, null];

// in arr2 what is the position of 2 => 1. this is also called the index of the item in that array or list.

// what is the index of null in arr3 => 2

// array methods: push, pop, shift, unshift, map, filter, find

// map: this creates a new array buy applying a condition to each element.
// filter: this creates a new array of only elements that matches a test condition.

function callbackForMap (itemInTheArray, index) {
 return itemInTheArray * 3;
}

function callbackForFilter(itemInTheArray, index) {
 return itemInTheArray % 2 === 0; // should return a boolean;
}

// const newArr2 = arr2.map(callbackForMap); // readable;
// const newArr2 = arr2.map((num) => {
//  return num * 3
// });
const newArr2 = arr2.map((num) => num * 3);

arr3.map((data, positionOfTheItemInTheArray) => {
 console.log({ data, positionOfTheItemInTheArray });
})

// console.log({ newArr2 }); // [3, 6, 9]

// const newArr2 = arr2.filter(callbackForFilter);
// console.log({ newArr2 });
// arr2.find
