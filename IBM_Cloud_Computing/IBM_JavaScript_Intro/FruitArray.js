//Array Indexing Practice

//Remeber that an array starts at index 0

//You have several fruits in a row on the shelf
let fruits = ["apple","banana","pineapple"];

//List the fruits in order

console.log("The fruits on the shelf are (in order):");

console.log("1st: "+fruits[0]);
console.log("2nd: "+fruits[1]);
console.log("3rd: "+fruits[2]);


//Now we want to add a new fruit. Use the PUSH method

fruits.push("cherry");
console.log("\nAfter Adding Fruit\n4th: "+fruits[3]);


//Now remove that last index using the pop method
fruits.pop();//Will remove the newly added 'cherry' string in the last index
console.log("\nAfter removing the last index (4th item)\n4th: "+fruits[3]+"\nThe cherry has been removed!\n");


//How many fruits do you have now? 
//use the 'length' property to find out

let numFruits = fruits.length;
console.log("There are "+numFruits+" fruits!\n")

//Add more fruits!
fruits.push("watermelon","blueberry","dragon fruit");

//Now how many?
numFruits = fruits.length;//To store new values within the numFruits variable
console.log("There are "+numFruits+" fruits!")

//use a functiona and loop to print out all fruits
function printFruits(){
    
    this.length = fruits.length;
    
    for(let i=0; i<length; i++){
    
   console.log(fruits[i])
    //'i' will increment after every iteration of the loop
    //the new value of i will act as the index
    
    }//End for
    console.log("\n");
}//End print fruits

printFruits();

//use a for loop to remove three fruits from the row
while (fruits.length > 3) {
  fruits.pop();
}

console.log("After removing 3 fruits:");
printFruits();

    

//Now change the 2nd fruit in the row to an orange!
fruits[1]="orange";
console.log("After changing the 2nd fruit to orange:")
printFruits();



//notes
//Do NOT wrap printFruits() in console.log(), because the function itself is already printing.
//The actual console.log() returns nothing, leaving an undefined value after every loop

