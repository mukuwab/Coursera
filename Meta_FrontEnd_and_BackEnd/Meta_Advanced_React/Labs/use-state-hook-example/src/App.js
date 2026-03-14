// Goal: demonstrate how yo update state in react by using
//       the use state hook to set the inital value of the 
//       restaurant name to Lemon and then using only the 
//       useState updating function to update it to little Lemon

import './App.css';
import { useState } from 'react';
import Greeting from './Greeting';
import Greeting2 from './Greeting2';

function App() {
  
 // const restaurantName = useState("Lemon");
  
  const [restaurantName, setRestaurantName] = useState("Lemon");
  //the destructured restaurantName variable holds the state
  //the destructured setRestaurantName variable holds the state updating
  //  function
  //this is an ex. of array destructuring using the useState hook
  
  console.log(restaurantName);
  console.log(setRestaurantName);


  
  //console logged value is an array with "Lemon" at index 0
  //and "f" or the state update function at index 1

  // ['Lemon', f ]

  //name the state updating function using camel case or name
  //it by prepending the word 'set' to the variable name used for
  //the destructured state variable
  
  //the only way to update the state of the restaurantName variable is by
  //  involking the setRestaurantName function.

  //state changes usually triggered through user generated events
  
  function updateRestaurantName() {
    setRestaurantName("Little Lemon");
  }
  
  return (
    <div>
      <h1>{restaurantName}</h1>
      <button onClick={updateRestaurantName}>update restaurant name</button>
    
      <h2>useState variable values</h2>
      <p>restaurantName: {restaurantName}</p>
      <p>updateRestaurantName: {updateRestaurantName}</p>

      <h1>Greeting Function in Greeting.js</h1>
      <Greeting/>

      <h1>Greeting Function in Greeting2.js</h1>
      <Greeting2/>

    </div>
  );
}

export default App;
