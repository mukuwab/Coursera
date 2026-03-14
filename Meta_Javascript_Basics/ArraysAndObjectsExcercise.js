/*In this exercise lab you will practice creating arrays and objects.

Tasks to complete
Create a new empty array literal and assign it to the variable clothes.

Add 5 of your favorite items of clothing as strings using the push() method.

Remove the fifth piece of clothing from the array using the pop() method.

Add a new piece of clothing using the push() method.

Use console.log to show the third item from the clothes array in the console.

Create a new empty object literal and assign it to the variable favCar.

Using the dot notation, assign a color property to the favCar object and give it a string value with the color of your choice.

Using the dot notation, assign a convertible property to the favCar object and give it a boolean value of your choice.

Use the console to log the entire favCar object.*/


//Create empty array literal
var clothes = []; 



//Add 5 peices of clothing using push() method
var items = clothes.push("shirt","skirt", "dress", "leggings","hat");

//print the array
for(var i = 0; i<clothes.length ; i++){
    console.log(clothes[i]);
}



console.log("\n");



//remove fifth peice of clothing
console.log("5th item (removed):",clothes.pop(4),"\n");

//Add new peice of clothing

clothes.push("pants");

//print the array
for(var i = 0; i<clothes.length ; i++){
    console.log(clothes[i]);
}


console.log("\n");



//show 3rd item of the array
console.log("3rd item of the array is:",clothes[2],"\n");

//empty object literal
var favCar = {}

//use dot notation to add color property
favCar.color = "red";


//boolean convertible property
favCar.convertible = false;

console.log(favCar);



