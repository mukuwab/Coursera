function noDefaultParams(number) {
    console.log('Result:', number * number)
}
noDefaultParams(); // Result: NaN

//JavaScript doesn't throw an error but instead 
// returns a NaN (Not a Number) because number is undefined by default.


//////////////////////////////////////////////////////////////////////////
/*Default params allow me to build a function that will run with default argument values even if I don't pass it any arguments, while still being flexible enough to allow me to pass custom argument values and deal with them accordingly.

Now, even if no argument is passed, the function will default to 10: */

            // var number = 15;

            // function withDefaultParams(number = 10) {
            //     console.log('Result:', number * number)
            // }
            // withDefaultParams(); // Result: 100

            //doesnt work

/**the number inside the parentheses is a local variable, totally separate from the outer var number = 15.

So inside the function, there are two different variables:

number outside (global) → 15

number inside (local parameter) → uses the default value 10 if no argument is given
*/

//must do it like this.


function withDefaultParams(number = 10) {
    console.log('Result:', number * number)
}
withDefaultParams(15); 
//Default Result: 100
//With passed parameter: 225


////////////////////////////////////////////////////////////////////////////////

class NoDefaultParams {
    constructor(num1, num2, num3, string1, bool1) {
        this.num1 = num1;
        this.num2 = num2;
        this.num3 = num3;
        this.string1 = string1;
        this.bool1 = bool1;
    }
    calculate() {
        if(this.bool1) {
            console.log(this.string1, this.num1 + this.num2 + this.num3);
            return;
        }
        return "The value of bool1 is incorrect"
    }
}

/**Now I'll instantiate an object of the NoDefaultParams class, and run the calculate() 
 * method on it. Obviously, the bool1 should be set to true on invocation to make this work, 
 * but I'll set it to false on purpose, to highlight the point I'm making. */

var fail = new NoDefaultParams(1,2,3,false);
fail.calculate(); // 'The value of bool1 is incorrect'

/*This example might highlight the reason sometimes weird error messages appear when some software is used - 
perhaps the developers just didn't have enough time to build it better.

However, now that you know about default parameters, this example can be improved as follows: */

class WithDefaultParams {
    constructor(num1 = 1, num2 = 2, num3 = 3, string1 = "Result:", bool1 = true) {
        this.num1 = num1;
        this.num2 = num2;
        this.num3 = num3;
        this.string1 = string1;
        this.bool1 = bool1;
    }
    calculate() {
        if(this.bool1) {//Since bool1 is true, it runs:
            console.log(this.string1, this.num1 + this.num2 + this.num3);
            //Result: 1 + 2 + 3 → prints: Result: 6
            return;
        }
        return "The value of bool1 is incorrect"
    }
}
var better = new WithDefaultParams();
//When argument passed w/ no parameters, each variable uses its default value
better.calculate(); // Result: 6

var ifBoolFalse = new WithDefaultParams(1, 2, 3, "Result:", false);
console.log(ifBoolFalse.calculate());
//must console.log since function only returns value but doesnt log it to console

/* This approach improves the developer experience of my code, because I no 
longer have to worry about feeding the WithDefaultParameters class with all 
the arguments. For quick tests, this is great, because I no longer need to worry 
about passing the proper arguments.

Default parameters also make it easier to build inheritance hierarchies. 
For example, in subclass constructors, you can pass only the properties 
specific to the subclass, while still using the defaults from the superclass 
constructor. Additionally, this approach really shines when building inheritance 
hierarchies using classes, as it makes it possible to provide only the custom
properties in the sub-class, while still accepting all the default parameters 
from the super-class constructor. */