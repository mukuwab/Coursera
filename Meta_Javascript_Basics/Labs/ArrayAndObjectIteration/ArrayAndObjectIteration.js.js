// Task 1
// WRITE YOUR CODE HERE - Create the logDairy function and use a for...of loop to log each item in the dairy array
var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake'];
function logDairy() {
    for (item of dairy) {
        console.log(item);
    }
    //dairy is a global variable so it is included in the scope of this function
        //no need to pass it in
}

logDairy();


//quick scope example
var fruit = "apple"; //global variable

function printFruit(){
    console.log("\n",fruit,"\n");
    //prints global variable without parameters
}

printFruit();

// Task 2
// WRITE YOUR CODE HERE - Create the birdCan function and use a for...of loop to log bird object's own properties

const animal = {  
    canJump: true  
};  

const bird = Object.create(animal);  
bird.canFly = true;  
bird.hasFeathers = true;  

function birdCan() {
    
    console.log("\n");

    //loop through the object's properties, return properties + values
    for (const key of Object.keys(bird)) {
        console.log(key, ": ", bird[key]);
        //key --> returns keys
        //bird[key] --> returns the value of the key
    }

    console.log("\n");
}


birdCan();


// Task 3: Iterate Over an Object and Its Prototype Properties
// WRITE YOUR CODE HERE - Create the animalCan function and use a for...in loop to log all bird properties, including inherited ones


function animalCan() {
    console.log("\n");

    for (items in bird) {
        //will iterate through bird properties & its protoptype (animal)
        console.log(items + ": ", bird[items]);
        //use bird[items] to return the values
    }
}

animalCan();