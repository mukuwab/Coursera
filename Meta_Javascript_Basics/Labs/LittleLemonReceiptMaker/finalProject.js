// Dishes Data
const dishData = [
    { name: "Italian pasta", price: 9.55 },
    { name: "Rice with veggies", price: 8.65 },
    { name: "Chicken with potatoes", price: 15.55 },
    { name: "Vegetarian Pizza", price: 6.45 },
];

// Tax Value
const tax = 1.20;

// Task 1: Implement getPrices()
function getPrices(taxBoolean) {
    // WRITE YOUR CODE HERE
    
    /*if (taxBoolean === true) {
        console.log("Prices with 20% tax:");
    }
    else if (taxBoolean === false) {
        console.log("Prices without tax:");
    }
    else{
    */
    
    if (typeof taxBoolean !== "boolean") {
            console.log("You need to pass a boolean to the getPrices call!");
    return;
    }

    
    
    
    for (let item of dishData) {
        let finalPrice;
            
        if (taxBoolean) {
            finalPrice = item.price * tax;
            console.log(`Dish: ${item.name} Price: $${finalPrice}`);
        }
     /*   else if (taxBoolean == false) {
            finalPrice = item.price;
            console.log(`Dish: ${item.name} Price (excl.tax): $ ${finalPrice}`);
        } */
        else {
            finalPrice = item.price;
            console.log(`Dish: ${item.name} Price: $${finalPrice}`);
        }
    }
}

// Task 2: Implement getDiscount()
function getDiscount(taxBoolean, guests) {
    // WRITE YOUR CODE HERE
    getPrices(taxBoolean);

    var condition1 = typeof (guests) === 'number';
    var condition2 = guests >= 2 && guests < 30;

    if (condition1 && condition2) {
        var discount = 0;
        if (guests < 5) {
            discount = 5;
        }
        else if (guests >=5){
            discount = 10;
        }

        console.log(`Discount is: $${discount}`)
    }

    else {
            console.log("The second argument must be a number between 0 and 30");
    }
}

// Call getDiscount() with sample arguments
getDiscount(true, 2);
getDiscount(false, 10);