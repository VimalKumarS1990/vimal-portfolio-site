import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import AOS from "aos";
import "aos/dist/aos.css";
import NavBar from "./components/views/NavBar/NavBar";
import Banner from "./components/views/Banner/Banner";
import About from "./components/views/About/About";
import Skills from "./components/views/Skills/Skills";
import Contact from "./components/views/Contact/Contact";
import ScrollToTop from "react-scroll-to-top";
import { FaChevronCircleUp } from "react-icons/fa";
import Experience from "./components/views/Experience/Experience";
import Projects from "./components/views/Projects/Projects";
import { useEffect } from "react";

function App() {
  const scrollToSection = (section) => {
    const sectionName = document.getElementById(section);
    if (sectionName) {
      sectionName.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: "ease-out", // Easing function for the animation
      once: false, // Whether the animation should happen only once when scrolling
      offset: 150, // The offset (in px) to trigger the animation
    });
  }, []);

  return (
    <div className="container">
      <>
        <ScrollToTop
          data-aos="fade-up"
          smooth
          component={
            <FaChevronCircleUp
              className="colorChange"
              style={{ fontSize: "2em" }}
            />
          }
        />
      </>
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
