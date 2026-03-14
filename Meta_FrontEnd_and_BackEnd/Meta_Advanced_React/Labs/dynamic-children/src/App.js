import './App.css';
import * as React from 'react';

// Row component will handle the seperation
// for item
const Row = ({ children, spacing }) => {

  // create new prop: spacing
  // spacing is a number passed like <Row spacing={32}>
  // we convert it into CSS margin (ex: "32px")
  const childStyle = {
    marginLeft: `${spacing}px`
  }

  // Attach style to style prop in each element
  return (
    <div className="Row">

      {/* Iterate through each child */}
      {/* React.Children.map safely loops over children
          (children is NOT always a normal array) */}
      {React.Children.map(children, (child, index) => {

        // child = each element inside <Row>
        // index = position of element (0, 1, 2, 3...)

        // Return a new copy of the style element
        // React elements are IMMUTABLE (cannot be changed directly)
        // so we clone them instead.
        // 2nd argument lets you specify the new props
        return React.cloneElement(child, {

          // Add a new style prop that will merge the previous style
          style: {
            // keep any existing styles already on the child
            ...child.props.style,

            // if the element is not the first child,
            // then also merge the childStyle object
            // that contains the marginLeft statement
            ...(index > 0 ? childStyle : {}),
          },
        });
      })}
    </div>
    // Returns the children as they are provided,
    // but now spacing is automatically added between them
  );
};


// Example component using Row
function LiveOrders() {
  return (
    <div className="App">

      {/* spacing={32} means:
          every item AFTER the first gets margin-left: 32px */}
      <Row spacing={32}>
        <p>Garden Pizza</p>
        <p>2</p>
        <p>$30</p>
        <p>18:30</p>
        <p>Mary</p>
      </Row>

    </div>
  )
}


function App() {
  return (
    <div className="App">
      {/* Currently empty — LiveOrders is exported instead */}
    </div>
  );
}

// We export LiveOrders so it becomes the main rendered component
export default LiveOrders;