/* By using the rest operator, you can gather multiple elements into a single array or object. It's useful for handling remaining items in destructuring or collecting arguments in function */


//For example, in array destructuring:

const [first, ...rest] = [1, 2, 3, 4];

console.log(first); // 1

console.log(rest);  // [2, 3, 4]


//Or in a function to collect arguments:

function sum(...numbers) {
    //Put all the arguments passed into the function into an array called numbers.
    //numbers = [1, 2, 3];
  return numbers.reduce((total, num) => total + num, 0);
    //reduce() takes an array and combines all its elements into a single value by repeatedly applying a function.
    /* total starts at the initial value, which is 0.

On each step, it adds num (the current number) to total.
Step  | total (accumulator)	| num (current) |  total + num
1	            0	            1	               1
2	            1	            2	               3
3	            3	            3	               6

At the end, it returns 6.
*/

}

console.log(sum(1, 2, 3)); // 6

/* Differences between spread and rest operators
Spread Operator

Expands arrays, objects, or strings into individual elements or properties.

Used for concatenation, copying, or passing arguments.

Rest Operator

Gathers multiple elements into a single array or object.

Used in destructuring or collecting function arguments. */


/* oin arrays and objects using the spread operator
Using the spread operator, it's easy to concatenate arrays: */

const fruits = ['apple', 'pear', 'plum'];
const berries = ['blueberry', 'strawberry'];
const fruitsAndBerries = [...fruits, ...berries]; // concatenate
console.log(fruitsAndBerries); // outputs a single array

//It's also easy to join objects:  

const flying = { wings: 2 };
const car = { wheels: 4 };
const flyingCar = {...flying, ...car};
console.log(flyingCar); // {wings: 2, wheels: 4}

/* Add new members to arrays without using the push() method
Here's how to use the spread operator to easily add one or more members to an existing array: */

let veggies = ['onion', 'parsley'];
veggies = [...veggies, 'carrot', 'beetroot'];
console.log(veggies); //['onion', 'parsley', 'carrot', 'beetroot'];


/*Convert a string to an array using the spread operator
Given a string, it's easy to spread it out into separate array items: */

const greeting = "Hello";
const arrayOfChars = [...greeting];
console.log(arrayOfChars); //  ['H', 'e', 'l', 'l', 'o']

/*Copy either an object or an array into a separate one
Here's how to copy an object into a completely separate object, using the spread operator. */

const car1 = {
    speed: 200,
    color: 'yellow'
}
const car2 = {...car1};

car1.speed = 201;

console.log(car1.speed, car2.speed); //201 200

/* You can copy an array into a completely separate array, also using the spread operator, like this: */

const fruits1 = ['apples', 'pears'];
const fruits2 = [...fruits1];
fruits1.pop();
console.log(fruits1, "not", fruits2); //['apples'] 'not' ['apples','pears'];

/*Note that the spread operator only performs a shallow copy of the source array or object. For more information on this, please refer to the additional reading.

There are many more tricks that you can perform with the spread operator. Some of them are really useful when you start working with a library such as React. */