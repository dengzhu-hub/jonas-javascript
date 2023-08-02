"strict mode";
const bugget = Object.freeze([
  {
    value: 250,
    description: "Sold old TV 📺",
    user: "jonas",
  },
  {
    value: -45,
    description: "Groceries 🍎",
    user: "jonas",
  },
  {
    value: 3500,
    description: "Monthly salary 💰",
    user: "jonas",
  },
  {
    value: 300,
    description: "Freelancing ❤️",
    user: "jonas",
  },
  {
    value: -1100,
    description: "new iphone 📱",
    user: "jonas",
  },
  {
    value: -20,
    description: "Candy 🤢",
    user: "matilda",
  },
  {
    value: -125,
    description: "Toys 🧸",
    user: "matilda",
  },
  {
    value: -1800,
    description: "New Laptop 💻",
    user: "jonas",
  },
]);

// bugget[0].value = 10000;
// bugget[0] = 'jonas';
const spendingLimits = Object.freeze({
  jonas: 1500,
  matilda: 100,
  jack: 200,
});

// impure function
const getLimit1 = user => spendingLimits?.[user] ?? 0;

// 修改为pure function

const getLimit = (limit, user) => limit?.[user] ?? 0;

//pure function :D
const addExpense = function (state, limit, value, description, user = "jonas") {
  // const application = state;
  // if (!user) user = "jonas";
  // user = user.toLowerCase();
  // let lim;
  // if (spendingLimits[user]) {
  //   lim = spendingLimits[user];
  // } else {
  //   lim = 0;
  // }

  // const limit = spendingLimits[user] ? spendingLimits[user] : 0;

  // if (value <= getLimit(user)) {
  //   bugget.push({ value: -value, description, user });
  // }
  const cleanUser = user.toLocaleLowerCase();
  return value <= getLimit(limit, cleanUser)
    ? [...state, { value: -value, description, user: cleanUser }]
    : state;
};

const newBugget1 = addExpense(bugget, spendingLimits, 100, "pizza 🍕");
// console.log(newBugget1);
const newBugget2 = addExpense(newBugget1, spendingLimits, 200, "apple 😘");
// console.log(newBugget2);
const newBugget3 = addExpense(
  newBugget2,
  spendingLimits,
  200,
  "gule 👻",
  "jack"
);
console.log(newBugget3);

// addExpense(10, "pizza 🍕");
// addExpense(100, "going to moives 💀", "Matilda");
// addExpense(200, "stuff 👻", "jonas");

const checkExpense = (state, limit) => {
  // for (const entry of bugget)
  //   if (entry.value < -getLimit(limit,entry.user)) entry.flag = "limit";
  return state.map(el => {
    return el.value < -getLimit(limit, el.user) ? { ...el, flag: "limit" } : el;
  });
};

const checkExpense2 = (state, limit) =>
  state.map(entry =>
    entry.value < -getLimit(limit, entry.user)
      ? { ...entry, flag: "limit" }
      : entry
  );
const checkResult = checkExpense2(newBugget3, spendingLimits);
console.log(checkResult);

const logBigExpense = function (state, bigLimit) {
  // let output = "";
  // for (const el of bugget)
  //   output += el.value <= -bigLimit ? `${el.description.slice(-2)} / ` : "";
  // // if (el.value <= -bigLimit) {
  // //   output += `${el.description.slice(-2)} / `;
  // // }

  // output = output.slice(0, -2);
  // console.log(output);
  const bigExpense = state
    .filter(entry => entry.value <= -bigLimit)
    .map(entry => entry.description.slice(-2)).join(' / ');
  console.log(bigExpense);
};

// console.log(bugget);

logBigExpense(newBugget3, 500);


function func1(a, b, c) {
  console.log(arguments[0]);
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
