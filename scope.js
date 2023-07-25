"use strict";
// // scope practice

const calAge = (birthYear) => {
  const age = 2037 - birthYear;
  function printAge() {
    let output = `You are ${age}, born in ${birthYear}`;
    console.log(output);
    if (birthYear >= 198 && birthYear <= 1996) {
      // Creating New variable with same as outer scope's variable;
      const firstName = "Steven";

      output = "New output";

      const str = `oh, and you are a millenial, ${firstName}`;
      console.log(str);

      // function 也是块作用域,仅在严格模式下有效

      function add(a, b) {
        return a + b;
      }
    }
    console.log(output);

    //    console.log( add(1, 5));
  }
  printAge();
  return age;
};

// const firstName = "Jonas";

const age = calAge(1991);
console.log(age);

// // scope chain vs call stack
const a = "Jonas";
// first();
function first() {
  const b = "hello";
  second();

  function second() {
    const c = "Hi";
    third();
  }
}
function third() {
  const d = "Hey";
  console.log(d + c + b + a);
}

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
// console.log(me);
// // console.log(job);
// console.log(age);

// var me = "Jonas";
// const job = "teacher";
// let age = 21;
