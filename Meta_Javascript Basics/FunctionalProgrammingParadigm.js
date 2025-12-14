//FUNCTIONAL PROGRAMMING
//n functional programming, we use functions extensively and often work with immutable values. 
// Immutability is a key principle, meaning variables are not modified after their initial assignment.

//When writing FP code, we keep data and functionality separate and pass data into functions only when 
//we want something computed.

function getTotal(a,b) {
    return a + b
}
var num1 = 2;
var num2 = 3;

var total = getTotal(num1, num2);


//OBJECT ORIENTED PROGRAMMING (OOP)
//Another style is object-oriented programming (OOP). In this style, we group data and functionality as 
// properties and methods inside objects.

//In OOP, methods update properties stored in the object instead of generating new return values.

// For example, if I check the sleepy property on the virtualPet object, 
// I can confirm that it's set to true.

//creating an object
var virtualPet = {
    sleepy: true,
    nap: function() {
        this.sleepy = false
    }
}
console.log(virtualPet.sleepy) // true
virtualPet.nap()
console.log(virtualPet.sleepy) // false