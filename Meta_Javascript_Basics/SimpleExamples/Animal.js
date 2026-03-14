
    class Animal {
        constructor(lg) {
            //accepts one parameter lg, will be local parameter
            this.legs = lg;
            //assigns the input of lg to the new legs property
        }
    }

    class Dog extends Animal {
        //DOg inherits from the Animal class--> will now have access to legs property
        constructor() {
            super(4);
            //super() calls the constructor of the parent class (Animal) with the argument 4.
            //so since the only parameter of the constructor from the Animal class is lg
                //lg is assigned a new value of 4 for this new object
            //Dog is inheriting the functionaly of the Animal class's constructor while still
                //being able to pass in new values
        }
    }
    //create new object using the Dog class
    var result = new Dog();
    
    //Print the legs property of the new result object
    console.log(result.legs);
