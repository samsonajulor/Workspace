// what is an object?
// An object is a collection of related data and functionalities.

// car -> color, brand, type, speed etc
// syntax: { key: value, key: value }

// e.g
const car = {
 color: 'yellow',
 brand: 'ferrari',
 type: 'sports car',
 speed: '200km/hr',
}

// the value of a property in an object can be of any data type e.g function, string, array, or even another object.

// how to access the values of the properties.
// dot notation.
console.log('the color of the car is: ', car.color);

// bracket notation
console.log('the brand of the car is: ', car['brand']);

// modification
car.color = 20;
console.log('the new color of the car is: ', car.color);

// adding new properties
car.isTinted = true;

console.log(car);

// remove a property
delete car.speed
console.log('car: ', car); // you might not want to modify the existing car variable.

const newModel = { ...car };

console.log('newModel: ', newModel);

console.log(car === newModel); // not equal in type and value.
console.log(car == newModel); // not equal in type.

const arr1 = [];
const arr2 = []; // arr1 and arr2 are both object types.
console.log(arr1 === arr2)
console.log(arr1 == arr2);

// because of storage references.
// the comparison of object data types in js (Array, functions, objects) is by the location of storage

// complex object
let student = {
 // name: () => 'tunde'
 name: function() { return 'tunde'},
 grades: {
  maths: 50,
  english: 10
 }
}

let studentName = student.name();
console.log({ studentName });

let studentGradeInEnglish = student.grades.english;
console.log({ studentGradeInEnglish });

// concept of this.

let house = {
  color: 'white',
  houseNumber: 4,
  addressOne: () => {
    return this.houseNumber;
  },
  addressTwo: () => `No ${this.houseNumber}, Ozumba-Mbadigwe.`,
  addressThree: function() {
   return `No ${this.houseNumber}, Ozumba-Mbadigwe.`;
  },
};

console.log('the house address is: ', house.addressTwo());
console.log('the house address is: ', house.addressThree());

// overrated objects e.g. class in js;

// classes.

// class is a building block for objects. you can use it to define properties with key and values pairs as well as methods the are common to a particular variable.

class HouseClass {
 numberOfRooms = 0;
 #numberOfTenants = 0;
 color = 'white'; // this is a private variable;
 constructor (numberOfRooms, numberOfTenants) {
  this.numberOfRooms = numberOfRooms || 0;
  this.#numberOfTenants = numberOfTenants || 0;
 }

  houseNumber = 4;

  getColor = () => 'this.color';

  setNumberOfTenants (num) {
   this.#numberOfTenants = num
  }

  getTenants() {
   return this.#numberOfTenants;
  }

  getAddressThree() {
     return `No ${this.houseNumber}, Ozumba-Mbadigwe.`;
    }
}

const House = new HouseClass(6, 4);
const House2 = new HouseClass();

const colorOfHouse1 = House.color;
const noOfTenantsInHouse2 = House2.getTenants();

console.log({ noOfTenantsInHouse2, colorOfHouse1 });



// JavaScript is a prototype-based language as it has no classes like other object-oriented languages. In ECMAScript 2015, JavaScript debuted the class keyword. JavaScript appears to be an OOP language as a result.

// let house = {
//   color: 'white',
//   houseNumber: 4,
//   addressOne: () => {
//     return this.houseNumber;
//   },
//   addressTwo: () => `No ${this.houseNumber}, Ozumba-Mbadigwe.`,
//   addressThree: function() {
//    return `No ${this.houseNumber}, Ozumba-Mbadigwe.`;
//   },
// };

// how to iterate over objects.
for (const key in House2) {

 console.log('this is a public property of House2:', key);

 console.log(typeof House2[key])

 console.log(`this is the value for the key ${key}: `, typeof House2[key] === 'function' ? House2[key]() : House2[key])

}

// for reference: https://www.w3schools.com/js/default.asp;