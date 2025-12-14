//Basic Hello World Function

function HelloWorld(){
    console.log("Hello World");
}

HelloWorld(); //this is how you call the function

//////////////////
console.log('\n');
//////////////////

//Adding two numbers

var x = 10;
var y = 3;

function AddNum (parameter1, parameter2){
    //pass in function parameters, placed inside function definition
    return console.log(parameter1+parameter2);

}

AddNum(x,y);
//pass in two parameters into the function

//////////////////
console.log('\n');
//////////////////

//or you can do it like this

function AddNum2(a,b){
   
    return console.log(a*b);

} //allows for more flexibility

AddNum2(3,7);//pass in two values

//////////////////
console.log('\n');
//////////////////