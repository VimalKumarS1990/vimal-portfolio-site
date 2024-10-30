import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "aos/dist/aos.css"; // Import AOS styles
import AOS from "aos"; // Import AOS

AOS.init({
  duration: 1000, // Animation duration in milliseconds
  easing: "ease-in-out", // Easing function
  once: true, // Whether animation should happen only once
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
