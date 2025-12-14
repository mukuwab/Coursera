/*
TYPES OF EMPTY VALUES
    1. Null data type
    2. Undefined data type
    3. Empty Strings
*/


//NULL
    /* represents the intentional abscence of any 
    object value*/
    // can be return value of of some javascript methods

   var letters = 'abc';
   
   //Search for the letter 'a' in the array
   console.log( letters.match(/a/) );
    //match method used to search inside the variable
    //[ 'a', index: 0, input: 'abc', groups: undefined ]

    console.log( letters.match(/d/) );
        // [ 'a', index: 0, input: 'abc', groups: undefined ]
        // null

        //The return value of the match method should be an array
        //Since d was not found in the array object, the array cannot be built
        //null appears to indicate the absence of an object



console.log("////////////////////////////");


//UNDEFINED
//the undefined data type can only hold one value, undefined.
//all functions return undefined by default, unless its been decided to return
    //a specific value instead

    console.log("John Doe\n");
    //will output the name and undefined
        //since console.log is a function and value not being returned

    //undefined also appears when variable declared without an assignment

    var a;
    console.log(a);

    var a = "letter"
    console.log('\n',a);


    //EMPTY STRING
    //can be "" or ''