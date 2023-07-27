var bugget = [
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
    description: "Candy",
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
];
var limits = {
  jonas: 1500,
  matilda: 100,
};
var add = function (value, description, user) {
  if (!user) user = "jonas";
  user = user.toLowerCase();
  var lim;
  if (limits[user]) {
    lim = limits[user];
  } else {
    lim = 0;
  }
  if (value <= lim) {
    bugget.push({ value: -value, description, user });
  }
};

add(10, 'pizza 🍕');
add(100, 'going to moives 💀', 'Matilda')
console.log(bugget);
