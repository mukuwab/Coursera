
    class Person {
        sayHello() {
            console.log("Hello");
        }
    }

    class Friend extends Person {
       
        //Friend inherits everything from person
        
        sayHello() {
            console.log("Hey");
        }
        //instead of using the sayHello function from the parent, it declares a new one
            //overrides Parent's method

        
    }

    var result = new Friend(); //creates a new Friend object
    result.sayHello(); //will return 'Hey' since the parent method was overridden
    
    
    //////////////////////////////////////////////////////////////////////
    console.log('/////////////////////////////');
    ///////////////////////////////////////////////////////////////////////



    
    //To use the method from the parent, the correct method would be:

    class Person1 {
    sayHello() {
        console.log("Hello");
    }
}

class Friend1 extends Person1 {
    sayHello() {
        super.sayHello(); // calls the Person version
    }
}

var result = new Friend1();
result.sayHello();
