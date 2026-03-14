//This works...

    class Cake {
        constructor(lyr) {
            //lyr is a parameter, local imput to the constructor
            this.layers = lyr + 1;
            //layers is a PROPERTY being defined using the lyr parameter (plus 1)

        }
    }

    var result = new Cake(1); //new cake object made, setting lyr = 1
    //so the layers property will equal 2

    console.log(result.layers);//print the layers property of the new result object