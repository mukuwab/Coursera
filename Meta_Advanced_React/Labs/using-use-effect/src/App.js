/*
Goals:
  >using useEffect hook to perfrom side effects in React
  >controlling the useEffect function using the depedencies array
*/

import './App.css';
import React from "react";

function App() {
  const [toggle, setToggle] = React.useState(false);

  const clickHandler = () => {
    setToggle(!toggle);
  }

  // React.useEffect(()=>{
  //   document.title = toggle ? "Welcome to Little Lemon" : "Using the useEffect hook"
  //   //use 'turnary' operator: if toggle is true "welcome..." if not "Using..."
  //   //this will dynamically update the text showing on the top of the browser when toggle button is pressed
  // });

  //   React.useEffect(()=>{
  //    document.title = toggle ? "Welcome to Little Lemon" : "Using the useEffect hook"
  //   //use 'turnary' operator: if toggle is true "welcome..." if not "Using..."
  //   //this will dynamically update the text showing on the top of the browser
  // },[]);
  //empty dependency array "[]"
    //means youre not tracking the value of any state variables
    //regardless of what is happening in the app, you dont want the
      //useEffect hook to be invoked
    //it will be involked only once (when app mounts) after that no more executions
  //Now when clicking the toggle the tab name changes only once regardless of future clicks
  //dependency array is there to watch for changes of a specific variable and based on that
    //execute the function thats passed in as the first argument that passed into the
    //useEffect call

  React.useEffect(()=>{
    document.title = toggle ? "Welcome to Little Lemon" : "Using the useEffect hook"
  },[toggle]);
  //updating the toggle variable in the dependecy array will allow the function
    //to run every time the toggle variable changes (every time the button is pressed)

  return (
    <div>
      <h1>Using the useEffect hook</h1>
      <button onClick={clickHandler}>
        Toggle message
      </button>
      
      {toggle && <h2>Welcome to Little Lemon</h2>}
      {/* logical AND operator used to conditionally render the h1
      if and only if toggle is true (h2 is always true)*/}
    </div>
  );
}

export default App;
