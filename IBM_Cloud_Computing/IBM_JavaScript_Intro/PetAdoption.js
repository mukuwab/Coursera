//Pet Adoption 

function Pet(name, species, sex, age){
    
    this.name = name;
    this.species = species;
    this.sex = sex;
    this.age = age;
    
    
    
    this.describe = function(){
        console.log(`${this.name} is a ${this.age}-year old ${this.sex} ${this.species}`);
        //make sure to use the this keyword!
    }//end.discribe
        
    this.getName = function() {
        
        console.log(`\nThe name of this ${this.species} is ${this.name}.`);
        
    }//end getName
        
        

}//end function:Pet

    const AdoptablePets = [
    
    new Pet("Martha", "dog", "female", 2),
    new Pet("Sammy", "cat", "male", 5),
    new Pet("Mitten", "cat", "female", 2),
    new Pet("Opal", "cat", "female", 3),
    new Pet("Pecker", "bird", "male", 4),
    new Pet("Apollo", "bird", "male", 4),
      //Remember
            //{} = a plain object — just data, no constructor logic.
                //dont use literals
                //Named parameters (name: ...) only work inside object literals {} — not when passing arguments to a function.
            //new Pet(...) = an instance of the Pet constructor — it has .describe().
    ];
    
AdoptablePets.forEach((pet)=>{
    pet.describe();
});

AdoptablePets[2].getName();
