// // let js = "amazing"
// // if (js == "amazing")
// //     alert('Javascript is Fun')
// // console.log(87 * 22323 + 35235235);
// // let myFirstJob = 'student';
// // let myCurrentJob = 'learner';
// // const PI = 3.1415926;
// // var name = 'Judy';
// /*var company = 'IBM';
// var objectCompany = 'It_conpany';
// */

// // console.log("hello world");

// // // BMI 计算

// // const massMark = 78;
// // const heightMark = 1.69;
// // const massJohn = 92;
// // const heightJohn = 1.95;
// // const BMIMark = massMark / heightMark ** 2;
// // const BMIJohn = massJohn / heightJohn ** 2;
// // const markHigherBMI = BMIJohn > BMIMark;
// // console.log(BMIJohn ,BMIMark, markHigherBMI);
// // const firstName = 'deng'
// // const age = 21;
// // const from = 'chongQing'
// // const job = 'student'
// // const dengZhu = `I'm ${firstName}, a ${age} year old, form ${from} my job is a ${job}!`;
// // console.log(dengZhu);
// // console.log(`just a regular string...`);

// // console.log(`string
// // multiple
// // lines`);
// // console.log('string \n\
// // multiple \n\
// // lines');
// // let ages = 9;
// // const isAgeFUll = ages>= 18;
// // if (isAgeFUll){
// //     console.log('dengZhu is old enough to drive license 🚗');

// // }
// // else{
// //     const yearsLeft = 18 - ages;
// //     console.log(`dengZhu is too young to drive license. Wait another ${yearsLeft} years :`);
// // }

// // // century
// // // const yearBirth = 1998;
// // // let century;
// // // if (yearBirth <= 2000){
// // //     century = 20;

// // // }else{
// // //     century = 21;
// // // }
// // // console.log(century);

// // // // 判断闰年；
// // // let years = prompt("Pleas input a year:")
// // // if(years % 4 == 0 && years % 100 != 0 || years % 400 == 0){
// // //     console.log('是闰年！')

// // // }else{
// // //     console.log('不是闰年！')
// // // }

// // // convert
// // const yearBirthDay = Number('1991');
// // // console.log(Number(yearBirthDay ), yearBirthDay);
// // console.log(yearBirthDay + 18);
// // console.log(Number('Jonas'));
// // console.log(isNaN('Jonas'));

// // const sting = String(23);
// // console.log(typeof sting);
// // console.log(typeof NaN);
// // let n = '1' + 1;
// // n = '11' - 1;
// // console.log(  n);
// // console.log(2+ 3 + 5 + '7');

// // 5 falsy values: 0, '', undefined, null, NaN;
// console.log(Boolean(0));
// console.log(Boolean(null));
// console.log(Boolean(undefined));
// console.log(Boolean(NaN));
// console.log("");
// const money = 1;
// if (money) {
//   console.log(`You should not spent it all`);
// } else {
//   console.log("You should get a job for you");
// }

// let height = 1.9;
// if (height) {
//   console.log("height is defined!");
// } else {
//   console.log("height is undefined!");
// }

// const day = "monday";

// const age = 118;
// if (age === 18) {
//   console.log(`You just became an adult!`);
// }

// // prompt
// const favourite = Number(prompt("What is your favourite number?"));
// console.log(favourite);
// console.log(typeof favourite);
// if (favourite === 23) {
//   console.log("Cool! 23 is an amazing number!");
// } else if (favourite === 7) {
//   console.log("7 is also a cool number");
// } else if (favourite === 8) {
//   console.log("8 is a duzzle number!");
// } else {
//   console.log("dish, its so bad for me!");
// }

// // !==;
// // if (favourite !== 23) {
// //     console.log('Wht not 23?');
// // }

// // AND OR !;
// const ageDrive = Number(prompt("Plase input your age:"));
// const hasGoodVision = true;
// const hasDriveLicense = true;
// console.log(hasDriveLicense && hasGoodVision);
// console.log(hasDriveLicense || hasGoodVision);
// console.log(!hasDriveLicense);
// const isTired = false;
// if (hasDriveLicense && hasGoodVision && !isTired && ageDrive >= 18) {
//   console.log("Jack is able to dirve car!");
// } else {
//   console.log("maybe somenoe else should dirve car!");
// }

// code challenge ;
// const scoreDolphins = (97 + 112 + 80) / 3;
// const scoreKoalas = (109 + 95 + 50) / 3;
// console.log(scoreDolphins);
// console.log(scoreKoalas);

// console.log(`Both of them score are ${scoreDolphins} and ${scoreKoalas}`);
// if (scoreDolphins > scoreKoalas) {
//   console.log("Dolphins is higher than Koalas. 🏆🏆👼");
// } else if (scoreDolphins === scoreKoalas) {
//   console.log("Both win the trophy");
// } else if (scoreKoalas > scoreDolphins) {
//   console.log("Koalas win the trophy! 🏆");
// } else {
//   console.log("No one wins the trophy🤣");
// }
// const scoreDolphins = (97 + 112 + 50) / 3;
// const scoreKoalas = (109 + 95 + 19) / 3;
// console.log(scoreDolphins, scoreKoalas);
// if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
//   console.log("Dolphins win the trophy");
// } else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
//   console.log("Koalas win the trophy");
// } else if (scoreDolphins === scoreKoalas) {
//   console.log("Both win the trophy");
// } else {
//   console.log("No one win the trophy");
// }

//switch case

// const day = prompt("please input a day of week:");
// switch (day) {
//   case "monday":
//     console.log("Plan course structure");
//     console.log("Go to coding meetup");
//     break;
//   case "tuesday":
//     console.log("Prepare theory cideos");
//     break;
//   case "wednesday":
//   case "thursday":
//     console.log("Write code example");
//     break;
//   case "friday":
//     console.log("Record videos");
//     break;
//   case "saturday":
//   case "sunday":
//     console.log("Enjoying the weekend :D");
//     break;
//   default:
//     console.log("Not a valid value.");
// }

// const age = Number(prompt("Please enter your age"));
// confirm("enter again");
// age >= 18
//   ? console.log("I like to drink wine")
//   : alert("You are not allowed to drink.");

// const drink = age >= 18 ? "drink🌴" : "water🥗";
// console.log(drink);

// let drink;
// if (age > 18) {
//   drink = "wine";
// } else {
//   drink = "water";
// }
// console.log(drink);

// console.log(`I like to drink ${age >= 18 ? "drink🌴" : "water🥗"}`);

// const bill = 400;
// const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
// console.log(`The bill was ${bill}, the tip was ${tip},
// and the total value ${bill + tip}`);

function add(n) {
  var x = 5 + add.arguments[0];
  return x;
}
add(17);

let person = new Object();
person.name = "jonas";
person.name = null;
console.log(person.name);





