"use strict";
// let hasDriveLicense = false;
// const passTest = true;
// if (passTest) hasDriveLicense = true;
// if (hasDriveLicense) console.log("I can drive :D");
// const interface = "Audio";

// FUNCTION
// function logger() {
//   console.log("My name is Jonas");
// }

// // calling / running / invoking function

// function fruitProcessor(apple, oranges) {
//   console.log(apple, oranges);
//   const juice = `Juice with ${apple} apple and
//   ${oranges} oranges.`;
//   return juice;
// }
// const appleJuice = fruitProcessor(4, 10);
// console.log(appleJuice);

// Number("23");

// function calAge() {
//   let birthYear = prompt("输入你的出生年月：");
//   const age = 2022 - birthYear;
//   return age;
// }
// const age = calAge();
// console.log(`your age is ${age}`);

// function expression
// const ages = function (birthYear) {
//   return 2022 - birthYear;
// };
// const birth = ages(2001);
// console.log(birth);

// arrow function
// const age = (birthYear) => 2022 - birthYear;
// const calAge = age(2002);
// console.log(calAge);

// const yearsUnitRetirement = (birth, firstName) => {
//   const age = 2022 - birth;
//   const retirement = 65 - age;
//   return `${firstName} retires in ${retirement} years.`;
// };
// console.log(yearsUnitRetirement(2001, "jackDeng"));

// calling other function

/*function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apple, oranges) {
  const applePieces = cutFruitPieces(apple);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} piece of apple and
  ${orangePieces} piece of oranges.`;
  return juice;
}
console.log(fruitProcessor(3, 5)); */

//review function

// const ages = function (birthYear) {
//   return 2022 - birthYear;
// };
// const yearsUnitRetirement = function (birthYear, firstName) {
//   const age = ages(birthYear);
//   const retirement = 65 - age;
//   if (retirement > 0) {
//     return retirement;
//   } else {
//     console.log(`You have been retired ${Math.abs(retirement)}years.`);
//   }
// };console.log(yearsUnitRetirement(1965, "邓柱"));

// average score

// const calAvg = (a, b, c) => (a + b + c) / 3;
// // console.log(calAvg(3, 4, 5));

// let scoreDolphins = calAvg(44, 23, 71);
// let scoreKoalas = calAvg(65, 54, 49);
// console.log(scoreDolphins, scoreKoalas);

// const checkWinner = function (avgDolphins, avgKoalas) {
//   if (avgDolphins > 2 * avgKoalas) {
//     console.log(`Dolphins win ☂(${avgDolphins} vs. ${avgKoalas})`);
//   } else if (avgKoalas > 2 * avgDolphins) {
//     console.log(`Koalas win 🚗 (${avgKoalas} vs. ${avgDolphins})`);
//   } else {
//     console.log(`No team wins...`);
//   }
// };
// checkWinner(scoreDolphins, scoreKoalas);

// // Test 2

// scoreDolphins = calAvg(85, 54, 41);
// scoreKoalas = calAvg(23, 34, 27);
// checkWinner(scoreDolphins, scoreKoalas);

// arrays

/*const friends = ["Michael", "Jonas", "JackDeng", "Steven", "Peter"];
friends[0] = "Michael";
console.log(friends[0]);
console.log(friends[1]);

console.log(friends);
const years = new Array(2001, 1990, 2330, 232);
console.log(years);
console.log(friends.length);
console.log(friends[friends.length - 1]);
console.log(friends[4]);
friends[5] = "Jay";
console.log(friends);
friends.push("Jim");
*/

/*const friends = ["Michael", "Jonas", "JackDeng", "Steven", "Peter"];
const firstName = "Jonas";
const lastName = "Schmedtmann";
const age = 2022 - 2001;
const jonas = [
  firstName,
  lastName,
  age,
  "teacher",
  new Array(1, 2001, "jack"),
  friends,
];
console.log(jonas);
jonas[2] = "jackDeng";
console.log(jonas);
console.log(jonas[5]);
console.log(jonas.length);

// exercise

const calAge = function (birthYear) {
  return 2022 - birthYear;
};

const years = [2001, 1999, 2000, 1998, 1976];
console.log(calAge(years));
for (let i = 0; i < years.length; i++)
  console.log(`他们的年龄分别是：\n${calAge(years[i])}`);
*/

// BASIC ARRAY OPERATIONS

// var friends = ["刘都成", "周榆胜", "朱世吉"];
// console.log(friends);

// add element
/*const newLength = friends.push("邓🐖");
console.log(friends[friends.length - 1]);
console.log(newLength);

// add element
const addUnshift = friends.unshift("朱世吉");
console.log(addUnshift);

// remove element
const shifs = friends.shift();
console.log(shifs);
const pops = friends.pop();
console.log(pops);

const joins = friends.join("|");
console.log(joins);
const splits = joins.split("|");
console.log(splits);
friends.push(23, 14, 23, "32");
console.log(friends);
console.log(friends.indexOf("周榆胜"));
console.log(friends.indexOf("de"));
console.log(friends.includes("朱世吉"));
console.log(friends.includes(32));

if (friends.includes("朱世吉")) console.log(`You have a friend called 朱世吉`);
*/
// code challenge#2

// const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
// console.log(`The bill was ${bill}, the tip was ${tip},
// and the total value ${bill + tip}`);
// const bills = [125, 555, 44];
// const calTip = (bill) => (bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2);

// const tips = [calTip(bills[0]), calTip(bills[1]), calTip(bills[2])];
// const bill_tips = bills.concat(tips);
// console.log(bill_tips);
// const totals = [
//   calTip(bills[0]) + bills[0],
//   calTip(bills[1]) + bills[1],
//   calTip(bills[2]) + bills[2],
// ];
// console.log(totals);
// for (var i in tips) {
//   console.log(tips[i]);
// }

