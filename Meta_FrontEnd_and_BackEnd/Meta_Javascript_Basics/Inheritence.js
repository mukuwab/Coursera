var bird = {
    hasWings: true,
    canFly : true,
    hasFeathers : true
}

//Construct new Objects using Object.create(existingObject)
var eagle1 = Object.create(bird);
//the bord object can now act as a prototype or template for 
//an infinite amount of new objects that inherit its properties

console.log("eagle1: ", eagle1); //eagle1: {} --> empty object logs to console
//Object has been intantiated but is currently empty

//But now eagle1 can access all of the properties from the bird object

console.log("eagle1 has wings:",eagle1.hasWings);
console.log("eagle1 can fly:", eagle1.canFly);
console.log("eagle1 has feathers:",eagle1.hasFeathers);

//Create a new Object using the bord object as a prototype
var eagle2 = Object.create(bird);
console.log("eagle2 has wings:",eagle2.hasWings);

//Create a new object, but note penguins cannot fly
var penguin1 = Object.create(bird);

//you can override inherited propertyies
//set the canFLy property on the penguion object to false
penguin1.canFly = false;
console.log("penguin1: ",penguin1);
//override only affects the penguin object
//doesnt affect the prototype's property value