import './App.css';
import React, { useState } from 'react';


function App() {
  const [ num, setNum] = React.useState(0);

  return (
    <div className="App">
      <h1>Current Number is {num}</h1>
      <button onClick={() => setNum(num + 1)}>Add 1</button>
      <button onClick={() => setNum(num - 1)}>Subtract 1</button>
    </div>
  );
}

export default App;
