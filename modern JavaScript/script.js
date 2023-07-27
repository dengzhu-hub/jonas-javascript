// "use strict";
// import {cd, qt, addToCart}  from "./shopignCart.js";

console.log("importing shopignCart");
// // hostising the top level
// import "./shopignCart.js";
// console.log(`${cd} is cooking and the quantity is ${qt}`);

// addToCart('breed', 40)

// import * as shipingCard from "./shopignCart.js";
// shipingCard.addToCart("breed", 54);
// console.log(shipingCard.qt);

//default export
// import add , {cart}from "./shopignCart.js";
// add("pizza", 5);
// add("breed", 3);
// add("apple", 6);
// console.log(cart);

// TOP LEVEL AWAIT

// const getLatPost = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   const data = await res.json();
//   console.log(data);
//   return { name: data.at(-1).name, company: data.at(-1).company.catchPhrase };
// };

// // use top levet await
// const lastPost = await getLatPost();
// console.log(lastPost);

// the old way export module

// module pattern
// const result = (function () {
//   const cart = [];
//   const shippingCard = 5;
//   const totalPrice = 100;
//   const totalQuantity = 43;

//   const addToCart = (product, quantity) => {
//     cart.push({ product, quantity });
//     console.log(`${product} added to cart`);
//   };
//   const orderStock = (product, quantity) => {
//     console.log(`${product} orderStock product `);
//   };

//   // 公共 api
//   return {
//     cart,
//     totalPrice,
//     addToCart,
//     orderStock,
//   };
// })();
// result.addToCart("breed", 3);
// console.log(result.cart);
// console.log(result.totalPrice);
// result.orderStock("breed", 3);
// console.log(result.shippingCard)

// commonJS
// exports.addToCart = (product, quantity) => {
//   cart.push({ product, quantity });
//   console.log(`${product} added to cart`);
// };
// const {addToCart} = require('./shopignCart')
// addToCart('blanlan', 5)

import cloneDeep from "./node_modules/lodash-es/cloneDeep.js";
// import cloneDeep from "lodash-es";
const state = {
  cart: [
    { product: "breed", quantity: 5 },
    { product: "pizza", quantity: 6 },
    { product: "cheese", quantity: 7 },
  ],
  user: { loginedIn: true },
};
const stateDeep = cloneDeep(state);
console.log(stateDeep);
state.user.loginedIn = false;
console.log(state.user.loginedIn);
console.log("hello dj");

const stateClone = Object.assign({}, state);
stateClone.user.loginedIn = false;
console.log(state);
// if (module.hot) {
//   module.hot.accept();
// }


// parcel and bable 
class Person {
  greeting = "hello";
  constructor(name) {
    this.name = name;
    console.log(`${this.greeting}, ${this.name}`);
  }
}
const person = new Person("jonas");

console.log("jonasioio" ?? null);
(() => {
  console.log("hello");
})();
console.log(person);

const message = () => {
  console.log('Hello, using ES6 syntax with Babel and Parcel!');
};

message();


//lodash js
import _ from 'lodash-es';

const students = [
  { name: 'Alice', age: 20, score: 85 },
  { name: 'Bob', age: 21, score: 90 },
  { name: 'Charlie', age: 19, score: 78 },
  { name: 'David', age: 22, score: 92 },
  // more students...
];

const top3Students = _.orderBy(students, 'score', 'desc').slice(0, 3).map(el => el.name);

console.log(...top3Students);


