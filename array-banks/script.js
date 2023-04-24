'use strict';



/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2023-03-07T10:32:34.600Z',
    '2023-03-08T10:32:34.600Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'OMR',
  locale: 'ar-OM',
};
console.log(account3['movements']);

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'DKK',
  locale: 'da-DK',
};
const account5 = {
  owner: 'jack Deng keng',
  movements: [1000, 2000, 5000, 900000, -100000, 442423],
  interestRate: 2.3,
  pin: 5555,
  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
   
  ],
  currency: 'CNY',
  locale: 'zh-CN',

};

const accounts = [account1, account2, account3, account4, account5];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');
const modal = document.querySelector('.modal');
// modal.style.display = 'block';
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnShowModal = document.querySelectorAll('.show-modal');



//Modal
const closeModal = function () {
  modal.classList.add('hidden')
  overlay.classList.add('hidden');
};

window.onload = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');

}
overlay.addEventListener('click', closeModal);
btnCloseModal.addEventListener('click', closeModal);
document.addEventListener('keydown', function (e) {
  console.log(e.key);
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) closeModal();

})
// btnCloseModal.addEventListener('click', closeModal);


// function

const options = {
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
}
const formatMovements = function (date, locale) {
  const calcDatePassed = (date1, date2) =>
  Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));
  const daysPassed = calcDatePassed(new Date(), date);
  console.log(daysPassed);
  if (daysPassed === 0) return 'Today';
  else if (daysPassed === 1) return 'Yesterday';
  else if (daysPassed <= 7) return `${daysPassed} days ago`;
//  return `${day}/${month}/${year}`;
  return new Intl.DateTimeFormat(locale).format(date);
};

// FORMATcurrency

const formatCur = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency
  } ).format(value);
}
const updateUI = function (acc) {
  displayMovements(acc);
  calcDisplayBalance(acc);
  calcDisplaySummary(acc);
};

const startLogoutTimer = function () {
const trick = function () {
  // set time to 5 minute

    const min = String(Math.floor(time / 60)).padStart(2, '0');
    const sec = String(time % 60).padStart(2, '0');
    labelTimer.textContent = `${min}:${sec}`;
  //When 0 seconds, stop timer and logg out user
    if (time === 0) {
      clearInterval(timer);
      labelWelcome.textContent = 'Log in to get started';
      containerApp.style.opacity = '0';

    }
    time--;
};
// set time to 5 minute
  let time = 300;

    // call the timer every second
trick();
  const timer = setInterval(trick,1000)


return timer;
  // In each call, print the remaining time to UI



}


