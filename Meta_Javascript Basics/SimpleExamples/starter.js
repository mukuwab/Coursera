    const meal = ["soup", "steak", "ice cream"]
    
    let [starter] = meal;
    //grabs the value at index zero and assigns it to a new variable
    console.log(starter);

///////////////////////////////////////////////////////////////////////////////

    const letters = ["a","b","c"];

    //Deconstruct the first two indexes, assign to variables
    let [firstLetter, secondLetter] = letters;
    
    //Print the values
    console.log(firstLetter);
    console.log(secondLetter);

    //store index 2 in a variable
    let[,,lastLetter] = letters;
    
    console.log(lastLetter);

    //Add more letters
    letters.push("d", "e", "f");

    console.log(letters);



    