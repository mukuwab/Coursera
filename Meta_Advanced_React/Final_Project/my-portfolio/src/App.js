import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactMeSection from "./components/ContactMeSection";
import Footer from "./components/Footer";
import {AlertProvider} from "./context/alertContext";
import Alert from "./components/Alert";

function App() {
  return (
      <AlertProvider>
        <h1>Hello</h1>
        <main>
          <Header />
          <LandingSection />
          <ProjectsSection />
          <ContactMeSection />
          <Footer />
          <Alert />
        </main>
      </AlertProvider>
  ); 
}

export default App;
