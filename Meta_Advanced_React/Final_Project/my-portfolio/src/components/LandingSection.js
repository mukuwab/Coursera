import "./LandingSection.css";

const greeting = "Hello, I am Yusra!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => {
  return (
    <section className="landing-section" id="landing-section">
      {/*avatar*/}
      <img
        className="landingSection-avatar"
        src="https://i.pravatar.cc/150?img=46"
        //16 46 47 2 49
        alt="avatar thumbnail"
      />

      {/*greeting*/}
      <h1 className="landingSection-heading"
          fontFamily="Inter"
          fontSize="2rem"
          color="#ffffff"
      >
        {greeting}
      </h1>

      {/* Bio lines */}
      <p className="landingSection-bio">{bio1}</p>
      <p className="landingSection-bio">{bio2}</p>
    </section>
  );
};

export default LandingSection;