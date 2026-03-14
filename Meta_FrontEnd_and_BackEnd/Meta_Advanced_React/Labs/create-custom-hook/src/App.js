import { useState, useEffect, useRef } from "react";
export default function App() {
  const [day, setDay] = useState("Monday");
  const prevDay = usePrevious(day);
  const getNextDay = () => {
    if (day === "Monday") {
      setDay("Tuesday")
    } else if (day === "Tuesday") {
      setDay("Wednesday")
    } else if (day === "Wednesday") {
      setDay("Thursday")
    } else if (day === "Thursday") {
      setDay("Friday")
    } else if (day === "Friday") {
      setDay("Monday")
    }
  }
  return (
    <div style={{padding: "40px"}}>
      <h1>
        Today is: {day}<br />
        {
          prevDay && (
            <span>Previous work day was: {prevDay}</span>
          )
        }
      </h1>
      <button onClick={getNextDay}>
        Get next day
      </button>
    </div>
  );
}

function usePrevious(val) {
  // Create a ref object that will store the previous value.
  // useRef keeps its value between renders without causing re-renders.
  const ref = useRef();
  // useEffect runs AFTER the component renders.
  // We use it to save the current value so it becomes
  // the "previous" value on the next render.
  useEffect(() => {
    // Store the current value inside ref.current
    ref.current = val;
  }, [val]); // Run this effect whenever val changes
  // Return the previous value (stored in ref.current)
  return ref.current;
}