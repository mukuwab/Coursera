//Creating Custom Objects

function Car(make,model,year){
    //there are three parameters in the function: make,model,and year
    
    //make,model,and year(parameters) are only temporary names for whats passed into the function
    
    //in order to add a property to the car object by that name you have to do : 
        //this.parameterName = parameterName
    
    this.make = make;
    //adds a property called 'make' to the Car object sets it to what ever is passed into the make parameter
    //the this keyword is an indication that an object is being made
    
    this.model = model;
    
    this.year = year;
    
    this.getName = function(){
        //getName is a method or function stored in the object
        
        return this.make + ' ' + this.model + ' ' + this.year + ' ';
        
        //the 'this keyword makes sure each Car object keeps its own values, as multiple car objects can be made from this constructor
        
    }//end getName
    
    
}//End Car

var c = new Car ("Meridian", "Saber GT", "2012");
//Even though car is a function, when you use the 'new' keyword, it creates an object
alert(c.getName()); //displays "Meridian Saber GT 2012"

//alert() is a built-in JavaScript function that pops up a small browser dialog box with a message.

var d = new Car("Ford","Focus","2016");
//creates a new Car object, stored in the variable d
console.log(d.getName());


