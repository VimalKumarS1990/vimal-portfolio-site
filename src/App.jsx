import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import NavBar from "./components/views/NavBar/NavBar";
import Banner from "./components/views/Banner/Banner";
import About from "./components/views/About/About";
import Skills from "./components/views/Skills/Skills";
import Contact from "./components/views/Contact/Contact";
import ScrollToTop from "react-scroll-to-top";
import { FaChevronCircleUp } from "react-icons/fa";
import Experience from "./components/views/Experience/Experience";
import Projects from "./components/views/Projects/Projects";

function App() {
  const scrollToSection = (section) => {
    const sectionName = document.getElementById(section);
    if (sectionName) {
      sectionName.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="container">
      <ScrollToTop
        smooth
        component={
          <FaChevronCircleUp
            className="colorChange"
            style={{ fontSize: "2em" }}
          />
        }
      />
      <NavBar />
      <Banner />
      <About scrollToSection={scrollToSection} />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
