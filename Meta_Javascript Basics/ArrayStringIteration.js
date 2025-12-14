//Iteration over arrays

var letters = ["A","B","C"];

for(var i = 0 ; i<letters.length ; i++){
    
    console.log(letters[i]);

}


/////////////////
console.log("\n");
/////////////////


//For loops can also be used to iterate over strings

var numbers = "123";

for(var i = 0 ; i<numbers.length ; i++ ){
    
    console.log(numbers[i]);

}


//But Strings are not arrays

var greet = "Hello";
var user = "Lisa";

//console.log(greet.pop());
    //this will error because strings are not arrays and 
    //do not have all array methods avalible


//These commands will work
console.log( greet + user);//output: HelloLisa

console.log(greet.concat(user));//output: HelloLisa
    //Concat method: acceots whatever variable you want to join with
    //another variable

