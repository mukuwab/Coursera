import './App.css';
import React, {useState} from 'react';
import Heading from './Heading'; 
import Drink from './Drink';

function App() {
 
  const [word , setWord] = React.useState('Eat');
  //Eat will be the default state

  //the setWord function can be used directly to change the state of the word
  //However you cannot use the setWord variable directly, must change during event
    //like onClick

  const [drink, setDrink] = useState('Water');
  const [drinkIndex, setDrinkIndex] = useState(0);


    const Drinks = ['Water', 'Apple Juice', 'Tea'];

  
    function handleClick() {
    if (word === 'Eat') {
      setWord('Drink');
    } else {
      setWord('Eat');
    }
  }

  function handleClick_Drink() {
    const nextIndex = (drinkIndex + 1) % Drinks.length;
    setDrinkIndex(nextIndex);
    setDrink(Drinks[nextIndex]);
  }

  return (

    <div className="App">
      <Heading message={word + " at Little Lemon"}/>
      <button onClick={handleClick}>Click here</button>
    
      <Drink message={"I want to drink "+drink}/>
      <button onClick={handleClick_Drink}>Change Drink</button>
    </div>
  
  );
}

export default App;
