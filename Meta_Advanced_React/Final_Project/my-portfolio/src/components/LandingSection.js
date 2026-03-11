import React from "react";
import "./LandingSection.css";

const greeting = "Hello, I am Yusra!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

const LandingSection = () => {
  return (
    <section className="landing-section" id="landing-section">
      {/* Avatar */}
      <img
        className="landing-avatar"
        src="https://i.pravatar.cc/150?img=46"
        //16 46 47 2 49
        alt="Avatar"
      />

      {/* Greeting */}
      <h1 className="landing-heading">{greeting}</h1>

      {/* Bio lines */}
      <p className="landing-bio">{bio1}</p>
      <p className="landing-bio">{bio2}</p>
    </section>
  );
};

export default LandingSection;