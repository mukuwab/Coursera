// Task 1: Code a Person class

// WRITE YOUR CODE HERE - Define the Person class
class Person {
    // WRITE YOUR CODE HERE - Add a constructor with default parameters
    constructor(name = "Tom", age = 20, energy = 100) {
        this.energy = energy;
        this.age = age;
        this.name = name;
    }

    // WRITE YOUR CODE HERE - Add the sleep() method
    sleep() {
    //dont need function keyword when making function inside class or object
        this.energy += 10;
    }
    // WRITE YOUR CODE HERE - Add the doSomethingFun() method
    doSomethingFun() {
        this.energy -= 10;
    }


}
// Task 2: Code a Worker class
// WRITE YOUR CODE HERE - Define the Worker class that extends Person
class Worker extends Person{
    //never use () when extending a class

    // WRITE YOUR CODE HERE - Add a constructor with additional parameters
    
    /* need to call the parent class’s constructor using super().
Otherwise, name, age, and energy won’t be initialized. */
    constructor(name, age, energy, xp = 0, hourlyWage = 0) {//order matters!
        super(name, age, energy);//borrow parameters from parent class
        
        //only need to intantiate new parameters unquie to function
        this.xp = xp;
        this.hourlyWage = hourlyWage;
    }

    goToWork() {
        this.xp += 10;
    }
    // WRITE YOUR CODE HERE - Add the goToWork() method
}




// Task 3: Code an intern object, run methods
function intern() {
    // WRITE YOUR CODE HERE - Instantiate the Worker class with the intern properties
    var intern = new Worker("Bob", 21, 110, 0, 10);
        // WRITE YOUR CODE HERE - Call the goToWork() method
        intern.goToWork();

        // WRITE YOUR CODE HERE - Return the intern object
        return intern;
}

// Task 4: Code a manager object, methods
function manager() {
    // WRITE YOUR CODE HERE - Instantiate the Worker class with the manager properties
    var manager = new Worker("Alice", 30, 120, 100, 30);
    // WRITE YOUR CODE HERE - Call the doSomethingFun() method
    manager.doSomethingFun();
    // WRITE YOUR CODE HERE - Return the manager object
    return manager;
}
