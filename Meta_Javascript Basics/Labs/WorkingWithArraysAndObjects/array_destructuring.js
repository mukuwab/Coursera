/*Array destructuring is a syntax that allows you to unpack 
values from an array into individual variables. 

const item = ["Laptop", 1000];
const [name, price] = item; // Destructures the array into variables
console.log(name); // Output: Laptop
console.log(price); // Output: 1000

Here, the name variable takes the first value, and the price variable 
takes the second value from the array.  
*/


// Array of arrays containing product names and prices
const products = [
    ["Laptop", 1000],
    ["Phone", 500],
    ["Tablet", 700]
];

// Destructure the second product
const [, [secondProductName, secondProductPrice]] = products;

// Print the second product details
console.log(`Second product: ${secondProductName}`);
console.log(`Second product price: ${secondProductPrice}`);
