/* Remove the `null` and instead return a `ul` element that contains a list of `li` elements, where each `li` text is a dessert with the following format: `${dessertName} - ${dessertCalories} cal`.

The list should be sorted by calories in an ascending manner and any desserts with more than 500 calories should be excluded.
For that you have to use a combination of `map`, `filter` and `sort` array operators.
 */

//Sort Method
/*The sort() method sorts an array alphabetically:

Example
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort(); */


//Filter Method
/* The filter() method creates a new array filled with elements that pass a test provided by a function.

The filter() method does not execute the function for empty elements.

The filter() method does not change the original array. 

const ages = [32, 33, 16, 40];
const result = ages.filter(checkAdult);

function checkAdult(age) {
  return age >= 18;
}

*/

import React, {useState} from 'react';


function DessertsList(props) {
  //In App.js <DessertsList data={dessert}/>
  //desserts array pass in through the variable data
  //must iterate through 'data' instead of 'deserts'

//Filter the results , under 500 cal
const lowCalDesserts = props.data.filter(dessert => dessert.calories < 500);
//const lowCalDessert --> creates a new array to store the filtered result
//filter through the props

console.log(lowCalDesserts); // this array has been populated

/* Array(3)
0
{name: 'Chocolate Cake', calories: 400, createdAt: '2022-09-01'}
1
{name: 'Ice Cream', calories: 200, createdAt: '2022-01-02'}
2
{name: 'Tiramisu', calories: 300, createdAt: '2021-10-03'}
length
3 */

//sort the array alphabetically

const sortedArray = lowCalDesserts.sort()
console.log(sortedArray);

  return (
    <div>
      {sortedArray.map( dessert =>  
         <ul>{`${dessert.name} - ${dessert.calories} cal`}</ul>
      )}
    </div>
  );
}

export default DessertsList;
