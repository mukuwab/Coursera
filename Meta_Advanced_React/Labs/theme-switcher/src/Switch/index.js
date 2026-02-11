// Import the CSS file for styling the switch
import "./Styles.css";

// Import the custom hook useTheme to access the theme context
import { useTheme } from "../ThemeContext";

/*
  Switch component
  - This is a functional component that renders a toggle switch.
  - It reads the current theme and toggle function from context.
*/
const Switch = () => {

  // useTheme() gives us access to:
  //   - theme: current theme value ("light" or "dark")
  //   - toggleTheme: function to switch between light and dark
  const { theme, toggleTheme } = useTheme();
  //This uses object destructuring.
    /*
    SHORTHAND OF:
      const themeData = useTheme();  // themeData = { theme: "light", toggleTheme: function }
      const theme = themeData.theme;
      const toggleTheme = themeData.toggleTheme;

      theme → the current theme, e.g., "light" or "dark"
      toggleTheme → a function that can switch the theme
    */

  return (
    // The <label> wraps the switch and allows clicking anywhere on the label to toggle
    <label className="switch">
      
      {/* 
        Input element of type checkbox
        - checked: determines whether the switch is on or off
        - Here, we set checked to true if theme === "light"
        - onChange: called whenever the user clicks the switch
          - We pass toggleTheme so it changes the theme in context
      */}
      <input
        type="checkbox"
        checked={theme === "light"} // true if theme is light, false if dark
        onChange={toggleTheme}      // toggles theme on click
      />

      {/*
        The <span> element is used to style the slider itself
        - className "slider round" comes from Styles.css
        - visually moves when the checkbox is toggled
      */}
      <span className="slider round" />
    </label>
  );
};

// Export the Switch component so it can be used in other files
export default Switch;