// object

// const jonas = {
//   firstName: "Jonas",
//   lastName: "Schemdtmann",
//   age: 2037 - 1991,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"],
// };
// jonas.location = "Portugal";
// jonas["twitter"] = "@jonasschmedmann";

// console.log(jonas.friends);

// const nameKey = "Name";
// console.log(jonas["first" + nameKey]); // can following expression
// console.log(jonas["last" + nameKey]);

// const interestedIn = prompt(
//   "What do you want to know about Jonas?\
// Choose between firstName, lastName, age, job, and friends"
// );
// // console.log(`Look at :${jonas[interestedIn]}`);

// if (jonas[interestedIn]) {
//   console.log(`Look at :${jonas[interestedIn]}`);
// } else {
//   console.log(
//     "Wrong request!\
//   Choose between firstName, lastName, age, job, and friends"
//   );
// }

// challenge
// Jonas has 3 friends, and his best friend is called Michael
// console.log(jonas.friends[0]);
// console.log(
//   `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`
// );

// const jonas = {
//   firstName: "Jonas",
//   lastName: "Schemdtmann",
//   birthYear: 1991,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"],
//   hasDriversLicense: true,
//   // calAge: function () {
//   //   return 2037 - this.birthYear; // this
//   // },
//   calAge: function () {
//     this.age = 2037 - this.birthYear;
//     return this.age;
//   },
//   getSummary: function () {
//     return `${
//       this.firstName
//     }is a ${this.calAge()}-year old teacher, and he has ${
//       this.hasDriversLicense ? "a" : "no"
//     }  driver's license`;
//   },
// };
// console.log(jonas.calAge());

// console.log(jonas.age);
// // console.log(jonas["calAge"](1991));

// // code challenge

// console.log(jonas.getSummary());

// code Challenge

/*const mark = {
  full_name: "Mark Miller",
  mass: 78,
  height: 1.69,
  calBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};

const John = {
  full_name: "John Smith",
  mass: 92,
  height: 1.95,
  calBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};

mark.calBMI();
John.calBMI();

if (mark.BMI > John.BMI) {
  console.log(
    `${mark.full_name}'s BMI (${Math.round(mark.BMI)}) is higher than ${
      John.full_name
    }'s (${Math.round(John.BMI)})!`
  );
} else if (mark.BMI < John.BMI) {
  console.log(
    `${John.full_name}'s BMI (${Math.round(mark.BMI)}) is higher than ${
      mark.full_name
    }'s (${mark.BMI})!`
  );
}
console.log(Math.round(12.233));
*/

// for loop

// for (let rep = 5; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep} 🛬🏋️‍♂️ `);
// }
// var close = [, 1, , ,];
const firstName = "Jonas";
const lastName = "Schmedtmann";
const age = 2022 - 2001;
const friends = ["Michael", "Jonas", "JackDeng", "Steven", "Peter"];
// const types = [];
const jonas = [
  firstName,
  lastName,
  age,
  "teacher",
  new Array(1, 2001, "jack"),
  friends,
  true,
  NaN,
  "",
];
// for (let i = 0; i < jonas.length; i++) {
//   console.log(jonas[i], typeof jonas[i]);
//   // types[i] = typeof jonas[i];
//   // types.push(typeof jonas[i]);
//   // types.unshift(typeof jonas[i]);
// }
// console.log(types);

// const years = [1991, 2007, 2001, 1975];
// const ages = [];
// for (let i = 0; i < years.length; i++) {
//   ages.push(2037 - years[i]);
// }
// console.log(ages);

// continue  and break

// for (let i = 0; i < jonas.length; i++) {
//   if (typeof jonas[i] !== "string") break;
//   console.log(jonas[i], typeof jonas[i]);
// }

// 4, 3.... 0
// for (let i = jonas.length - 1; i >= 0; i--) {
//   console.log(jonas[i]);
// }

// for (let exercise = 1; exercise < 4; exercise++) {
//   console.log(`-------------Starting exercise ${exercise}`);
//   for (let rep = 1; rep < 6; rep++) {
//
//   }
// }

// for (var i = 1; i <= 9; i++) {
//   for (var j = 1; j <= i; j++) {
//     console.log(i + "*" + j + "=" + i * j + " ");
//   }
//   if (i === j) console.log("\n");
// }

// while loop
// let rep = 1;
// while (rep <= 10) {
//
//   rep++;
// }

// let rep = 1;
// do {
//   console.log(`Lifting weight repetition ${rep} 🏋️‍♀️`);
//   rep++;
//   if (rep === 4) break;
// } while (rep <= 10);

// let dice = Math.trunc(Math.random() * 6) + 1;
// // console.log(dice);
// while (dice !== 6) {
//   console.log(`You rolled a ${dice}`);
//   dice = Math.trunc(Math.random() * 6) + 1;
// }

//code challenge 4

// const bill = 400;
// const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
// console.log(`The bill was ${bill}, the tip was ${tip},
// and the total value ${bill + tip}`);

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];
// const calTip = (bill) => (bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2);
// for (let i = 0; i < bills.length; i++) {
//   var tip = tips.push(calTip(bills[i]));
//   totals.push(tip + bills[i]);
// }
// console.log(tips, totals);

// const calAverage = function (arr) {
//   var num = 0;
//   let sum = 0;
//   const long = arr.length;
//   while (num < long) {
//     sum += arr[num];
//     num++;
//   }
//   const avg = sum / long;
//   return `average bill is ${avg}`;
// };
// console.log(calAverage(tips));
