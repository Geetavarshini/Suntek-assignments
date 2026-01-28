// Hands-On 2: Deep Copy (Isolation & Safety Use Case)
// ---------------------------------------------------

// 🧪 Given Data:
//                 const order = {
//                   orderId: "ORD1001",
//                   customer: {
//                     name: "Anita",
//                     address: {
//                       city: "Hyderabad",
//                       pincode: 500085
//                     }
//                   },
//                   items: [
//                     { product: "Laptop", price: 70000 }
//                   ]
//                 };

// 🎯 Task:
//       1. Create a deep copy of order
//       2. Modify in copied object:
//             i. customer.address.city
//             ii. items[0].price
//             iii. Verify original object remains unchanged


//creating order object
const order = {
    orderId: "ORD1001",
    customer: {
    name: "Anita",
    address: {
        city: "Hyderabad",
        pincode: 500085
    }
    },
    items: [
    { product: "Laptop", price: 70000 }
    ]
};
// creating a deep copy of object using strcutredClone() method
let copyOrder=structuredClone(order)
//modifying the customer address in copyOrder object
copyOrder.customer.address.city="Tarnaka";
//modifying item price in copied object
copyOrder.items[0].price=100000;
//priting both the objects
console.log("Original object:",order);
console.log("Copied project",copyOrder);