
//Create a cereal object
const cereal = {

    type: "oats",
    price: "$1.00",
    rating: "5 stars",
    store: "Bargin Mart"

};

//remeber arrays in javascript use [] not {}
//objects use {} and arent iterable

//destructure the object
    //isolate properties into reusable, global variables

const {type , price,} = cereal;
//use {} to isolate the properties of an object

ravingReview=`Did you know that ${type} is only ${price}!!!!!\n`;

console.log(ravingReview);

const {rating, store} = cereal;

console.log(`What! There is a cereal with ${rating} at ${store}?!`);