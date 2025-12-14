
    class Animal {
        //note there are no properties defined here
    }

    class Cat extends Animal {
        //Cat inherits everything from Animal, but there are no properties to inherit
      constructor() {
        super(); //constructor from Animal is called, but there is no constructor so nothing is returned
        
        this.noise = "meow";
        //the noise property was never defined in animal
            //will return undefined
            //inherited nothing, so 'this' doesnt work
      }
    }

    var result = new Animal();
    console.log(result.noise);
