//REFERENCE ERRORS
    //throw when one tries to use undeclared variables

    try{
        console.log(username);
    }
    catch(err){
        console.log(err)
        //ReferenceError: username is not defined
        console.log("Using undeclared variable threw reference error\n\n");

        //errors are objects with useful properties
            //name: type of error (ex: Reference Error)
            //message: description of the error
            //stack: track trace showing where the error occured
        
        console.log(err.name,"\n"); //Reference error
        console.log(err.message,"\n"); //username is not defined
        console.log(err.stack,"\n"); //Stack trace


    }

//SYNTAX ERROR
    //any kind of invalid JavaScript code will cause SyntaxError

try{
    var a //there is no assignment operator here
}
catch(error){
    console.log(err);
    console.log("There was an error")
}
