//For-of Loops and Objects

const car = {
    engine: true,
    steering: true,
    speed: "slow"
}

const sportsCar = Object.create(car);
//using Object.create will create a new object that inherits
    //the properties of the car variable

    sportsCar.speed = "fast";//set speed of sportsCar object to fast
    //sportsCar object ONLY HAS ONE PROPERTY which is speed

console.log("The sportsCar object: ",sportsCar);//print properties of sportsCar


console.log('---------for-in is unreliable -----------')

//For-in loop to log the properties of the sportsCar object
for(prop in sportsCar){
    //for properties in sportsCar
    console.log(prop);//print properties 
}

//using for-in
    //loops over the properties in the sportCar object
    //BUT also will loop over properties of its prototype too

    //unliable because iterates over specified object and its
    //prototype

console.log("Iteratiing over object AND its prototype");

console.log('-----for-of is reliable---------');


//Use Object keys to iterate over the object
for (prop of Object.keys(sportsCar)){

    console.log(prop+": "+sportsCar[prop]);

}
//for-of only iterates over the objects own properties
    //while not including that of the prototype as well

console.log("Iterating over objects OWN PROPERTIES only!");