import './App.css';

const Button = ({type, children, ...buttonProps}) => {
  const className = type === "primary" ? "PrimaryButton" : "SecondaryButton";
  return (
    <button className={`Button ${className}`} {...buttonProps}>
      {children}
    </button>
  );
};
// type prop -> custom prop that determines the background of the button
  //based on the theme provided
// ...buttonPress -> groups all the props that belong to the native button
  // and allows extraction of custom props that have been defined

//Renders the custom Button component
  const LoginButton = ({type, children, ...buttonProps}) => {
  return(
    <Button
      type="secondary"
      {...buttonProps}
      onClick={()=> {
        alert("Logging in");
      }}
      >
        {children}
      </Button>
  );
};


function App() {
  return (
    <div className="App">
      <header className = "Header">Little Lemon</header>
      <Button type="secondary" onClick={() => alert("Signing Up!")}>
      </Button>
      <LoginButton type="primary" onClick={() => alert("Signing Up!")}>
        Login
      </LoginButton>
    </div>
  );
}

export default App;
