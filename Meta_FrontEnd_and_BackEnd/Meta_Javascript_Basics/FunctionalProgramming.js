//Functional Programming

var currencyOne = 100;
var currencyTwo = 0;
var exchangeRate = 1.2;

function convertCurrency(amount,rate){
    return amount * rate;
}

currencyTwo = convertCurrency(currencyOne, exchangeRate);

console.log(currencyTwo);


/////////////////////////////////////////////////////////

console.log("//////////////");

var twoWords = "";
var wordOne = "rainy";
var wordTwo = "day";

function combineWords(first, second){
    var combined= first+" "+second;
    return combined;
}
twoWords = combineWords(wordOne,wordTwo);

console.log(twoWords);

/////////////////////////////////////////////////////////

// Function to double a number
function doubleIt(num) {
    return num * 2;
}

// Function to create an object with a 'prop' key
function objectMaker(val) {
    return { prop: val };
}

// Chaining functions and returning values
let result = objectMaker(doubleIt(5));
console.log(result); // { prop: 10 }