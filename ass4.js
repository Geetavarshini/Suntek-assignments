// Test Data
const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];

let res = cart.filter(item => item.inStock);
console.log("In-stock products:", res);

let res1 = res.map(item => ({
  name: item.name,
  totalPrice: item.price * item.quantity
}));
console.log("Product totals:", res1);

let grandTotal = res1.reduce(
  (sum, item) => sum + item.totalPrice,
  0
);
console.log("Grand total:", grandTotal);

let res2 = cart.find(item => item.name === "Mouse");
console.log("Mouse details:", res2);

let res3 = cart.findIndex(item => item.name === "Keyboard");
console.log("Keyboard position:", res3);
