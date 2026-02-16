//updating state using arrow functions

import { useState } from "react"; 
 
export default function Greeting2() { 
  const [greeting, setGreeting] = useState( 
    { 
        greet: "Hello", 
        place: "World" 
    } 
  ); 
  console.log(greeting, setGreeting); 
 
  function updateGreeting() { 
    setGreeting(prevState => { 
        //prevState => is shorthand for function(prevState) {
        // React automatically passes in the current state value.
            //greet: "Hello", place: "World"m
        return {...prevState, place: "World-Wide Web"} 

        //using ...prevState , prevState becomes {greet: "Hello", place: "World"
        //prevState is just a parameter name, can be anything

        //setGreeting(something => { ... }
        //“React, call this function and pass me the latest state.”
    }); 
  } 

  /* 
  The reason this works is because it uses the previous state, 
  which is named prevState, and this is the previous value of 
  the greeting variable. In other words, it makes a copy of 
  the prevState object, and updates only the place property 
  on the copied object. It then returns a brand-new object: 
  
  return {...prevState, place: "World-Wide Web"} 
  */
  
  return ( 
    <div> 
      <h1>{greeting.greet}, {greeting.place}</h1> 
      <button onClick={updateGreeting}>Update greeting</button> 
    </div> 
  ); 
} 