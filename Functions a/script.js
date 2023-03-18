'use strict';
const bookings = [];
const createBooking = function (flightNum, numberPasswngers = 1, price = 199) {
  const booking = {
    flightNum,
    numberPasswngers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
  //   console.log(bookings);
};

// createBooking('LH123');
// createBooking('KH876', 432, 999);
// createBooking('KHSD', undefined, 1000);

const flight = 'LH12';
const jonas = {
  name: 'Jonas Schmedtmann',
  passport: 123213412341,
};
const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr.' + passenger.name;
  if (passenger.passport === 123213412341) {
    alert('Check in.');
  } else {
    alert('Wrong passport.');
  }
};
// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

// // IS THE SAME AS DOING....
// const flightNum = flight;
// const passenger = jonas;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000);
};

// newPassport(jonas);
// checkIn(flight, jonas);
// console.log(jonas);

// const setName = function (obj) {
//   obj.name = 'jonas';
//   obj = new Object();
//   obj.name = 'fsadf';
// };
// let person = new Object();
// setName(person);
// // console.log(person.name);

function sayHi() {
  console.log(
    'Hello ' + arguments[0] + ' ' + arguments[1] + ' ' + arguments[2]
  );
}
// sayHi();
// sayHi('asdjkh', 1231);
// sayHi('邓柱', 23, 342);
// function howManyArgs() {
//   console.log(arguments.length);
// }
// // howManyArgs(1, 3, 32, 'hello');
// // howManyArgs(43, 2);

// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };
// const upFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };
// const transformer = function (str, fn) {
//   console.log(`Original string: ${str}`);
//   console.log(`Transformer string: ${fn(str)}`);
//   console.log(`Transformed by: ${fn.name}`);
//   // 获得函数名； fn.name;
// };
// transformer(
//   'JavaScript is the best programer Language in the world',
//   upFirstWord
// );
// transformer('JavaScript is the best programer Language in the world', oneWord);
// console.log(oneWord('he llo wo rld'));
// const str = 'Javascript is the best.';
// const [first, ...others] = str.split(' ');
// // console.log([first.toUpperCase(), ...others].join(' '));

// // JS uses callback all the time
// const high5 = function () {
//   console.log('\u3532');
// };
// document.body.addEventListener('click', high5);
// ['Jonas', 'Martha', 'Adam', 'Java'].forEach(high5);

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};
const greeter = greet('Hey');
// greeter('Jonas');
// greeter('Steven');
// greet('Hello')('Jonas '); // 函数式编程

// Overide
// const greetArrow = greeting => {
//   return name => {
//     console.log(`${greeting} ${name}`);
//   };
// };
const greetArrow = greeting => name => {
  console.log(`${greeting} ${name}`);
};
// greetArrow('Hey')('jackdeng');

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline}
       flight ${this.iataCode}${flightNum}`
    );
    // this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};
// lufthansa.book();
// lufthansa.book(2343, 'Jackdeng');

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'HW',
  booking: [],
};
// 在严格模式下， function（） 也为块作用域
// doesn't work
const book = lufthansa.book;
// book(435, '邓柱');

// call method
// book.call(eurowings, 23, 'hWING');
// console.log(eurowings);

// const swiss = {
//   airline: 'Swiss Air Lines',
//   iataCode: 'LX',
//   bookings: [],
// };

// book.call(swiss, 847, 'Marry Cooper');
// console.log(swiss);
// console.log(lufthansa);

// Apply method
const flightData = [583, 'George Cooper'];
// apply 第二参数接数组
// book.apply(swiss, flightData);
// console.log(swiss);
// book.call(swiss, ...flightData);
// book.call(swiss, 847, 'Marry Cooper');
// const bookLH = book.bind(lufthansa);
// bookLH(75, '张雪峰');
// const bookEW = book.bind(eurowings);
// bookEW(32, '刘都成');
// const bookEW24 = book.bind(eurowings, 24);
// bookEW24('Jonas Schmedtmann');

// with event Listener
// lufthansa.planes = 300;
// lufthansa.buyPlane = function () {
//   console.log(this);
//   this.planes++;
//   console.log(this.planes);
// };

// // this随着上下文变化而变化

// const buyPlaneBtn = document.querySelector('.buy');
// buyPlaneBtn.addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(10, 3000));
// console.log(addTax(0.1, 200));
// // bind
// const addVAT = addTax.bind(null, 0.3);
// console.log(addVAT(2000));

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };
// const addTaxRate = function (rate) {
//   return function (value) {
//     return value + value * rate;
//   };
// };
// const addVAT2 = addTaxRate(0.45);
// console.log(addVAT2(100));
// console.log(addVAT2(300));

// code challenge

const poll = {
  question: 'What is your favourit programming language?',
  options: ['0: javascript', '1: Python', '2: Rust', '3: c#'],
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    // Get answer
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n
      (Write option number)`
      )
    );

    // Register answer
    typeof answer === 'number' &&
      answer < this.answers.length &&
      this.answers[answer]++;
    this.displayResults();
    this.displayResults('string');
  },
  // display result
  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`Poll results are ${this.answers.join(',')}`);
    }
  },
};
// poll.registerNewAnswer();
document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