// arrow function
const displayMovements = (acc, sort = false) => {
  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  containerMovements.innerHTML = ''; //将内部文字清空;
  movs.forEach((mov, i) => {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const date = new Date(acc.movementsDates[i]);

    const displayDate = formatMovements(date, acc.locale);
    const displayMov = formatCur(mov, acc.locale, acc.currency);

    const html = `
    <div class="movements__row">
    <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
    <div class="movements__date">${displayDate}</div>
    <div class="movements__value">${displayMov}</div>
  </div>
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
// displayMovements(account1.movements);
// console.log(containerMovements.innerHTML);

const createUser = accs => {
  accs.forEach(acc => {
    acc.userName = acc.owner
      .toLowerCase()
      .split(' ')
      .map(word => word[0])
      .join('');
  });
};
createUser(accounts);
console.log(accounts);

const calcDisplaySummary = acc => {
  const income = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, cur) => acc + cur, 0);
  labelSumIn.textContent = formatCur(income, acc.locale, acc.currency );
  const outCome = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, cur) => acc + cur, 0);
  labelSumOut.textContent =formatCur(Math.abs(outCome), acc.locale, acc.currency );
  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(mov => (mov * acc.interestRate) / 100)
    .reduce((acc, cur) => acc + cur, 0);
  labelSumInterest.textContent = formatCur(interest, acc.locale, acc.currency );
};
// calcDisplaySummary(account2.movements);
const calcDisplayBalance = acc => {
  acc.balance = acc.movements.reduce((acc, cur) => acc + cur, 0);
  labelBalance.textContent = formatCur(acc.balance, acc.locale, acc.currency );
};
// calcDisplayBalance(account2.movements);

// event listener

let currentAccount, timer;

// currentAccount = account1;
// updateUI(currentAccount);
// containerApp.style.opacity = 100;


// Experimenting API 
// const locale = navigator.language;
// console.log(locale);

// const dates = new Date();
// const options = {
//   // weekday: 'long',
//   year: 'numeric',
//   month: 'numeric',
//   day: 'numeric',
//   hour: '2-digit',
//   minute: 'numeric',
//   // second: 'numeric',
//   // hour12: true,
//   // timeZone: 'Asia/Shanghai'

// }
// labelDate.textContent = new Intl.DateTimeFormat(currentAccount.locale, options).format(dates);



let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});

btnLogin.addEventListener('click', e => {
  e.preventDefault();
  console.log('Logined');
  currentAccount = accounts.find(
    acc => acc.userName === inputLoginUsername.value
  );
  console.log(currentAccount);

  // ?. option operation
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // display UI  and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

// Create current date and time 
// const now = new Date();
// const day = `${now.getDate()}`.padStart(2, 0);
// const month = `${now.getMonth() + 1}`.padStart(2, 0);
// const year = now.getFullYear();
// const min = now.getMinutes();
// const hours = now.getHours();
// const sec = now.getSeconds();
// labelDate.textContent = `${day}/${month}/${year},${hours}:${min}`;

    // display movements and summary balance

    const  date = new Date();
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      weekday: 'long'
    }
    labelDate.textContent = new Intl.DateTimeFormat(currentAccount.locale, options).format(date);
    //Timer
if (timer) clearInterval(timer)
    timer = startLogoutTimer();
    // clear inputLogin
    inputLoginUsername.value = inputLoginPin.value = '';
    inputCloseUsername.value = inputClosePin.value = '';
    updateUI(currentAccount);
    // const inputLoginUsenameAtt = inputLoginUsername.getAttribute('class');
    // console.log(inputLoginUsenameAtt);

    inputLoginPin.blur(); // 失去鼠标焦点
  } else {
    confirm('输入错误，窗口即将关闭');
    containerApp.style.opacity = 0;
  }
});
console.log(accounts);
// transfer

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  console.log('ddd');
  const amount = Number(inputTransferAmount.value);
  const receiveAcc = accounts.find(
    acc => acc.userName === inputTransferTo.value
  );
  inputTransferTo.value = inputTransferAmount.value = '';

  if (
    amount > 0 &&
    receiveAcc &&
    currentAccount.balance >= amount &&
    currentAccount.userName !== receiveAcc?.userName
  ) {

      // doing the transfer
      currentAccount.movements.push(-amount);
      receiveAcc.movements.push(amount);
  
      // add transfer date
      currentAccount.movementsDates.push(new Date().toISOString());
      receiveAcc.movementsDates.push(new Date().toISOString());
      // updateUI
      updateUI(currentAccount);
      console.log('transfer done');
      
      

  }
  console.log(receiveAcc, amount);
});

//btnLoan
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(Math.round(inputLoanAmount.value));
  if (amount > 0 && currentAccount.movements.some(mov => mov > amount * 0.1)) {
setTimeout(() => {
  currentAccount.movements.push(amount);
  currentAccount.movementsDates.push(new Date().toISOString());
  updateUI(currentAccount);
  console.log('added');
  
}, 3000);

  } else console.log('can not execute it');
  inputLoanAmount.value = '';
});
//btnClosed

btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  console.log('done');

  if (
    inputCloseUsername.value === currentAccount.userName &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.userName === currentAccount.userName
    );
    console.log(index);
    inputCloseUsername.value = inputClosePin.value = '';


    accounts.splice(index, 1);
    containerApp.style.opacity = '0';
    labelWelcome.textContent = 'Log in to get started '

    console.log('do it');
  } else {
    console.log('something wrong');
  }
});




console.log(accounts);
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const depositss = movements.filter(mov => mov < 0);
console.log(depositss);

// reduce
const init = 0;
const balance = movements.reduce((acc, cur, i) => {
  console.log(`iterator ${i}: ${acc}`);
  return acc + cur;
}, init);

console.log(balance);

// maximum value
const max = movements.reduce((acc, cur) => {
  if (acc < cur) return acc;
  else return cur;
}, movements[0]);
console.log(max);

// example

const calcAverageHumanAge = ages => {
  const humanAge = ages
    .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter(age => age >= 18)
    .reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);
  return humanAge;
};
const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
console.log(avg1, avg2);

// 链式编程
const eurToUsd = 1.1;
// const totalDepositsUsd = movements.filter(mov => mov > 0)
// .map(mov => mov * eurToUsd)
// .reduce((acc, cur) => acc + cur, 0);
const totalDeposit = movements.reduce((sums, cur) => {
  if (cur > 0) sums += cur;
  return sums;
}, 0);
console.log(totalDeposit);

// find
const findMov = movements.find(el => el > 100);
console.log(findMov);

//accounts
const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);

// include //EQUALITY
console.log(movements.includes(-130));

//some  CONDITION
console.log(movements.some((item, index, array) => item > 500));
//every
console.log(movements.every((item, index, array) => item > 500));

// Separate CALLBACK
const deposits = mov => mov > 0;

console.log(movements.every(deposits));
console.log(movements.filter(deposits));
console.log(movements.some(deposits));

//flat
const arrFlat = [1, 2, [2, 5, 6, [6, 7, 8]]];
console.log(arrFlat.flat());

const accountMovements = accounts.map(mov => mov.movements).flat();
console.log(accountMovements);
const overBalance = accounts
  .map(mov => mov.movements)
  .flat()
  .reduce((acc, cur) => acc + cur, 0);
console.log(overBalance);

//flatMap
// flatMap() 方法首先使用映射函数映射每个元素
// ，然后将结果压缩成一个新数组。它与 map
// 连着深度值为 1 的 flat 几乎相同，但 flatMap 通

// const overBalance2 = accounts.
// flatMap(mov => mov.movements                                                                                        vements)
// .reduce((acc, cur) => acc + cur, 0);
// console.log(overBalance2);

const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
console.log(owners.sort());
console.log(owners.reverse());

// sort
const compareFn = function (a, b) {
  if (a > b) return 1;
  if (a < b) return -1;
  else return 0;
};
movements.sort(compareFn);
console.log(movements);

movements.sort((a, b) => b - a);
console.log(movements);

console.log([1, 2, 3, 4, 5, 6, 7]);
console.log(new Array(1, 2, 3, 4, 5));
const x = new Array(7);
console.log(x);
console.log(x.map(x => 5));
x.fill(5);
// fill (fill, start, end)
console.log(x);

// from ()
// Array.from() 方法对
// 一个类似数组或可迭代对象创建一个新的
// ，浅拷贝的数组实例。#ff00ff
const fromArr = Array.from(x);
console.log(fromArr);
console.log(fromArr.slice());
// console.log(fromArr.at());
const assignArr = [];
console.log(Object.assign(assignArr, fromArr));
function func1(a, b, c) {
  console.log(arguments[1]);
  // Expected output: 1

  console.log(arguments[1]);
  // Expected output: 2

  console.log(arguments[2]);
  // Expected output: 3
}
// arguments 是一个对应于传递
// 给函数的参数的类数组对象。
func1(887, 2, 3);

function f() {
  return Array.from(arguments);
}

console.log(f(1, 2, 3));

// [ 1, 2, 3 ]

const y = Array.from({ length: 6 }, () => 2);
console.log(y);
const z = Array.from({ length: 6 }, (_, i) => i + 1);
console.log(z);
const e = Array.from({ length: 100 }, () => Math.floor(Math.random() * 100));
console.log(e);

// labelBalance.addEventListener('click', function () {
//   const movementsUI = Array.from(
//     document.querySelectorAll('.movements__value'),
//     el => Number(el.textContent.replace('€', ''))
//   );
//   console.log(movementsUI);
// });
// separate opration
const movementsUI2 = [...document.querySelectorAll('.movements__row')];
console.log(movementsUI2);

const arrw = [1, , , , , , , 4];
console.log(arrw);
console.log(arrw[2]);
console.log(new Array(10).length);
console.log(new Array(10));

labelBalance.addEventListener('click', function () {
  [...document.querySelectorAll('.movements__row')].forEach(function (row, i) {
    if (i % 2 === 0) row.style.backgroundColor = 'red';
  });
});

// const user = "Steven Thomas Williams"; //stw
// const userName = user.toLowerCase().split(" ").
// map(word => word[0]).join('');

// console.log(userName);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

/////////////////////////////////////////////////

//迭代方法
//  every()：对数组每一项都运行传入的函数，如果对每一项函数都返回 true，则这个方法返回 true。
//  filter()：对数组每一项都运行传入的函数，函数返回 true 的项会组成数组之后返回。
//  forEach()：对数组每一项都运行传入的函数，没有返回值。
//  map()：对数组每一项都运行传入的函数，返回由每次函数调用的结果构成的数组。
//  some()：对数组每一项都运行传入的函数，如果有一项函数返回 true，则这个方法返回 true。

let number = [7, 23, 4, 5, 52, 25, 5];
let everyResult = number.every((item, index, array) => item > 2);
console.log(everyResult);
const result = number.map(function (x) {
  return x * 3;
});
console.log(result);
const red = [2, 4, 5];
const sum = red.reduce((acc, curr, element, index) => acc + curr);

console.log(sum);

// map
// like use arrow function #ff087b
const mapResult = movements.map(x => x * 1.1);
console.log(movements);

console.log(mapResult);
const movementsDescription = movements.map(
  (mov, i) =>
    `movement ${i + 1}: You ${mov > 0 ? 'deposit' : 'withdrawal'} ${Math.abs(
      mov
    )}`
);

console.log(movementsDescription);

// array method practice

const bankDepositSum = accounts
  .flatMap(acc => acc.movements)
  .filter(acc => acc > 0)
  .reduce((acc, cur) => acc + cur, 0);
console.log(bankDepositSum);

const numDeposit1000 = accounts
  .flatMap(acc => acc.movements)
  .reduce((count, cur) => (cur >= 1000 ? ++count : count), 0);
console.log(numDeposit1000);

// 3)
// const sums = accounts.flatMap(acc => acc.movements)
// .reduce((sum, cur) => {
//   cur > 0 ? (sum.deposit += cur) : (sum.withdrawal += cur)

// }, {deposit: 0, withdrawal: 0});

// console.log(sums);
// 2

const { deposit, withdrawal } = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sum, cur) => {
      // if (cur > 0) sum.deposit += cur;
      // else sum.withdrawal += cur;
      sum[cur > 0 ? 'deposit' : 'withdrawal'] += cur;
      return sum;
    },
    { deposit: 0, withdrawal: 0 }
  );

console.log(deposit, withdrawal);

const convertTitleCase = function (title) {
  const capitalize = str => str[0].toUpperCase() + str.slice(1);

  const exceptions = ['a', 'an', 'the', 'but', 'and', 'or', 'on', 'in', 'with'];
  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(word => (exceptions.includes(word) ? word : capitalize(word)))
    .join(' ');
  return capitalize(titleCase);
};
console.log(convertTitleCase('this is a nice title'));
console.log(convertTitleCase('this is a LONG title but not too long'));
console.log(convertTitleCase('and here is another title with an EXAMPLE'));

// code challenge
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];
// GOOD LUCK

dogs.forEach(dog => (dog.recFood = Math.floor(dog.weight ** 0.75 * 28)));
console.log(dogs[2].owners);
console.log(dogs);
const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(dogSarah);
console.log(
  `Sarah's dog is eating too ${
    dogSarah.curFood > dogSarah.recFood ? 'much' : 'little'
  }`
);

const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recFood)
  .flatMap(dog => dog.owners);
const ownersEatTooLittle = dogs
  .filter(dog => dog.curFood < dog.recFood)
  .flatMap(dog => dog.owners);
console.log(ownersEatTooLittle);

console.log(ownersEatTooMuch);

console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little`);

console.log(dogs.some(dog => dog.curFood === dog.recFood));

// call back
const checkEatingOkay = dog =>
  dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1;
console.log(dogs.some(checkEatingOkay));
console.log(dogs.filter(checkEatingOkay));

const dogSorted = dogs.slice().sort((a, b) => a.recFood - b.recFood);
console.log(dogSorted);

// Boolean 是对应布尔值的引用类型
let booleanObject = new Boolean(true);
console.log(typeof booleanObject);
console.log(booleanObject);

let falseObject = new Boolean(false);
let resultBool = falseObject && true;
console.log(resultBool);

let falseValue = false;
resultBool = falseValue && false;
console.log(resultBool);

// instanceof

// Number
// 与 Boolean 类型一样，Number 类型重写了 valueOf()、toLocaleString()和 toString()方
// 法。
console.log(23 === 23.0);

let numberObject = new Number(10);
console.log(numberObject);

const resultNum = 0.1 + 0.2;
console.log(resultNum);
// let num = 10;
// console.log(num.toString()); // "10"
// console.log(num.toString(2)); // "1010"
// console.log(num.toString(8)); // "12"
// console.log(num.toString(10)); // "10"
// console.log(num.toString(16)); // "a"
let num = 10;
console.log(typeof num.valueOf());
console.log(num.toString(2));
console.log(num.toString(8));
console.log(num.toString(16));
console.log(Number.parseInt('e23'));
console.log(Number.parseInt('30rem'));

// toFixed()方法返回包含指定小数点位数的数值字符串，
num = 10.0065;
console.log(num.toFixed(3));
console.log(0.2 + 0.1);
// 是 toExponential()
console.log(num.toExponential(10));
let numberValue = 10;
console.log(typeof numberValue);
console.log(typeof numberObject);
console.log(numberValue instanceof Number);
console.log(numberObject instanceof Number);
console.log(Number.isInteger(numberValue));
console.log(Number.isSafeInteger(2008974234234234));
console.log(Number.parseInt('0XFF', 16));
console.log(Number.parseInt('0101010111F', 2));
// check is value is NaN
console.log(Number.isNaN(NaN));
console.log(Number.isNaN('werwe'));
console.log(Number.isNaN(+'23px'));
console.log(Number.isNaN(0 / 0));

// checking is value is number
// Number.isFinite() 方法用来检测传入的参数是否是一个有穷数。
console.log(Number.isFinite(232));
console.log(Number.isFinite('323'));
console.log(Math.PI);
console.log(Math.ceil(23.2));
console.log(Math.floor(34.2));
console.log(Math.round(34.6));
console.log(Math.fround(34.2));
console.log(Math.E);
console.log(Math.LN10);
console.log(Math.LN2);
console.log(Math.floor(-45.8));
console.log(Math.trunc(-45.3));
console.log(Math.floor('45.3'));

// rounding decimal
// tofixed 会转换成string类型
console.log((2.7).toFixed(2));
console.log(typeof (2.7).toFixed(3));
console.log(typeof +(2.4).toFixed(0));

// RANDOM
const selectFrom = function (lowerValue, upperValue) {
  let choice = upperValue - lowerValue + 1;
  return Math.floor(Math.random() * choice + lowerValue);
};
console.log(selectFrom(2, 10));

console.log(Math.max(12, 43, '434'));
console.log(Math.min(12, 43, '434'));
console.log(Math.PI * Number.parseFloat('10px') ** 2);

const randInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
console.log(randInt(0, 10));
console.log(randInt(2, 23));

/*
// numeric sepaarators 

let diameter = 28_634_553_332_200;
console.log(diameter);
console.log(Number('23_300'));
// console.log(434244444444444444444444444444);
const theBiggestInt = 9007199254740991n;
console.log(typeof theBiggestInt);


const alsoHuge = BigInt(9007199254740991);
// ↪ 9007199254740991n

const hugeString = BigInt("9007199254740991");
// ↪ 9007199254740991n

const hugeHex = BigInt("0x1fffffffffffff");
// ↪ 9007199254740991n
console.log(hugeHex);


const hugeBin = BigInt("0b11111111111111111111111111111111111111111111111111111");
// ↪ 9007199254740991n
console.log(hugeBin);

// Operation 

console.log(2n > 1);
console.log(hugeBin * hugeHex);

if (hugeBin) console.log(alsoHuge, 'nih');
console.log(20n == 20);
console.log(20n === 20);






// bigInt 

console.log(2 ** 100 - 1 );
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.MAX_SAFE_INTEGER);

*/

/*
// DATE
let date = new Date('May 29, 2022  ');
console.log(date);
console.log(Date.now());
console.log(Date.parse('Tue Jun 06 2000 23:43:50'));

let y2k = new Date(Date.UTC(2023, 3));
console.log(new Date('Tue Jun 06 2000 23:43:50'));

console.log(y2k);
let allFive = new Date(Date.UTC(2000, 8, 6, 15, 43, 50));
console.log(allFive);
console.log(allFive.getTime()); // 相互转换
console.log(new Date(1678264040263));

console.log(allFive.getDate());
console.log(allFive.getDay()); //获得星期几
console.log(allFive.getFullYear());
console.log(allFive.getMonth());
console.log(allFive.getHours());
console.log(allFive.getMinutes());
console.log(allFive.getSeconds());
console.log(allFive.toISOString());

console.log(new Date());
console.log(new Date(0));
console.log(Date.length);

console.log(new Date(3 * 60 * 60 * 60 * 10000));

const calcDatePassed = (date1, date2) =>
  Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);

const day1 = calcDatePassed(new Date(2023, 3, 8), new Date(2023, 3, 18));
console.log(`相差：${day1}天！`);

const optional = {
  style: 'currency',   //currency, percent
  // unit: 'mile-per-hour'
  currency: 'RMB'
}
const  numOfDate = 432432.2423234;
console.log( 'US:', new Intl.NumberFormat('tt-RU', optional).format(numOfDate));
console.log( 'US:',new Intl.NumberFormat('zh-CN', optional).format(numOfDate));
console.log( 'US:',new Intl.NumberFormat('ar-SY', optional).format(numOfDate));


*/

// setTimeout 


const boardPassenagers = function (n, wait) {
  const perGroup = n / 3;
  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log( `There are 3 groups, each with ${perGroup} passengers`);
    
    
    
    
  }, wait * 1000)
  console.log(`Will start boarding in ${wait} seconds`);
}
boardPassenagers(27,4);


