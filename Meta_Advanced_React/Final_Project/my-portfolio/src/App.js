//https://chakra-ui.com/docs/styling/text-styles
//https://chakra-ui.com/docs/components/concepts/overview

import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactMeSection from "./components/ContactMeSection";
import Footer from "./components/Footer";
import {AlertProvider} from "./context/alertContext";
import Alert from "./components/Alert";
import { Container } from "@chakra-ui/react";

function App() {
  return (
      <AlertProvider>
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
