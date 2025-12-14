//Error Handling




//console.log(a+b);
//This will throw a Reference error since a and b are
//never defined

//Purposefully throwing a reference error
//throw new ReferenceError();
//this code allows you to throw reference errors on purpose


//Can prevent errors from stopping the problem by using try-catch syntaxs


try{
    console.log(a+b);
    //place the code you think will cause an error in the try block
}
catch(err){
    console.log(err);//print the error message to the console
    //catch block catches the error that the try block produces
    //built in error object, can name whatever you like (err)
    console.log("There was an error");
    console.log('The error was saved in the error log')
}
console.log('My program did not stop');
//try-catch benefit--> even if error thrown, execution of program will not stop


console.log("\n\n\n")

///////////////////////////////////////////////////
//with reference error constructor

try{
    throw new ReferenceError();
}
catch(err){
    console.log(err);//print error object
    console.log("There was a reference error");
}
console.log("My program did not stop");