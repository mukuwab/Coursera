var fruit = [
    
    "apple",
    "strawberry",
    "cherry"

]

//printing the array
console.log(fruit);

console.log("\n");




//Printing a specific value of the array

console.log(fruit[2]);
//prints what is at index 2 --> cherry
console.log(fruit[0]);
//index 1 is an apple



console.log("\n");


//Printing array items with for loop

for(i=0; i<fruit.length; i++){
    console.log(fruit[i]);
}
//allows you to iterate through the array and print values
//array.length returns the number of indexs infruit array


console.log("\n");


//Making an array printing function

function ArrayPrint(array){
    for(i=0; i<array.length; i++){
    console.log(array[i]);
    }
}

//make some new arrays
var gems = ['opal', 'diamond', 'quartz', 'ruby', 'sapphire'];
var weather = ['sunny', 'rainy', 'cloudy', 'snowy'];
var colors = ['red', 'blue', 'yellow', 'green', 'purple'];

//call the function and pass in the arrays
ArrayPrint(gems);
ArrayPrint(weather);
ArrayPrint(colors);