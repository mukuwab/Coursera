const fruits = [
    ["banana", "yellow"],
    ["apple", "red"],
    ["watermelon", "green"],
    ["kiwi", "green"]
];

//destructure the first index of the array

const [Index0, Index1] = fruits
//this will return everything store in index 0 and index 1

console.log(`first item: ${Index0}\n\nsecond item: ${Index1}\n`);

//Returning index and its value

//index 1 and its value
const [,[Index1_, ValueIndex1]] = fruits;
console.log(`Item: ${Index1_}\ncolor(value): ${ValueIndex1}\n`);

//itex 2 and its value
const [,,[Index2, ValueIndex2]] = fruits;
console.log(`Item: ${Index2}\ncolor(value): ${ValueIndex2}\n`);

//itex 3 and its value
const [,,,[Index3, ValueIndex3]] = fruits;
console.log(`Item: ${Index3}\ncolor(value): ${ValueIndex3}\n`);