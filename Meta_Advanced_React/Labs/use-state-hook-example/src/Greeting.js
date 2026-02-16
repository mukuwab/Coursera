import { useState } from "react"; 

export default function Greeting() { 
  const [greeting, setGreeting] = useState({ greet: "Hello, World" }); 
  console.log(greeting, setGreeting); 
 
  function updateGreeting() { 
    const newGreeting = {...greeting}; 
    newGreeting.greet = "Hello, World-Wide Web"; 
    setGreeting(newGreeting); 
  } 
 
  return ( 
    <div> 
      <h3>{greeting.greet}</h3> 
      <button onClick={updateGreeting}>Update greeting</button> 
    </div> 
  ); 
} 