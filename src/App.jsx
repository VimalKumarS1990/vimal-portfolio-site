import "./App.css";
import Banner from "./components/views/Banner/Banner";
import NavBar from "./components/views/NavBar/NavBar";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  return (
    <div className="container">
      <NavBar />
      <Banner />
    </div>
  );
}

export default App;
