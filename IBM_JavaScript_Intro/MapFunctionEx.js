//Map Method
    //Creates a new array
    //applies the provided function to each element
    //Transforms data without modifying the origional array
    
    const products = [
        
    {name: "Laptop", price: 100},
    {name: 'Smartphone', price: 500},
    {name: 'Tablet', price: 300}
    
    ];
    
    products.map((product) => {
        //product is a placehold, it can be named anything. Will be used as reference while calling values to the ${.} placeholders
        //iterates through the product array and executes the provided arrow function for each element, saving the element in the product variable
        console.log(`The price of ${product.name} is ${product.price}`);
        
    });

//MAP method allows you to extract prices into a new array
//dynamically generates and logs messages for each product
