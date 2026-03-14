import "./App.css";
import { useEffect, useState } from "react";

/*
  ======================================================
  MousePosition Component (Render Props Pattern)
  ======================================================

  Purpose:
  - Tracks mouse movement
  - Stores mouse coordinates in state
  - DOES NOT decide how to display data
  - Instead, it gives the data to another component
    using a "render prop"
*/
const MousePosition = ({ render }) => {

  // React state storing current mouse coordinates
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  /*
    useEffect runs after component mounts.

    Here we:
    1. Listen for mouse movement
    2. Update state whenever mouse moves
    3. Clean up event listener when component unmounts
  */
  useEffect(() => {

    // Event handler for mouse movement
    const handleMousePositionChange = (e) => {
      // e.clientX and e.clientY give cursor position
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    // Start listening for mouse movement
    window.addEventListener("mousemove", handleMousePositionChange);

    // Cleanup function (VERY important in React)
    return () => {
      window.removeEventListener("mousemove", handleMousePositionChange);
    };
  }, []); // empty dependency array = run once on mount

  /*
    Render Props Pattern:

    Instead of returning JSX directly,
    we CALL the render function passed as a prop
    and give it the mousePosition data.
  */
  return render(mousePosition);
};


/*
  ======================================================
  PanelMouseLogger
  ======================================================

  Requirements:
  - Receives NO props
  - Uses MousePosition to get data
  - Displays coordinates in a panel UI
*/
const PanelMouseLogger = () => {
  return (
    <MousePosition
      /*
        render is a FUNCTION.
        React calls this function and passes mousePosition.
      */
      render={(mousePosition) => (
        <div className="BasicTracker">
          <p>Mouse position:</p>

          <div className="Row">
            <span>x: {mousePosition.x}</span>
            <span>y: {mousePosition.y}</span>
          </div>
        </div>
      )}
    />
  );
};


/*
  ======================================================
  PointMouseLogger
  ======================================================

  Same data source,
  different visual representation.
*/
const PointMouseLogger = () => {
  return (
    <MousePosition
      render={(mousePosition) => (
        <p>
          ({mousePosition.x}, {mousePosition.y})
        </p>
      )}
    />
  );
};


/*
  ======================================================
  App Component (Root)
  ======================================================

  Renders two different UIs using the SAME logic.
*/
function App() {
  return (
    <div className="App">
      <header className="Header">
        Little Lemon Restaurant 🍕
      </header>

      {/* Panel-style display */}
      <PanelMouseLogger />

      {/* Simple coordinate display */}
      <PointMouseLogger />
    </div>
  );
}

export default App;