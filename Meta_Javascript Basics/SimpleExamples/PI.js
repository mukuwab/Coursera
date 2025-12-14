//This teaches destructing

//use exsisting built in Math Object to destruture the
//value of pi from it

let {PI} = Math;
//We know that the PI property exsist on the Math object
//This makes a copy of it and saves to a new variable

//you can only destructure something that already exsists on 
//an object

//using falty spelling, including lowercase wont work and
//will return an undefined value

console.log(PI);//3.141592653589793

//Or you can call the property PI of the Math function like this
console.log(Math.PI);//3.141592653589793

//confim that the new PI variable has the same value and data type
    //as Math.PI

console.log(PI === Math.PI);//true

//Prove that destructured property and origional property are not connected

PI = 1;

//compare again
console.log(PI === Math.PI);//false