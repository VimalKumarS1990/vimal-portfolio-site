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
import Admin from "./components/views/Admin/Admin";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";

function App() {
  const scrollToSection = (section) => {
    const sectionName = document.getElementById(section);
    if (sectionName) {
      sectionName.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (window.location.hash) {
      window.location.hash = "";
    }

    window.scrollTo(0, 0);

    AOS.init({
      duration: 1000,
      easing: "ease-out",
      once: false,
      offset: 150,
    });

    AOS.refresh();
  }, []);

  const UserHome = () => (
    <div className="container">
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
      <NavBar />
      <Banner />
      <About scrollToSection={scrollToSection} />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );

  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserHome />} />
        <Route path="/admin-vimal" element={<Admin />} />
      </Routes>
    </Router>
  );
}

export default App;
