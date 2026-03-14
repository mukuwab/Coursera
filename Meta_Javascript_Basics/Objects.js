//Building an object using Dot Notation

var fruit = {} // this creates an empty object literal

//instead of declaring individual variables for the traits,
//you can add a dot operator to each one

fruit.type = "apple";
fruit.color = "red";
fruit.quantity = 3;
fruit.plant = "tree";

//these are recognized by the program as traits of the object 'fruits'

console.log(fruit);

//Objects can be discribed as collections of related properties
//where each property is represented as a key value pair
    //what is normally a variable names becomes a property key
    //what is normally a variable value becomes a property value of the object


//----------------------------------------------------------//
console.log("\n");
//----------------------------------------------------------//


//Objects can also be built by listing the key value pairs inside of the object literal
//which specifies them as comma de-limited properties

//declare object name and input the properties

var Book = {
    title: "The Story of Earl",
    genre: "biography",
    pages: 376,
    retailPrice: 7.99,
    rating: 3.5
}
//created object + assigned values to properties

//after the object has been built, you can still add new properties and 
//change their values
    //can be done with dot notation

Book.seller = "Books-a-million";

console.log(Book);

//You can also change property values after the object has been created

Book.rating = 2;

console.log(Book);

//Log an individual property by using dot notation
console.log(Book.title,"is rated",Book.rating,"stars");



//----------------------------------------------------------//
console.log("\n");
//----------------------------------------------------------//


//Object Literals and Bracket Notation

var cereal = {}
//strings will be wrapped in double quotes

cereal["name"] = "Frosted Flakes";
cereal["rating"]= 4.5;
cereal["price"] = 3.45;

console.log(cereal);



//Evaluating Expressions with Bracket Notation 
//this is exclusive to bracket notation
var arrOfKeys = ['speed', 'altitude', 'color'];
var drone = {
    speed: 100,
    altitude: 200,
    color: "red"
}
for (var i = 0; i < arrOfKeys.length; i++) {
    console.log(drone[arrOfKeys[i]])
}


//----------------------------------------------------------//
console.log("\n");
//----------------------------------------------------------//


