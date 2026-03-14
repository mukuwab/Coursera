import { useState } from "react"; // Import the useState hook from React so we can store and update state

export default function App() {

  // useState stores the gift card information in an object
  // giftCard = current state
  // setGiftCard = function used to update the state
  const [giftCard, setGiftCard] = useState({
    firstName: "Jennifer", // Customer first name
    lastName: "Smith", // Customer last name
    text: "Free dinner for 4 guests", // Description of the gift card
    valid: true, // Determines if the gift card is still usable
    instructions: "To use your coupon, click the button below.", // Instructions shown to the user
  });

  // This function runs when the "Spend Gift Card" button is clicked
  function spendGiftCard() {

    // setGiftCard updates the state
    // We pass a function that receives the previous state (prevState)
    setGiftCard((prevState) => {

      // Return a NEW object to update the state
      return {
        ...prevState, // Copy all previous values from the giftCard object

        // Update these specific properties
        text: "Your coupon has been used.", // Change the message shown on the page
        valid: false, // Mark the gift card as no longer valid
        instructions: "Please visit our restaurant to renew your gift card." // New instructions
      };
    });
  }

  return (
    <div style={{ padding: "40px" }}>
      <h1>Gift Card Page</h1>

      {/* Display the customer's full name */}
      <h2>
        Customer: {giftCard.firstName} {giftCard.lastName}
      </h2>

      {/* Display the gift card message */}
      <h3>{giftCard.text}</h3>

      {/* Display the instructions */}
      <p>{giftCard.instructions}</p>

      {/* 
        This is conditional rendering.
        The button will ONLY show if giftCard.valid is true.
        When valid becomes false, the button disappears.
      */}
      {giftCard.valid && (
        <button onClick={spendGiftCard}>
          Spend Gift Card
        </button>
      )}
    </div>
  );
}