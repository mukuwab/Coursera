//empty Object literal
fruit = {};

//Add properties to the object
fruit.type = "apple";
fruit.name = "Granny Smith";
fruit.color = "red";
fruit.taste = "sour";

//if the function is a property of an object, it is called a method
    //can only be accessed through the object

fruit.eat = function () {
    console.log("That was delicous!");
}

fruit.eat()
//need to type the name of the object that holds method to use


console.log(fruit);