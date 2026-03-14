//Rest Operator
    //used to build a smaller array

const top5 = [
    "Mt. Fuji",
    "Grand Canyon",
    "Mecca",
    "Palestine",
    "Swiss Alps"
];

//Destructuring
    //Specifiy what you want to get out of the array
    //first three items

const [] = top5;

//Then create three variables
const[first, second, third,...secondVisit] = top5;
    //create three variables: first, second, theird
    //create another variable to hold the rest of the list: secondVisit
    //equate it back to the array
    //extracts contents of the top5 array into 4 new variables


    // "Mt. Fuji" --> first
    // "Grand Canyon" --> second
    // "Mecca" --> third
    // "Palestine" --> now in secondVisit
    // "Swiss Alps" --> now in secondVisit

    console.log("-First:", first);
    console.log("-Second:", second);
    console.log("-Third:", third);
    console.log("-Second Visit:", secondVisit);

    //rest operator gives what is left over of the the source array
    //as a seperate array

    /////////////////////////////////////////
    //Rest Operator in Functions

    //create a function to add the tax rate to prices
    function addTaxToPrices(taxRate,...itemsBrought){
        return itemsBrought.map(item => taxRate * item)
        //Important: the rest parameter must be the LAST parameter in the function definition
            //adding any other parameter to the add tax to prices function after the rest operator
            //and the items bought would result in an error
        
        //map function --> creates a new array by applying a function to 
            //each element of the orgional array
            //Syntax: array.map(element => /* return something */)
        
        //map function explained:
            /* taxRate = 1.1

            ...itemsBrought = [46, 89, 35, 79] → the rest operator collects all remaining arguments into an array.

            itemsBrought.map(item => taxRate * item) means:

            For each item in the array, multiply it by taxRate.

            Returns a new array of taxed prices. */


            /* Step by step:

                item = 46 → 46 * 1.1 = 50.6

                item = 89 → 89 * 1.1 = 97.9

                item = 35 → 35 * 1.1 = 38.5

                item = 79 → 79 * 1.1 = 86.9
                
                Resulting Array: [50.6, 97.9, 38.5, 86.9]
                */
    }   


    let shoppingCart = addTaxToPrices(1.1,46,89,35,79);
    //tax rate: 1.1
    //itemsBought : 46,89,35,79

    console.log(shoppingCart);

    ///////////////////////////////////////

    //Example of Map Function
let numbers = [1, 2, 3];
let doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6]

/* console.log(doubled); // [2, 4, 6]
Each number in numbers is passed to the arrow function, which returns a new value.

.map() collects all returned values into a new array. */