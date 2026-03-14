
/* 
useState- starts with an initial state

useReducer - starts with an initial state and a reducer function
  >reducer function's second argument is the action object
    -object has multiple type values each with own operation
  */

import React from "react";
import {useReducer} from "react";

const reducer = (state, action) => {
  if (action.type === 'buy_ingredients') return {money: state.money - 10};
  if (action.type === 'sell_a_meal') return {money: state.money + 10};
  if (action.type === 'big_event') return {money: state.money + 1000};
  return state;
}

function App() {

  const initialState = {money:100};
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
      <h1>Wallet: {state.money}</h1>
      <div>
        <button onClick={()=> dispatch({type: 'buy_ingredients'})}>Shopping for veggies!</button>
        {/* instead of using setState as used for useState, you instead use the dispatch method of the
        useReducer hook.
        
        Accepts an object literal with a single property called 'type' set to a matching action.type
        whose behavior is defined inside the reducer function*/}
        <button onClick={()=> dispatch({type: 'sell_a_meal'})}>Serve a Meal!</button>
        <button onClick={()=> dispatch({type: 'big_event'})}>Cater Big Event!</button>
      </div>
    </div>
  );
}

export default App;
