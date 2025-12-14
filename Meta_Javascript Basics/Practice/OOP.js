class Cat{//name names always uppercase
    //always define the constructor 1st
    constructor(hairColor, temperment){
        this.hairColor = hairColor;
        this.temperment = temperment;
    }
}

var cat1 = new Cat('yellow','angry');
console.log(cat1);

var cat2 = new Cat('black','lazy');
console.log(cat2);


class FancyCat extends Cat {
    askTempermant() {
        console.log("My cat is so", this.temperment + ".");
    }

    askHairColor() {
        console.log("My cat's hair color is", this.hairColor + ".");
    }
}

var petOwner = new FancyCat('white', 'energetic');
console.log(petOwner);
