'use strict';
// scope practice

// const calAge = (birthYear) => {
//   const age = 2037 - birthYear;
//   function printAge() {
//     let output = `You are ${age}, born in ${birthYear}`;
//     console.log(output);
//     if (birthYear >= 198 && birthYear <= 1996) {
//       // Creating New variable with same as outer scope's variable;
//       const firstName = "Steven";

//       output = "New output";

//       const str = `oh, and you are a millenial, ${firstName}`;
//       console.log(str);

//       // function 也是块作用域,仅在严格模式下有效

//       function add(a, b) {
//         return a + b;
//       }
//     }
//     console.log(output);

//     //    console.log( add(1, 5));
//   }
//   printAge();
//   return age;
// };

// const firstName = "Jonas";

// const age = calAge(1991);
// console.log(age);

// // scope chain vs call stack
// const a = "Jonas";
// // first();
// function first() {
//   const b = "hello";
//   second();

//   function second() {
//     const c = "Hi";
//     third();
//   }
// }
// function third() {
//   const d = "Hey";
//   console.log(d + c + b + a);
// }

// const myName = 'jonas';
// function first() {
//     const age = 30;
//     if (age >= 30) {
//         const decade = 3;
//         var millenial = true;

//     }

//     function second () {
//         const job = 'teacher';
//         console.log(`${myName} is a ${age}-old ${job}`);

//             }
//     second();
// }

// function text() {
//     console.log(age);
//     const age = 12;

// }
// text();
// first();

// hoisting in javascript

// const myName = "Jonas";
// if (myName === "Jonas") {
//   console.log(`Jonas is a ${job}`);
//   const age = 2037 - 1989;
//   console.log(age);
//   const job = "teacher";
//   console.log(x);
// }

// variables

// console.log(me);
// // console.log(job);
// console.log(age);

// var me = 'Jonas';
// const job = 'teacher';
// let age = 21;

// FUNCTION

// console.log(addDel(2, 3));

// function addDel(a, b) {
//   return a + b;
// }

// console.log(addExp(2, 3)); //

// var addExp = function (a, b) {
//   return a + b;
// };
// console.log(addArr(2, 3));

// var addArr = (a, b) => a + b;

// undefined
// if (!number) deleteShoppingCart();
// var number = 10;
// function deleteShoppingCart() {
//   console.log('All products deleted!');
// }

// var x = 1;
// let y = 1;
// const z = 1;
// console.log(x === window.x);
// console.log(y === window.y);
// console.log(z === window.z);

// THIS

// const calAge = function (birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this);
// };
// calAge(1991); //函数声明指向函数内部

// const calAgeArrow = birthYear => {
//   console.log(2022 - birthYear);
//   console.log(this);
// };
// calAgeArrow(2001); // 箭头函数指向全局window

// const jonas = {
//   year: 1991,
//   calAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);
//   },
// };
// jonas.calAge();

// const matia = {
//   year: 2017,
// };
// matia.calAge = jonas.calAge;
// console.log(matia);

// matia.calAge(); // this 指向调用该方法的对象。

// const f = jonas.calAge;
// f();

// var firstName = 'Matiale';  // hoisting global
// const jonas = {
//   firstName: 'Jonas',
//   year: 1991,

//   calAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);
// console.log(`Hi ${this.firstName}`);

// solution 1

// const self = this;
// const isMillenial = function () {
//   console.log(self);

//   console.log(self.year >= 1981 && self.year <= 1996);
// };

// solution 2

//     const isMillenial = () => {
//       console.log(this);

//       console.log(this.year >= 1981 && this.year <= 1996);
//     };
//     isMillenial();
//   },
//   greet: function () {
//     console.log(`Hi ${this.firstName}`);
//   },
// };
// jonas.calAge();
// jonas.greet();

// arguments

// const addExp = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };
// addExp(2, 3);
// addExp(2, 3, 5, 6, 10);

// const addArr = (a, b) => {
//   console.log(arguments);
//   return a + b;

// }
// addArr(3, 4);

// primitive && object
/*
let age = 30;
const oldAge = age;
age = 31;
console.log(oldAge);
console.log(age);

const me = {
  age: 27,
};
const friends = me;
friends.age = 30;
console.log(friends);
console.log(me);

practice

let lastName = 'Williams';
const oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
};
const me = jessica;
me.firstName = 'Jonas';
me.lastName = 'Schmedtmann';

me.fullName = me.firstName + me.lastName;

console.log(me.fullName);
console.log(jessica.fullName);
*/
// 真正复制一个对象。
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Jane', 'Michael', 'Bro'],
};

const jessicaCopy = Object.assign({}, jessica);
jessicaCopy.lastName = 'Schmedtmann';

// 浅拷贝
jessica.family.push('Steven', 'Dava');
console.log(jessicaCopy);
console.log(jessica);
