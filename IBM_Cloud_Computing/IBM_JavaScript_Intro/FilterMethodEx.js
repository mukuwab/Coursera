//FilterMethod
    //Creates a new array
    //Contains elements that pass specific conditions
    //Extracts specific data


const products = [
    
    {name: "Laptop", price: 100},
    {name: 'Smartphone', price: 500},
    {name: 'Tablet', price: 300},
    {name: 'Moniter', price: 250},
    {name: 'Keyboard', price: 50}
];

function filterProductsByPriceRange(products, minPrice, maxPrice){
    return products.filter((product) => 
    
        product.price >= minPrice && product.price <= maxPrice);
    //product => product.price >= minPrice && product.price <= maxPrice
        //Keep this product only if its price is greater than or equal to minPrice AND less than or equal to maxPrice.
        //Does this product have a price greater than or equal to minPrice
        //AND is its price less than or equal to maxPrice?
}

const minPrice = 100;//Minimum price threshold
const maxPrice = 500; //Maximum price 

const filteredProducts = filterProductsByPriceRange(products, minPrice, maxPrice);

filteredProducts.forEach((product) =>{
    //filteredProducts is a new array → it only has products where the price is between $100 and $500.
    
    console.log(`${product.name} is $${product.price}`);
});
    
