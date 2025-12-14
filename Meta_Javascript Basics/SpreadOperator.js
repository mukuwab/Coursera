//Spread Operator
    //method to copy properties of an object to a newly created object
    //spread out array objects and join objects together

let top3 = [
    "The Colosseum",
    "Trevi Fountain",
    "The Vatican City"
];

function showItinerary (place1, place2, place3){
    console.log("Visit",place1);
    console.log("Then visit",place2);
    console.log("Finish with a visit to", place3)
}

//run the Itinerary Function with the elements in the Top3 Array
showItinerary(top3[0], //top3 array item at index 0 --> "The Colosseum"
              top3[1], //top3 array item at index 1 --> "Trevi Fountain"
              top3[2] //top3 array item at index 2 --> "The Vatican City"
)

////////////////////
console.log("\n\n");
////////////////////

//Simplify this call with the spread operator
showItinerary(...top3);

//if you want add more places
var OtherPlaces = [
    "Mt. Fuji",
    "Yellowstone",
    "The GrandCanyon"
];

//Now you can merge them with the spread operator
var AllPlaces = [...top3, ...OtherPlaces];
console.log(AllPlaces);

////////////////////
console.log("\n\n");
////////////////////

showItinerary(...AllPlaces.slice(0,3)); // first 3 places
//slice
    //starts at index 0
    //stops before index 3, so index 2