import React from "react";

function App() {

  const [user, setUser] = React.useState([]);

  const fetchData = () => {
    fetch("http://randomuser.me/api/?results=1")
      .then(response => response.json())
      //retrieves response from API in json format
      .then(data => setUser(data));
      //then updates state variable w/ json data
  }

  React.useEffect( ()=> {
    fetchData();
  },[]);

  //use Object.keys code snippet to put all of the
    //keys of the user object into an array
  //Since Object.keys returns an array you can access the
    //length property on the array
    //if the length of the array is greater than 0 then the
    //contents of the array have changed, providing a focal
    //point for conditional logic
  return Object.keys(user).length > 0 ? (
    <div>
      <h1>Data returned</h1>
      <h2>First Name: {user.results[0].name.first}</h2>
      <h2>Last Name: {user.results[0].name.last}</h2>
    </div>
  ):(
    <h1>Data pending...</h1>
  );
}
//the change in value of the state variable will trigger a 
  //rerender of the dom allowing App to update to the proper
  //conditional output

export default App;
