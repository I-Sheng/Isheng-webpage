import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";
import Head from "./components/Head";
import LandingSection from "./components/LandingSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactMeSection from "./components/ContactMeSection";
import Footer from "./components/Footer";
import { AlertProvider } from "./context/alertContext";
import Alert from "./components/Alert";

function App() {
  return (
    <ChakraProvider>
      <Head />
      <AlertProvider>
        <main>
          <Header />
          <LandingSection />
          <ProjectsSection />
          {/* <ContactMeSection /> */}
          <Footer />
          <Alert />
        </main>
      </AlertProvider>
    </ChakraProvider>
  );
}

export default App;
