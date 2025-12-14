/* The rest operator (...args) in JavaScript allows you to gather all remaining arguments of a function into a single array. This is particularly useful when working with functions that accept an unknown or variable number of arguments. 

In the function definition, the ...args syntax is used to collect all additional arguments passed to the function into an array.

Example:  

function unknownArgs(...args) {
    console.log(args);
}
unknownArgs(1, 2, 3, 4); 
// Output: [1, 2, 3, 4]

Here, all the arguments (1, 2, 3, 4) are collected into the args array.  

*/


// Part 2: Handle Unknown Function Arguments
function unknownArgs(...args) {
    for (let i = 0; i < args.length; i++){
        console.log(args[i]);
    }
}

unknownArgs(1, 2, 3, 4, 5);
unknownArgs("a", "b", "c");