// bonus
// [5, 2, 1]
// [1, 5, 3, 9, 6]

// poll.displayResults.call({ answers: [5, 2, 1] });
// poll.displayResults.call({ answers: [1, 5, 3, 9, 6] }, 'string');

// array.fill();
// fill 方法接受三个参数 value、start 以及 end、start 和 end 参数是可选的，其默认值分别为 0 和 this 对象的 length 属性值。

// 如果 start 是个负数，则开始索引会被自动
const arr = [1, 3, 4, 5];
// 第一个参数是，要填充的值，第二、三，个是可选的，
// 起始位置， 结束位置，索引号
arr.fill(3);
console.log(arr);

// console.log(arr);

// Immediately Invoked Function Expressions(IIEF)
const runOne = function () {
  console.log("This will nevers run again. no impossible , it's may be");
};
// runOne();

// 执行一次

// (function () {
//   console.log('This will never run agains 2');
//   // 函数作用域
//   var isprivate = 23;
// })();
// (function () {
//   let x = 4;
//   console.log(`x + 3=${x + 3}`);
// })();
// console.log(isprivate);

// (() => console.log('This also will never run agains 3'))();
// (() => console.log('hello this is arrow function ? doyou'))();

// scope ES6
{
  var bigData = 23;
  const bigDatas = 12;
  let vari = 2;
}
// console.log(bigData);
// console.log(vari);
// console.log(bigDatas);

var count = 0;
// Closures
const secureBooking = function () {
  let passengerCount = 100;
  // return a function
  return function () {
    passengerCount++; 
    console.log(`${passengerCount} passengers`);
    // console.log(`${passengerCount}` );
    
  };
};

const display = secureBooking();
display();
display();
display();
console.dir(display);

// eg

const createComparisionFunction = function (propertyName) {
  return function (obj1, obj2) {
    let value1 = obj1[propertyName];
    let value2 = obj2[propertyName];

    if (value1 < value2) {
      return -1;
    } else if (value1 > value2) {
      return 1;
    } else {
      return 0;
    }
  };
};
let compare = createComparisionFunction('name');
let result = compare({ name: 'Mosh' }, { name: 'Mosh' });
compare = null;
console.log(result);

//weakmap
const wm = new WeakMap();


let f;
const g = function (dir) {
  const a = 32;
  f = function () {
    console.log(a * 32 + dir);
    
  }
}
const h = function () {
  const b = 888;
  f = function () {
    console.log(b * 2);
    
  }
}
g(21);
f();

// re-assigning f function
h();
f();
console.dir(f);

// example 2

const boardPassenagers = function (n, wait) {
  const perGroup = n / 3;
  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log( `There are 3 groups, each with ${perGroup} passengers`);
    
    
    
    
  }, wait * 10000)
  console.log(`Will start boarding in ${wait} seconds`);
}
boardPassenagers(27,4);



// JSON
let bookjson = {
  title: "Professional Javascript",
  authors: [
    "Nicholas C. Zakas",
    "Matt Frisbie"
  ],
  edition: 4,
  year: 2017
};
let jsonTest = JSON.stringify(bookjson,["title","edition"]);
console.log(jsonTest);


let bookcopy = JSON.parse(jsonTest);
console.log(bookcopy);
(function () {
  const header = document.querySelector("h1");
  header.style.color = 'red';
  document.querySelector('body').addEventListener('click', function () {
    header.style.color = '#228be6';
    header.style.fontSize = '60px';
  // header.style.visibility = 'hidden';
  header.textContent = '你好世界，哈哈哈';

  })
})();










