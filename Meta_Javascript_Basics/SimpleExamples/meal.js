function meal(animal) {
    animal.food = animal.food + 10;
}

var dog = {
    food: 10
};

meal(dog);
meal(dog);

console.log(dog.food);


/////////////////////////////////////////////////////////////////////////


function givePencils(student){
    student.numPencils = student.numPencils + 5;
    //this will reference the property 'numPencils' of the passed in parameter
    //after it will add five to that property
}

//create a student object and define that property for the first time
var Jessica = {
    numPencils: 10
};


givePencils(Jessica); //adds 5 --> 15
givePencils(Jessica); //adds 5 --> 20
console.log("Jessica has",Jessica.numPencils,"pencils"); //20 pencils


