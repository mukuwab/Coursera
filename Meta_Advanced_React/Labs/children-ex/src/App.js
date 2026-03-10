import './App.css';

/*
  Button component
  ----------------
  - Receives props:
      children → the text or elements inside the button
      backgroundColor → color passed from parent
  - Applies the color using inline styles
*/
const Button = ({ children, backgroundColor }) => {
  return (
    <button style={{ backgroundColor }}>
      {children} {/* displays whatever is inside <Button> */}
    </button>
  );
};


/*
  Alert component (Modal)
  -----------------------
  - children contains everything placed between
    <Alert> ... </Alert>
  - We render an overlay (dark background)
    and a centered alert box.
*/
const Alert = ({ children }) => {
  return (
    <>
      {/* Dark background covering the screen */}
      <div className="Overlay" />

      {/* Popup alert box */}
      <div className="Alert">
        {children} {/* IMPORTANT: renders passed content */}
      </div>
    </>
  );
};


/*
  DeleteButton component
  ----------------------
  - Reuses the Button component
  - Passes a red background color
  - Demonstrates component composition
*/
const DeleteButton = () => {
  return (
    <Button backgroundColor="red">
      Delete
    </Button>
  );
};


/*
  Main App component
  ------------------
  - Root component rendered by React
  - Displays a header and the Alert modal
*/
function App() {
  return (
    <div className="App">
      {/* Page title */}
      <header>Little Lemon</header>

      {/* Alert modal with content passed as children */}
      <Alert>
        <h4>Delete Account</h4>
        <p>Are you sure you want to proceed?</p>

        {/* Custom button component */}
        <DeleteButton />
      </Alert>
    </div>
  );
}

export default App;