import Fruits from "./Fruits";
import FruitsCounter from "./FruitsCounter";
import React, {useState} from "react";

// Both <Fruits /> and <FruitsCounter /> need access to fruits, so the state belongs in App.
function App() {

      const [fruits] = React.useState([
        {fruitName: 'apple', id: 1, price: 1},
        {fruitName: 'apple', id: 2, price: 1} ,
        {fruitName: 'plum', id: 3, price: 1},
    ]);

  return (
    <div className="App">
      <h1>Where should the state go?</h1>
      
      {/* This passes the state to the children */}
      <Fruits fruits={fruits}/> 
      <FruitsCounter fruits={fruits}/>
    </div>
  );
}

export default App;
