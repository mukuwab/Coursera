//TEMPLATE LITERALS

let greet = "Hello";
let place = "World";
console.log(`${greet} ${place} !\n`) //display both variables using template literals

///////////////////////////////////////////////////////////////////////////////////

let warn = "Beware"
let animal = "dog";

console.log(`${warn} of the ${animal}\n`)

//////////////////////////////////////////////////////////////////////////////////

//Secondly, besides variable interpolation, template strings can span multiple lines.

let greetingFull = 
`Hello
World`

console.log(greetingFull);

//or

console.log(`${greetingFull}`);

///////////////////////////////////////////////////////////////////////////////////

//it's possible to perform arithmetic operation inside a template literal expression
console.log(`${1 + 1 + 1 + 1 + 1} stars!`) 

console.log(`\nSally ate ${10/5} apples and ${3*8} cherries!`);

///////////////////////////////////////////////////////////////////////////////////

let multiLine = `\n
Using ES6
backticks,
multi-line
strings are
possible!
`

console.log(multiLine);