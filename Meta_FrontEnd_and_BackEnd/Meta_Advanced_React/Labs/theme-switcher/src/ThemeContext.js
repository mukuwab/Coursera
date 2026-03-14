/*Implement the `ThemeProvider` component. It should accept a `children` prop and return a `ThemeContext.Provider` component.
The `ThemeContext.Provider` receives an object as its `value` prop, with a `theme` string and a `toggleTheme` function. */

/* `toggleTheme` should toggle the theme between `light` and `dark`.
 */

import { createContext, useContext, useState } from "react";

// Create a real context object
const ThemeContext = createContext(undefined);

// ThemeProvider component
export function ThemeProvider({ children }) {

  // Store theme in state
  // Default theme is "light"
  const [theme, setTheme] = useState("light");

  // Function to toggle theme
  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === "light" ? "dark" : "light"
    );
    /*
    prevTheme === "light"
    This checks:
    Is the current theme equal to "light"?

    It returns either:
    true
    false 
    
    condition ? valueIfTrue : valueIfFalse

    If the condition is true, return "dark".

    So if current theme is "light", switch to "dark".
    */
  };

  return (
    // Provide BOTH theme and toggleTheme to all children
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Custom hook to consume context
export function useTheme() {
  return useContext(ThemeContext);
}

/*
ThemeProvider
   stores theme state
   shares it through ThemeContext
        ↓
All child components can read it using useTheme()
 */