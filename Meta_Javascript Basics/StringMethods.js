var name = "Mukuwa"
var fullname= "Mukuwa Baffoe"

//Length Property
//returns number of characters

console.log("Mukuwa has",name.length,"characters in her name\n");

console.log("Mukuwa Baffoe has",fullname.length,"characters.")
//Though Mukuwa Baffoe has 12 letters it will have 13 characters
//since space counts as a character. Same for commas and other symbols 

//charAt() method
//reds each indivicual character at a specific index in a string

console.log(name.charAt(0)); //will return the M at index 0 
console.log(name.charAt(4)); //returns W at index 4


console.log("\n");



//concat() method
//joins two strings

var word1 = "Heart"
var word2 = "beat"

console.log(word1.concat(word2));


console.log("\n");


//indexOf method
//returns the location of the first position that matches a character

var fruit = "cucumber"

console.log(fruit.indexOf("u"));

var fruit2 = "strawberry".indexOf("r");//can do it this way

console.log(fruit2);



console.log("\n");


//.split() method
//chops up the string into an array of substrings

var nums = "one-two-three".split("-"); // ['one', 'two', 'three']
console.log(nums);


console.log("\n");


//Changing the case of words
var name2 = "Mary";

console.log(name2.toUpperCase()); //MARY
console.log(name2.toLowerCase()); //mary