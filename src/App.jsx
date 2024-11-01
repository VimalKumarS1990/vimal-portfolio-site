import "./App.css";
import Banner from "./components/views/Banner/Banner";
import Contact from "./components/views/Contact/Contact";
import NavBar from "./components/views/NavBar/NavBar";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  return (
    <div className="container">
      <NavBar />
      <Banner />
      <Contact />
    </div>
  );
}

export default App;
