/* The spread operator is used to expand elements of an array, object, or iterable into individual items. It’s represented by three dots (...). For arrays, it allows us to easily extract or spread values, making operations like splitting arrays or merging arrays simpler. */

/* const numbers = [1, 2, 3, 4, 5];
const [first, second, ...remaining] = numbers;

console.log(first); // Output: 1
console.log(second); // Output: 2
console.log(remaining); // Output: [3, 4, 5]
 
first gets the value 1.

second gets the value 2.

remaining is assigned the rest of the elements as a subarray [3, 4, 5].


*/

// Part 1: Separate Array Elements
    /* Use the spread operator to destructure the topSixRestaurants array into:

            The first three elements assigned to variables: first, second, third.

            The remaining elements grouped into a subarray: remaining. */
const topSixRestaurants = ["Chick-fil-A", "In-N-Out", "Chipotle", "McDonald's", "Taco Bell", "KFC"];

var [first, second, third, ...remaining] = topSixRestaurants;
console.log(`First restaurant: ${first}`);
console.log(`Second restaurant: ${second}`);
console.log(`Third restaurant: ${third}`);
console.log(`Remaining restaurants: ${remaining}`);