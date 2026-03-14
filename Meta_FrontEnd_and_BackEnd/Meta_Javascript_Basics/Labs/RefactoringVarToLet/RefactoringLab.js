// This is the initial code using `var` with some issues to fix.

var x = 5; // Variable declaration and initialization
var x = 10; // Redeclaration, works with var but not allowed with let

let a = 20;
console.log(a); // Hoisting example: variable is used before declaration


if (true) {
    let z = 30; // Use let to make z block-scoped
    // Variable declared with var is accessible outside block
}

//console.log(z); // Should cause a scoping issue when switched to let/const

let b = 40; // Variable that changes value
b = 50; // Should be let, as it changes value

const PI = 3.14; // Use const because the value should remain constant

// Your task:
// 1. Replace `var` declarations with `let` or `const` as appropriate.
// 2. Resolve issues caused by hoisting, redeclaration, and scoping.
// 3. Ensure the program works correctly after refactoring.
