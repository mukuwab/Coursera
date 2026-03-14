import {
  useState,
  useRef
} from "react"; 
import "./App.css";

function App() { 
  const inputRef = useRef(null); 
  const resultRef = useRef(null); 
  const [result, setResult] = useState(0); 
 
  function plus(e) { 
    e.preventDefault(); 
    setResult((result) => result + Number(inputRef.current.value)); 
  }; 
 
  function minus(e) { 
  	e.preventDefault();
    setResult((result) => result - Number(inputRef.current.value)); 
  };
 
  function times(e) { 
  	e.preventDefault();
    setResult((result) => result * Number(inputRef.current.value)); 
  }; 
 
  function divide(e) { 
  	e.preventDefault();
    setResult((result) => result / Number(inputRef.current.value));   };
 
  function resetInput(e) { 
     e.preventDefault();
    inputRef.current.value = "";  
  }; 
 
  function resetResult(e) { 
    e.preventDefault();
  	setResult(0);
  }; 
 
  return ( 
    <div className="App"> 
      <div> 
        <h1>Simplest Working Calculator</h1> 
      </div> 
      <form> 
        <p ref={resultRef}> 
          {result} 
        </p> 
        <input
          pattern="[0-9]" 
          ref={inputRef} 
          type="number" 
          placeholder="Type a number" 
        /> 
        <div className="operation-buttons">
          <button onClick={plus}>add</button> 
          
          {/* Add the subtract button */} 
          <button onClick={minus}>subtract</button> 
          
          {/* Add the multiply button */} 
          <button onClick={times}>multiply</button> 
          
          {/* Add the divide button */} 
          <button onClick={divide}>divide</button> 
          
        </div>
        <div className="other-buttons">
        {/* Add the resetInput button */}
        <button onClick={resetInput}>Reset Input</button>  
        
        {/* Add the resetResult button */} 
        <button onClick={resetResult}>Reset Result</button> 
        </div>
      </form> 
    </div> 
  ); 
} 
 
export default App; 
