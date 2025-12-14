//Reduce method
    //Reduces array to a single value
    //Apply a function to each element
    //Useful for aggregating data
    
//What is reduce?
    //.reduce() is an array method that:
    //Takes ALL the elements in an array
    //Applies a function to each element in order
    //Combines them into one final value
    
//extract price to a new array

const orderPrices = [50,30,25,40,15];

const totalOrderValue = orderPrices.reduce((total, price) => total+price, 0);
//orderPrices.reduce(): using the reduce method to iterate through the array and accumulate the values
//total → the running total so far.
//price → the current element of the array.
//(total, price) => total + price → means:
    //Add the current price to the running total"
//0 at the end is the starting value for total.
//The arrow method 
console.log('The total value of the order is ',totalOrderValue)


//About Reduce
    //first parameter --> a function like (total,item) ==> ...
    //Second parameter --> inital value for the total
    //After each loop total is the running result so far
    //total is a name you choose, not specific to Javascript



