//Arrays are Objects, they have built-in properties and methods

//push() method --> used to add new items to an array

var fruits = ["apple", "banana", "cherry"];

fruits.push("strawberry", "peach", "mango");

console.log(fruits);

//output: [ 'apple', 'banana', 'cherry', 'strawberry', 'peach', 'mango' ]

//you can use a function also
function arrayBuilder (one, two, three){
    var fruit2 = []; //declare empty array to fill later
    fruit2.push(one);
    fruit2.push(two);
    fruit2.push(three);

    return console.log(fruit2);
}

arrayBuilder("grapes","tomato","lemon");
//cannot print fruit2 directly since it is declared inside of the function,
//only things that have been returned can be interacted with

//pop() method, removes the last item from the array


var fruit3 = arrayBuilder("orange","watermelon","cantalope");
//you can use the function to build an entirely new array
