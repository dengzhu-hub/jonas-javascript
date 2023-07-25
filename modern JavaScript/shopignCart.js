// exporting module
console.log("export module");

// bloing code

console.log("Starting to fetch");
await fetch("https://jsonplaceholder.typicode.com/todos");
console.log("Finished fetching");

const shipingCard = 5;
export const cart = [];

const totalPrice = 100;
const totalQuantity = 43;
const addToCart = (product, quantity) => {
  cart.push({ product, quantity });
  console.log(`${product} added to cart`);
  console.log(...cart);
};

export { totalPrice, totalQuantity as qt, addToCart };
export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
  console.log(...cart);
}


