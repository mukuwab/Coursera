// Import CSS styling for the app
import "./App.css";

// Import the ThemeProvider (context provider)
// and useTheme (custom hook to consume theme context)
import { ThemeProvider, useTheme } from "./ThemeContext";

// Import a Switch component that likely toggles light/dark theme
import Switch from "./Switch";


/*
  Title component
  - Receives "children" (whatever is placed between <Title>...</Title>)
  - Uses the theme from context to decide text color
*/
const Title = ({ children }) => {

  // useTheme() reads the current value from ThemeContext
  // It only works because this component is wrapped inside ThemeProvider
  const { theme } = useTheme();

  return (
    <h2
      // Inline styling based on theme
      // If theme is "light", text is black
      // If theme is "dark", text is white
      style={{
        color: theme === "light" ? "black" : "white",
      }}
    >
      {/* children renders whatever was passed inside <Title> */}
      {children}
    </h2>
  );
};


/*
  Paragraph component
  - Same pattern as Title
  - Reads theme from context
  - Adjusts text color dynamically
*/
const Paragraph = ({ children }) => {

  // Access theme from context
  const { theme } = useTheme();

  return (
    <p
      style={{
        color: theme === "light" ? "black" : "white",
      }}
    >
      {children}
    </p>
  );
};


/*
  Content component
  - Just renders a Paragraph component
  - Demonstrates component composition
*/
const Content = () => {
  return (
    <div>
      {/* The text inside becomes the "children" prop of Paragraph */}
      <Paragraph>
        We are a pizza loving family. And for years, I searched and searched and
        searched for the perfect pizza dough recipe. I tried dozens, or more.
        And while some were good, none of them were that recipe that would
        make me stop trying all of the others.
      </Paragraph>
    </div>
  );
};


/*
  Header component
  - Renders a Title
  - Renders the Switch (theme toggle)
*/
const Header = () => {
  return (
    <header>
      {/* "Little Lemon 🍕" becomes children for Title */}
      <Title>Little Lemon 🍕</Title>

      {/* Switch likely changes the theme inside ThemeContext */}
      <Switch />
    </header>
  );
};


/*
  Page component
  - Uses Title and Content
  - Demonstrates reusable components
*/
const Page = () => {
  return (
    <div className="Page">
      <Title>When it comes to dough</Title>
      <Content />
    </div>
  );
};


/*
  App component
  - Main UI container
  - Reads theme from context
  - Changes background color based on theme
*/
function App() {

  // Access current theme from context
  const { theme } = useTheme();

  return (
    <div
      className="App"
      style={{
        // Background switches depending on theme
        backgroundColor: theme === "light" ? "white" : "black",
      }}
    >
      <Header />
      <Page />
    </div>
  );
}


/*
  Root component
  - Wraps the entire app in ThemeProvider
  - This makes theme data available to ALL child components
  - Without this wrapper, useTheme() would not work
*/
function Root() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}


// Export Root so React renders it
export default Root;

/*
Root
 └── ThemeProvider   (stores theme state)
      └── App
           ├── Header
           │    ├── Title
           │    └── Switch
           └── Page
                ├── Title
                └── Content
                     └── Paragraph

*/