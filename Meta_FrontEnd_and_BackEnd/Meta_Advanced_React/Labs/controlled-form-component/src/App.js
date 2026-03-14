import './App.css';
import {useState} from 'react';

// Objective
  //create a little lemon feedback form using controlled form components
function App() {

  const [ score, setScore ] = useState("10");
  //the score will be saved in a state variable
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();//disables default html form behavior
    
    if(Number(score) <= 5 && comment.length <=10){
      alert("Please provide a comment explaining why the experience was poor.")
      return;
    
    }
    console.log("Form Submitted!")
    console.log(`Stars: ${score}`);
    console.log(`Comment: ${comment}`);
    
    //Good practice to restore the default form values
    setComment('');
    setScore('10')
  }
  return (
    <div className="App">

      {/* use handleSubmit function to remove default html form behavior */}
      <form onSubmit={handleSubmit}>
        
        <fieldset>
          <h2>Feedback form</h2>
          <div className="field">
            <label>Score: {score}⭐</label>
            <input 
              type="range" 
              min="0" 
              max="10"
              value={score}
              onChange={e => setScore(e.target.value)}
              />
              {/* use the onChange prop to update the state */}
          </div>
          <div className="Field">
            <label htmlFor="comment">Comment:</label>
            <textarea 
              id="comment" 
              name="comment"
              value={comment}
              onChange={ e => setComment(e.target.value)}
            />
          </div>
          <button type="submit">Submit</button>
        </fieldset>
      </form>
    </div>
  );
}

export default App;