const argumentsFun = function () {
  console.log(`hello: ${arguments[0]}, ${arguments[1]}`);
}
argumentsFun(12,"hello")
const ingredients = ['olives', 'spinach', 'numeric'];
const pizzaTimer = setTimeout((ing, ing2, ing3) => console.log(`Here is your pizza 🤢 with ${ing}, and ${ing2}, and ${ing3}`), 4000,
...ingredients

);
console.log('waiting .....');
if (ingredients.includes('spinacha')) clearTimeout(pizzaTimer)



//setInterval

setInterval(() => {
const date = new Intl.DateTimeFormat('zh-CN', {
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric'
}).format(new Date())
// console.log(date);

  
  
}, 2000);
//regexp
const start = Date.now();

let text = 'mom and dad and baby';
let pattern = /mom(and dad(and baby)?)?/gi;
let matches = pattern.exec(text);
console.log(matches.index);
console.log(matches.input);
const stop = Date.now();
console.log(stop - start);
// 继承的方法

/*
// 代理
const target = {
  id: 'target',
  name: 'jonas',
  age: 32
};
const target1 = {
  id: 'joasn',
  sex: 'man',
  class: 'junio'
}
const handler = {};
const proxy = new Proxy(target, handler);
// id属性会访问同一个值；
console.log(target.id);
console.log(proxy.age);
// 给代理对象赋值会反应在两个对象上；
proxy.id = 'newTarget';
console.log(target.id);
console.log(proxy.id);
const proxy1 = new Proxy(target1, handler);
console.log(proxy1.id);
// 给目标属性复制会反应在两个对象上

target1.class = 'class1';
console.log(target1.class);
console.log(proxy1.class);


// hasOwnProperty()方法在两个地方 
// 都会应用到目标对象 
console.log(target.hasOwnProperty('id'));
console.log(proxy.hasOwnProperty('id'));


// console.log(target instanceof Proxy);
// console.log(proxy instanceof Proxy);

console.log(target === proxy);
// console.log(target == proxy);
// 定义捕获器 
// trap 
const targetTrap = {
  foo: 'bar'
}
const handlerTrap = {
  get() {
    // 捕获器在处理程序对象中以方法名为健　
    return 'handler override';
  }
}
const proxyTrap = new Proxy(targetTrap, handlerTrap);



console.log(8 % 3);

const isEven = (n) => n % 2 === 0;
console.log(isEven(4243));

labelBalance.addEventListener('click', function () {

  [...document.querySelectorAll('.movements_row')].forEach((el, i) => {
    if (i % 2 === 0) {
      el.style.backgroundColor = '#ff4367';
    }
  })
})
const dom = document.querySelectorAll('movements__row');
console.log(dom);

*/
