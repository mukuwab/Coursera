import { UserProvider, useUser } from "./UserContext";

// There are two components that need to know the authenticated user
  // 1. The LoggedInUser component inside the Header
  // 2. The Page Component

//An authenticated user falls into the nature of global data that needs to be shared
  //over the span of several components context is needed

//Will create the needed context that will be called UserContext in a seperate js file


// This is an example of a React functional component
// Returns JSX which looks like HTML
// When function is called it will render the HTML elements on the screen
  // will need to call it by the main function App() to have it displayed

//to make the app aware of the UserContext, the whole App must be wrapped with it
const LoggedInUser = () => {
  const {user} = useUser();
  return(
    <p>
      Hello <span className="Username">{user.name}</span>
    </p>
  );
}

//Another React functional component
// Example of how to use one component inside of another component
const Header = () => {
  return (
    <header>
      <h2>Blog App</h2>
      <LoggedInUser/>
    </header>
  );
};

const Page = () => {
  const {user} = useUser();
  return(
    <div>
      <h2>What is Lorem ipsum?</h2>
      <p>Lorem dolor sit amet...</p>
      <p>Written by {user.name}</p>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Header/>
      <Page/>
    </div>
  );
}

//You can change the default to another function, it doesnt have to be App
  //in this case Root will be used.
//export default App;

function Root(){
  //In JavaScript, if you put return on its own line, it automatically inserts a semicolon.
  //need to have one of the elements on the same line as the return or else it breaks
  
  //also good practice to wrap the elements of the return in ()
 return (
  //Everything inside <UserProvider> ... </UserProvider> becomes the special prop called children.
 <UserProvider>
    <App/>
  </UserProvider>
  );
}
//this method allows you to easily wrap the App in the UserContext function

export default Root;