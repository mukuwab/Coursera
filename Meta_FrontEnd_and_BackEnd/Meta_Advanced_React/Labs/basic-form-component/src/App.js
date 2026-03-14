// Creating a form component in react

// Objectives
  // Create a controlled component in React
  // use local state and the onChange event
  // Avoid the default behavior of the submit event
  // disabling the submit button when the form is not valid


// Controlled components - components state handles form data
// Uncontrolled components - form data handled by the dom itself
  //upon submitting, makes a get request to the root and a page refresh
  //this will be an uncontrolled form
  //all the states live in the dom
  //undesireable

  //Create a controlled form
import './App.css';
import React, {useState} from 'react';

function App() {

  const [name, setName] = useState('')
  // local state for the text input
  // hook up the state to the text input via two props 
    // 1. value to turn input into controlled input
    // 2. onChange to recieve all the changes per keystroke and update input

  const handleSubmit = (e) => {
    //Prevent calling the root of the server and refreshing the page */}
    e.preventDefault();
    // use the event property you get as a parameter in the onSubmit callback
    //and calling PreventDefault on it

    //Now no refresh happens and no server is hit with a request

    //Clear out the input after Submission
    setName(''); // call the state setter for name and pass in empty string

    console.log(`Form Submitted!\nName:${name}`);
  }

  return (
    <div className="App">
     {/* to control the submission of the form, you must use the onSubmit prop in the
     form tag */}
      <form onSubmit = {handleSubmit}>
        <fieldset>
          <div className="field">
            {/* Connect the label with the input for best accessibility practice */}
              {/* set id for input */}
              {/* on the label set the htmlFor to the value of the inputs's id */}
            <label htmlFor="name">Name</label>
            <input id="name" 
                   type="text" 
                   placeholder="Name" 
                   name="name"
                   value={name} //controlled value
                   onChange={(e) => setName(e.target.value)} //update state
            />
          </div>
          {/* use the disable attribute to prevent submission if no name is given */}
          <button type="submit" disabled={!name}>Submit</button>
        </fieldset>
      </form>
    </div>
  );
}

export default App;
