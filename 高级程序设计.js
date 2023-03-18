"use strict";
// console.log(age);
// var age = 25;

// var name = "Matt";
// console.log(window.name);

// let named = "daba";
// console.log(window.named);
// for (var i = 0; i < 5; ++i) {
//   setTimeout(console.log(i), 0);
// }
// window.alert;
// if (test) {
//   var test = true;
//   console.log("test");
// }
// function test() {
//   var message = "hi"; // 局部变量
//   console.log(message);
// }
// test();
// console.log(message); // 出错！
// function foo() {
//   console.log(age);
//   var age = 26;
// }
// foo();
// function foo() {
//   var age;
//   console.log(age);
//   age = 26;
// }
// foo();
// if (true) {
//   var names = "Matt";
//   console.log(names);
// }
// console.log(names);
// if (true) {
//   let age = 26;
//   console.log(age); // 26
// }
// console.log(age); // ReferenceError: age 没有定义

// var size;
// var size;
// let sizes;
// let sizes;

// console.log(user);
// var user = "Jonas";
// console.log(ans);
// let ans = "jonas";

// var name = "Matt";
// console.log(window.name);
// let study = "English";
// console.log(window.study);

// var name = "Jack";
// let age = 24;
// var name = "Dava";
// // let age = 34;
// console.log(name);

// let namse = "Jack";
// let age = 32;
// if (typeof name === "undefined") {
//   let name;
// }
// // name 被限制在 if {} 块的作用域内
// // 因此这个赋值形同全局赋值
// namse = "Matt";
// try {
//   console.log(age); // 如果 age 没有声明过，则会报错
// } catch (error) {
//   let age;
// }
// age = 26;

// for (var i = 0; i < 5; i++) {
//   console.log(i);
// }
// console.log(i);
// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }
// console.log(i);
// for (var i = 0; i < 4; i++) {
//   setTimeout(() => console.log(i), 0);
// }
for (let i = 0; i < 4; i++) {
  setTimeout(() => console.log(i), 0);
}
