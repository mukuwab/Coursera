import logo from './logo.svg';
import './App.css';

// This is how you declare a new component
function Heading(){
  return(
    <h1>This is an h1 heading</h1>
  )
}

// function MathFunction({a,b}){
//   sum = a + b;

//   return(
//     <h1>{sum}</h1>
//   )
// }

function App() {
  return (

    <div>
      <Heading/>
      {/* <MathFunction a={1} b={2} /> */}
    </div>
  );
}

export default App;
