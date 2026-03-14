//Basic function Example

function add (n,m){
    //function functionName(parameter1, parameter 2...)
    //n and m are called arguments
    
    return n+m
    //the output of the function will be the two arguments
    //if n and m are numbers, the function will add them
    //if n and m are strings, the function will concatonate the strings
}//end function

var x = add(1,2); //returns 3
    //values can be entered in the 'slots' of the parameters, making 1 assigned to the n argument and 2 assigned to the m argument
var y= add(1.23,3.45);//returns 4.68
var z= add("hello","world");//returns "helloworld"

//Print the values in the variables
console.log(x);
console.log(y);
console.log(z);



//The 'var' datatype
    //In JavaScript, var is a keyword used to declare variables. 
    //It does not represent a specific data type itself, but rather it declares a variable that can hold values of various data types.
    //JavaScript is a dynamically typed language, meaning that the data type of a variable declared with var (or let or const) is determined at runtime based on the value assigned to it, and it can be reassigned to hold values of different data types.
