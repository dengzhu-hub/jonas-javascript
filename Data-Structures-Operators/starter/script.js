'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 12,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  orders(starter, mainCourse) {
    return [this.starterMenu[starter], this.starterMenu[mainCourse]];
  },
  // ES6 enhanced object literals
  openingHours,
  orderDelivert(
    starterIndex = 1,
    mainIndex = 0,
    time = '22:00',
    address = 'via del'
  ) {
    console.log(
      `Order recived! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },
  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// Optional Chaining

// console.log(restaurant.openingHours.mon);
// if (restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);
// if (restaurant.openingHours && restaurant.openingHours.mon)
//   console.log(restaurant.openingHours.mon);
// // WITH OPTIONAL CHAINING
console.log(restaurant.openingHours.mon?.open);

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  console.log(day);
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  // console.log(open);
  console.log(`On ${day}, we open at ${open}`);
}

// // method
console.log(restaurant.orders?.(0, 1) ?? "Method doesn't exits");
console.log(restaurant.orderRisotto?.(0, 1) ?? "Method doesn't exits");

// // Array
const users = [{ name: 'Jonas', email: 'hello@jonas.io' }];
console.log(users[1]?.name ?? 'Array is empty1');

// Looping object keys, values
// const properties = Object.keys(openingHours);
// const values = Object.values(openingHours);
// console.log(values);

// console.log(properties);
// for (const day of Object.keys(values)) {
//   console.log(day);
// }

// const entries = Object.entries(openingHours);
// for (const [key, { open, close }] of entries) {
//   console.log(`On ${key} we open at ${open} and close at ${close}`);
// }

//Coding Challenge

// DESTRUCTURING ARRAY
// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];
// const [x, y, z] = arr;
// console.log(typeof (x, y, z));
// console.log(arr);

// const [first, , second] = restaurant.categories;
// console.log(first);
// console.log(second);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);
// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// //
// console.log(restaurant.orders(2, 1));

// // RECEIVE 2 RETURN VALUES FROM A FUNCTION
// const [starter, mainCourse] = restaurant.orders(2, 0);
// console.log(starter, mainCourse);

// const nested = [2, 4, [5, 6]];
// // const [i, , j] = nested;
// // console.log(i, j);
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// DEFAULT VALUE
// const [i = 2, j = 3, k = 4] = [9, 10];
// console.log(i, j, k);

// DESTRUCTURING OBJECT
// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// // DEFAULT VALUE
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// // MUTATING VARIABLES
// let a = 2;
// let b = 3;
// const obj = { a: 4, b: 5 };
// ({ a, b } = obj);
// console.log(a, b);

// // Nested object
// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);

// restaurant.orderDelivert(2, 0, '23:47', 'wkru');
// restaurant.orderDelivert({
//   time: '22:30',
//   address: '重庆工业职业技术学院',
//   mainIndex: 2,
//   starterIndex: 3,
// });
// restaurant.orderDelivert();

/*
// Spread operator

const arr = [1, 3, 5];
const arrNew = [6, ...arr];
// console.log(arrNew);

const menuNew = [...restaurant.mainMenu, 'jonas'];
// console.log(menuNew);

// copy array

// 真正复制一个对象。
// const jessica = {
//   firstName: 'Jessica',
//   lastName: 'Williams',
//   age: 27,
//   family: ['Jane', 'Michael', 'Bro'],
// };

// const jessicaCopy = Object.assign({}, jessica);
// jessicaCopy.lastName = 'Schmedtmann';

// // 浅拷贝
// jessica.family.push('Steven', 'Dava');
// console.log(jessicaCopy);
// console.log(jessica);

const mainMenuCopy = [...restaurant.mainMenu];

const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];

// console.table(menu);

// Iterables: arrays string set map, Not objects.

// const ingredient = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt("Let's make pasta! Ingredient 2?"),
//   prompt("Let's make pasta! Ingredient 3?"),
// ];
// console.log(...flights);

// restaurant.orderPasta(...ingredient);

// OBJECT
const newRestaurant = { ...restaurant, founder: 'Guiseppe' };
// console.log(newRestaurant.founder);
// console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
// console.log(restaurantCopy.name);

// console.log(restaurant.name);

// 1)Destructuring
// REST PATTERN AND PARAMETERS
//  spread , because on right side of =
const array = [1, 2, ...[3, 4]];
// console.log(array);
const [a, , , d] = array;
// console.log(a, d);
// rest, because of left side of =
const [f, b, ...others] = ['apple', 'orange', 'peach', 'banana'];
// console.log(f, others);

const mainMenu = restaurant.starterMenu;
// console.log(mainMenu);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
// console.log(pizza, risotto, otherFood);

const [...foods] = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(foods);
// console.log(...foods);

// objects
const { sat, ...weekdays } = restaurant.openingHours;
// console.log(sat, weekdays);

// )2 Function

const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};
add(2, 4, 7, 8);
const plus = [33, 455, 22, 12];
add(...plus);

restaurant.orderPizza('mushroom', ...restaurant.starterMenu);
restaurant.orderPizza('mushroom');
*/

// Short Circuting(&& and _)
console.log(3 || 'Jonas');
// const found = true;
// const result = found || hids;
// console.log(result);
// const myObject = null || 'Jonas';
// console.log(myObject);
// console.log('' || true);

console.log(null || undefined);
console.log(undefined || 0 || false || '' || null || 'Hello');
// const guest1 = restaurant.numGuest ? restaurant.numGuest : 10;
// console.log(guest1);
// const guest2 = restaurant.number || 10;
// console.log(guest2);
// console.log('----AND----');
console.log(undefined && found);
console.log(null && Array(1, 3));
// console.log('Hello' && 2 && 4 && 'Jonas');

// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushroom', 'pizza', 'peach', 'fruit');
// }

// 2 + 5 && restaurant.orderPizza('mushroom', 'spinach');

// Nullish: null and undefined
// restaurant.numGuest = 0;
const guest = restaurant.numGuest ?? 10;
// console.log(guest);
const large = false;
const guest1 = large ?? 'Jonas';
console.log(guest1);

const rest1 = {
  name: 'Capri',
  numGuests: 103,
};
const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

// OR assignment operator
rest2.numGuets = rest1.numGuests || 10;
// rest1.numGuests = rest1.numGuests || 10
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;
// console.log(rest2);
// console.log(rest1);

// nullish assignment operator (null or undefined)
rest1.numGuests ?? 10;
rest2.numGuests ?? 10;
console.log(rest1);
console.log(rest2);

// && assignment operator

rest1.numGuests = rest1.owner && 1;
rest2.numGuests = rest2.owner && 3;
// rest1.owner &&= '<ANONYMOUS>';
// rest2.owner &&= '<ANONYMOUS>';
console.log(rest1);
console.log(rest2);

// challenge 4
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akavaluesnji',
      'Hakimi',
      'weigl',
      'witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4.0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski'],
  date: 'Nov 9th, 2037',
  odds: { team1: 1.33, x: 3.25, team2: 6.5 },
};

// // 1)
// const [players1, players2] = game.players;
// console.log(players1, players2);
// // 2)
// const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);
// // 3)
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);
// // console.log(...allPlayers);
// // 4)
// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Periscic'];
// // console.log(players1Final);
// // 5)
// const { team1, x, team2 } = game.odds;
// console.log(team1, x, team2);
// // 6)
// const printGoals = function (...players) {
//   console.log(players);
//   console.log(`${players.length} goals were scored`);
// };

// printGoals('Jonas', 'mosh', 'jack');
// printGoals('jack');
// printGoals(...game.scored);
// // 7)
// team1 < team2 && console.log('Team1 is more likely to win!');
// team1 > team2 && console.log('Team2 is more likely to win!');

// challenge
// for (const [i, player] of game.scored.entries()) {
//   console.log(`player ${i + 1}: ${player}`);
// }

// let average = 0;
// const odds = Object.values(game.odds);
// for (const odd of Object.values(odds)) average += odd;
// average = average / Object.values(odds).length;
// console.log(average);

// for (const [key, value] of Object.entries(game.odds))
//   console.log(`You are: ${key} and gain: ${value}`);

// for (const [team, odd] of Object.entries(game.odds)) {
//   const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
//   console.log(`odd of ${teamStr} ${odd}`);
// }
// //Looping Arrays_The for-of Loop

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// for (const item of menu) console.log(item);
// for (const item of menu.entries()) console.log(item);

// for (const [i, e] of menu.entries()) {
//   console.log(`${i + 1}: ${e}`);
// }

// Set

// const m = new Set();
// m.add('Jonas');
// console.log(m);
// const size = m.size;
// console.log(size);
// const orderSet = new Set(['Pasta', 'Pizza', 'Pizza', 'jonas', 'acquire']);
// console.log(orderSet);
// console.log(new Set('JOnas'));
// console.log(orderSet.size);
// orderSet.add('Jack').add('plus');
// console.log(orderSet);
// console.log(orderSet.has('jack'));
// // orderSet.clear();
// // console.log(...orderSet);
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Staff'];
const staffUnique = [new Set(staff)];
// const staffUnique = new Set(staff);
// console.log(staffUnique);

// for (const value of orderSet.keys()) {
//   console.log(value);
// }
// const s = new Set().add('jonas');
// s.add('jack').add('mosh');
// console.log(s.size);
// console.log(s.has('nosh'));
// const functionVal = function () {};
// const symbolVal = Symbol();
// const objectVal = new Object();
// s.add(functionVal).add(symbolVal);
// console.log(s);

// Map

// Map 的键可以为任何JavaScript类型；
// 跟object的区别；
const m = new Map();
// console.log(...m);
const rest = new Map();
rest.set('name', 'jonas').set(1, 'Firenze').set(2, 'Libosn');
console.log(rest.set('age', 23));
for (const [key, value] of rest.entries()) {
  console.log(key + ',' + value);
}
// rest.set(true, 'We are open: D').set(false, 'We are closed: D');
// rest.set('open', 11).set('close', 23);
// console.log(rest.get(true));

// console.log(rest.has(true));
// const time = 1;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));
// console.log(rest.size);
// rest.clear();
// rest.set([1, 3], 'Test').set(restaurant, 'hahah');
// console.log(rest);
// for (const value of rest.keys()) console.log(value);

// rest.set(document.querySelector('h1'), 'heading');
// console.log(rest);

const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct 🚗'],
  [false, 'error🎇'],
]);
// console.log(question);

// Convert object to map;
const openMap = new Map(Object.entries(openingHours));
// console.log(openMap);

console.log(question.get('question'));

for (const [key, value] of question.entries()) {
  if (typeof key === 'number') console.log(`Answer: ${key}: ${value}`);
}
console.log(question.get('correct'));

const answer = Number(prompt('What is your answer?'));
console.log(question.get(answer == question.get('correct')));
console.log([...question]);

// Which data structure  to use?

// Challenge 3
const gameEvent = new Map([
  [17, '⚾ Goal'],
  [36, '🎟 Substitution'],
  [47, '⚾ Goal'],
  [61, '🎟 Substitution'],
  [64, '🥽 Yellow card'],
  [69, '🎇 Red card'],
  [70, '🎟 Substitution'],
  [72, '🎟 Substitution'],
  [76, '⚾ Goal'],
  [80, '⚾ Goal'],
  [92, '🎇 Red card'],
]);

// // 1)
// const events = [...new Set(gameEvent.values())];
// console.log(events);
// // 2)

// gameEvent.delete(64);
// console.log(gameEvent.has(64));
// // 3)
// console.log(
//   `An event happened, on everage, every ${90 / gameEvent.size} minutes`
// );
// const time = [...gameEvent.keys()].pop();
// console.log(time);
// console.log(
//   `An event happened, on everage, every ${time / gameEvent.size} minutes`
// );
// // 4)
// for (const [min, event] of gameEvent) {
//   const half = min < 45 ? 'FIRST' : 'SECOND';
//   console.log(`[${half} HALF] ${min}: ${event}`);
// }

// WORKING WITH STRING

const airline = 'Top Air Portugal';
const plane = 'A320';
// console.log(plane[0]);
// console.log(plane[2]);
// console.log('bonsd'[0]);
// console.log('sdsadsd'.length);
// console.log(airline.lastIndexOf());

// console.log(airline.indexOf('g'));
// console.log(airline.slice(2));
// console.log(airline.charAt(5));
// console.log(airline.charCodeAt(5));
console.log(String.fromCharCode('\xA9'));
// console.log(String.fromCharCode(0x43));
// console.log(String.fromCharCode(0x00c5));
// console.log(String.fromCharCode(0x212b));
// console.log(airline.slice(4));
// console.log(airline.slice(4, 7));
// console.log(airline.slice(0, airline.indexOf(' ')));
// console.log(airline.slice(airline.lastIndexOf(' ') + 1));

const checkMiddleSeat = function (seat) {
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('You got the middle seat.');
  else console.log('You got lucky');
};
// checkMiddleSeat('11B');
// checkMiddleSeat('3C');
// checkMiddleSeat('4E');
// 自动拆箱装箱 String Object

console.log(airline.toUpperCase());
console.log(airline.toLowerCase());
console.log(airline.toLocaleLowerCase());
const passenger = 'jOnAS';
const passengerLower = passenger.toLowerCase();
const passengerRight = passenger[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerRight);

// comparing emails
const email = 'hello@jonas.io';
// const loginEmail = prompt('Enter you email to login!');
// const normalizeEmail = loginEmail.toLowerCase().trim();
// if (email === normalizeEmail) console.log('Login over!');

// replacing
const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$');
console.log(priceUS);
const p =
  'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';

console.log(p.replace('dog', 'monkey'));
console.log(p.replaceAll('dog', 'monkey'));
console.log(p.replace(/dog/gi, 'monkey'));

// expected output: "The quick brown fox jumps over the lazy monkey. If the dog reacted, was it really lazy?"

const planes = 'Airbus A320neo';
console.log(planes.includes('A32'));
console.log(planes.startsWith('32'));
console.log(planes.endsWith(0));
if (planes.startsWith('Air') && planes.endsWith('neo'))
  console.log('Part of the NEW ARirbus family');

const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('gun') || baggage.includes('knife'))
    console.log('You are not allowed on board');
  else console.log('Welcome abroad');
};
// checkBaggage('I have a laptop, some Food and a pocket Knife');
// checkBaggage('Socks and camera');
// checkBaggage('Got some snacks and a gun for protection');

const splitString = 'a+very+nice+string';
console.log(splitString.split('+'));
const arr = ['nice', 'to', 'meet', 'too', 'you'];
console.log(arr.join(' '));
const [firstName, lastName] = 'jonas Schnedtmann'.split(' ');
const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');

console.log(newName);

const capitalizeName = function (name) {
  const namesUpper = [];
  const names = name.split(' ');
  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};
// capitalizeName('jonas Schmedtmann');
// capitalizeName('jack deng');
// capitalizeName('jessica ann smith davis');

const message = 'Go to gate 23';
console.log(message.padStart(25, '*'));
console.log('jonas'.padStart(25, '*'));
console.log(message.padEnd(32, ' 圓'));
const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(123123124124124));
console.log(maskCreditCard(5345252424));
console.log(maskCreditCard(1414717835431));

// repeat
const messageNews = 'we are family, do you think so. \n';
console.log(messageNews.repeat(5));
console.log(messageNews.repeat(4));


const planeInLine = function (num) {
  console.log(`There are ${num} planes in line ${'🛬'.repeat(num)}`);
};
planeInLine(4);
planeInLine(12);
planeInLine(3);

// code challenge #4 🛬
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));
document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');

  for (const [i, row] of rows.entries()) {
    const [first, last] = row.toLocaleLowerCase().trim().split('_');
    const output = `${first}${last.replace(last[0], last[0].toUpperCase())}`;
    console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
  }
});

// ✅✅✅✅✅✅

// udnderscore_case;
// first_name;
// Some_Variable;
// calculate_AVG;
// delayed_departure;
const getCode = str => str.slice(0, 3).toUpperCase();
const flight =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

for (const flights of flight.split('+')) {
  // console.log(flights);
  const [type, from, to, time] = flights.split(';');
  console.log(type, from, to, time);

  const output = `${type.startsWith('_Delayed') ? '🎃' : ''}${type.replaceAll(
    '_',
    ' '
  )} ${getCode(from).padEnd(6, ' to').padStart(11, 'from ')} ${getCode(
    to
  )} (${time.replace(':', 'h')})`.padStart(36, "*");
  console.log(output);
}
