//note: objects are not iterable

//arrays are iterable

const colors = ['red','orange','yellow']
for (var color of colors) {
    console.log(color);
}

console.log("\n");

//doesnt have to have the same name of the array
for(var cheese of colors){
    console.log(cheese);
}

/* The for...of loop iterates over the values 
in an array (or other iterable objects like strings, 
sets, and maps). It provides an easy way to loop 
through each element, making the code cleaner and 
more readable.

Luckily, you can use the fact that a for of loop 
can be run on arrays to loop over objects.

But how?

Before you can properly answer this question, you 
first need to review three built-in methods: 
Object.keys(), Object.values(), and Object.entries().

Once you use these methods to convert an object 
into an iterable form (like an array), you can 
then use the for...of loop to iterate over it.


Built-in methods
The Object.keys() method
The Object.keys() method receives an object as 
its parameter. Remember, this object is the object 
you want to loop over. It's still too early to 
explain how you'll loop over the object itself; 
for now, focus on the returned array of properties 
when you call the Object.keys() method.

Here's an example of running the Object.keys() 
method on a brand new car2 object: */


console.log("\n");

const car2 = {
    speed: 200,
    color: "red"
}
console.log(Object.keys(car2)); // ['speed','color']

/* So, when I run Object.keys() and pass it my car2 object, the returned value is an array of strings, where each string is a property key of the properties contained in my car2 object.

The Object.values() method
Another useful method is Object.values(): */

const car3 = {
    speed: 300,
    color: "yellow"
}
console.log(Object.values(car3)); // [300, 'yellow']

/* The Object.entries() method
Finally, there's another useful method, Object.entries(), which returns an array listing both the keys and the values.   */


const car4 = {
    speed: 400,
    color: 'magenta'
}
console.log(Object.entries(car4));


//What gets returned from the invocation of the Object.entries() method is the following:  
    //[ ['speed', 400], ['color', 'magenta'] ]
console.log("\n\n");

var clothingItem = {
    price: 50,
    color: 'beige',
    material: 'cotton',
    season: 'autumn'
}

for( const key of Object.keys(clothingItem) ) {
    console.log(key, ":", clothingItem[key])
}


/* he trickiest part to understand in this syntax is probably the clothingItem[key].

Luckily, this is not too hard to comprehend, especially since you've already covered the concept previously when you were learning how to access an object's member using the brackets notation. 

Recall that you also learned how you can dynamically access a property name.

To revisit this concept and show a practical demo of how that works, let's code a function declaration that randomly assigns either the string speed or the string color to a variable name, and then build an object that has only two keys: a speed key and a color key.

After this setup, you will be able to dynamically access either one of those properties on a brand new drone object, using the brackets notation.

Here's the example's code: */


function testBracketsDynamicAccess() {
  var dynamicKey;
  if(Math.random() > 0.5) {
    dynamicKey = "speed";
   }else{
     dynamicKey = "color";
   }

    var drone = {
      speed: 15,
      color: "orange"
    }

    console.log(drone[dynamicKey]);
}
testBracketsDynamicAccess();


/* Note: Running the code in this code block may not provide the most accurate results, as the output could be cached and remain the same each time. For the best results, try running the code on your local machine.

This example might feel a bit convoluted, but its purpose is to demonstrate the fact that you're getting either one or the other value from an object's key, based on the string that got assigned to the dynamicKey variable, and accessed without issues, using the brackets notation.

Feel free to run the testBracketsDynamicAccess() function a few times, and you'll notice that sometimes the value that gets output is 15, and sometimes it's orange, although I'm always accessing the drone[dynamicKey] key. Since the value of the dynamicKey is populated on the Math.random() invocation, sometimes that expression evaluates to drone["speed"], and other times that expression evaluates to drone["color"].

The for...in loop iterates over the keys (or property names) of an object. It’s used to loop through the properties of an object, not the values.

const car = { speed: 100, color: "blue" };

for (let key in car) {

    console.log(key); // Output: speed, color

}

Unlike for...of, which works on values, for...in works on keys of objects or indices of arrays.

You have now learned about the building blocks that make the for of loop useful to iterate over objects - although objects are not iterables. 

Next, you'll have a go at a practical example of working with both the for of and the for in loop. Each loop has its place and can be considered useful in different situations. */