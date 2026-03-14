//Function Calling and Recursion

// function example(){
//     example()
// }

//if executed this function will go on infinitely
    //not ideal
//Recursion --> when a function calls itself

let counter = 10;

function example(){
    console.log(counter);
    counter--; // or counter = counter - 1;
    if (counter === 0 ) return;
    //function will log 3,2,1 and then stop
    example();
}

//Call function to run
example();


//recursion is a way to run repeatitive code without the
    //use of loops