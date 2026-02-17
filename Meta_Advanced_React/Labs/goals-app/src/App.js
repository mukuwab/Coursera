// will use useState hook in the component to update the state

import './App.css';
import React from "react";


// Goal form - captures anew goal using a form
function GoalForm(props){
  // accepts the props objects

  const [formData , setFormData] = React.useState({goal: "", by: ""});
  //declare state variable formData, which is destructed from a call to the useState hook
  //initialize form data variable as an object with 2 properties, goal and by
    //both assigned the values of empty strings

  function changeHandler(e){
  //changeHandler function accepts an 'e' parameter
    //e parameter --> readily availible event object which means it doesnt have to be
    //passed from the changeHandler rather it is provided by a mechanism outside of React
  //Whenever an event is fired, it creates an event object with many different peices of 
    //data related to the event.
    //The event object can be used by assigning it a custom name, such as 'e', 'EVT', or 'event'
    
    setFormData({...formData, [e.target.name]: e.target.value});
    //update the state of the form data variable by invoking the previously destructured state 
      //setting variable, 'setFormData' which was destructured from a call to the useStateHook

    //setFormData function accepts a shallow clone of the previous value of the form data variable 
      // {...form} above

    //Note: You should not work with the 'formData' variable directly which is why you make a copy
      //using the spread operator
      //b/c of how React optomizes the virtual DOM. 
        //keeping state immutable makes it possible to compare a previous version of the virtual DOM with
        //the updated version more effeciently and cost effectively

    //The new copy of the formData object is updated by adding
      //[e.target.name]: e.target.value
      //reads the 'e' target name using the bracket notation
      //then sets the value of the property to what ever is inside the 'e.target.value' property of the instance
        //of the event object, which was built when the specific event was fired
        //works with the brackets notation because it allows you to set the value of the 'e' target name dynamically
          //allows you to set it as 'goal' if the user typed into the input with the 'name' attribute set to 'goal'
          //allows you to set it as 'by' if the user typed into the input with the 'name' attribute set to 'by'
  }

  function submitHandler(e){
    //accepts the event attribute
    e.preventDefault();
    props.onAdd(formData);
    //GoalFrom component recieves the prop named onAdd addGoal is given to the function (in the return of App)
      //<GoalForm onAdd={add
    //once props.onAdd is invoked, it recieves the formData variable which triggers the update of the
      //allGoals state variable in the app components as described previously
    setFormData({goal: "", by: ""});
    //This is needed to avoid showing the values that the user entered. To do this you need to reset the formData
      //state variable to an empty string, both on the goal property of formData state object and the 'by' property
      //of the fromData state object
  }

  return(
    <>
      <h1>My Little Lemon Goals</h1>
      <form onSubmit={submitHandler}>
        {/* First and second inputs both follow the same structure as having the 'type', 'name', 'placeholder', 'value' 
        and 'onChange' attributes which hook into the previously described functionality */}
        <input type="text" name="goal" placeholder="goal" value={formData.goal} onChange={changeHandler}/>
        <input type="text" name="by" placeholder="by..." value={formData.by} onChange={changeHandler}/>
        <button>Submit Goal</button>
      </form>
    </>
  )
}

// ListOfGoals- loops over all the previously added goals and displays them as an
  // unordered list of items


  function ListOfGoals(props){
    //receives the allGoals state variable as a prop from its parent app component
      //purpose is to map over the allGoals array of objects where each object holds the two properties
      //that describe a single goal as explained earlier
      //By mapping over the allGoals array of objects, you output the unordered list with a list item
      //entry for each individual goal
  return(
    <ul>
      {props.allGoals.map((g) =>
        <li key={g.goal}>
          <span>My goal is to {g.goal} by {g.by}</span>
        </li>
      )}
    </ul>
  );
}

function App() {
  const [allGoals, updateAllGoals] = React.useState([]);

  function addGoal(goal) {updateAllGoals([...allGoals, goal]); }
  //add goal function accepts a goal entry and updates the value of addGoal's state variable thats kept 
    //inside the  App function
    //does by adding the goal entry to the list of previous goals saved and tracked inside the allGoals
    //state variable of the App component
  //the update of any state variable must go through the previously destructured state updating function
    //which is the updateAllGoals function
  //Need to pass the addGoal function definition to the GoalFrom JSX element in the App components return statement
    //this is why the addGoal function is now available as a prop named onAdd inside the goal form function
    //also why you can use it inside the submit handler function
  return (
    <div className="App">
      <GoalForm onAdd={addGoal}/>
      <ListOfGoals allGoals={allGoals}/>
    </div>
  );
}

export default App;
