//Random Method  | Math.random()
    //allows you to generate a decimal number between
    //0 and 0.99

    //you can save the result in a variable

var decimal = Math.random();
console.log(decimal);

//if you want to output a number larger than 1, you must multiply the 
//variable by 10 or more

console.log(decimal*10);//numbers between 1 and 10
console.log(decimal*100);//numbers between 1 and 100


//////////////////
console.log("\n")
//////////////////


//Ceil method | Math.ceil()
    //part of Math object, rounds a decimal up to the nearest integer

    var rounded = Math.ceil(0.00001);
    //This will always round to 1 since ceil only rounds up

    console.log(rounded);
    
    var rounded = Math.ceil(1.01);
    //This will round up to 2, even though it is closer to one

    console.log("The Random number b/w 1 & 10 is:",rounded);


//////////////////
console.log("\n")
//////////////////


//Random Integer
//Get a random decimal number between 0 and 0.99...

var decimal = Math.random() *10;

//Rounding up the value of decimal
var rounded = Math.ceil(decimal);

console.log(rounded);
