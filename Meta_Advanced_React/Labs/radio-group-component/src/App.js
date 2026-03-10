import "./App.css";
import { RadioGroup, RadioOption } from "./Radio";
import { useState } from "react";

function App() {
  const [selected, setSelected] = useState("");

  return (
    <div className="App">
      <h2>How did you hear about Little Lemon?</h2>

      <RadioGroup selected={selected} onChange={setSelected}>
        <RadioOption value="social_media">Social Media</RadioOption>
        <RadioOption value="friends">Friends</RadioOption>
        <RadioOption value="advertising">Advertising</RadioOption>
        <RadioOption value="other">Other</RadioOption>
      </RadioGroup>

      <button disabled={!selected}>Submit</button>
    </div>
  );
}

export default App;



// import * as React from "react";

// /*
//   ============================
//   RadioGroup Component
//   ============================

//   Responsibilities:
//   - Knows which option is selected
//   - Sends checked + onChange props
//     to each RadioOption automatically
// */
// export function RadioGroup({ children, selected, onChange }) {

//   /*
//     React.Children.map:
//     Safely loops through all children passed
//     inside <RadioGroup>...</RadioGroup>
//   */
//   const RadioOptions = React.Children.map(children, (child) => {

//     /*
//       child.props.value =
//       value defined in each RadioOption

//       We compare it with the selected value
//       to determine if this option is checked.
//     */
//     const isChecked = child.props.value === selected;

//     /*
//       cloneElement creates a NEW element
//       and adds extra props to it.
//     */
//     return React.cloneElement(child, {
//       checked: isChecked,

//       /*
//         When a radio changes,
//         call the parent onChange handler
//         with the new selected value.
//       */
//       onChange: onChange,
//     });
//   });

//   return <div>{RadioOptions}</div>;
// }


// /*
//   ============================
//   RadioOption Component
//   ============================

//   Represents ONE radio button
// */
// export function RadioOption({
//   value,
//   checked,
//   onChange,
//   children,
// }) {

//   /*
//     Handles change event from input
//     and sends selected value upward.
//   */
//   const handleChange = (e) => {
//     const newValueSelected = e.target.value;
//     onChange(newValueSelected);
//   };

//   return (
//     <label style={{ display: "block", marginBottom: "8px" }}>
//       <input
//         type="radio"
//         value={value}       // radio value
//         checked={checked}   // controlled by RadioGroup
//         onChange={handleChange} // notify parent
//       />
//       {children}
//     </label>
//   );
// }

