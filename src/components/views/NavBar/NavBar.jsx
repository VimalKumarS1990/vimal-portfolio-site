import React, { useState } from "react";
import "./NavBar.css";
import downloadIcon from "../../../assets/icons/download-pdf.png";
const NavBar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleToggler = () => {
    setOpenMenu(!openMenu);
  };

  const handleLinkClick = () => {
    setOpenMenu(false);
  };

  return (
    <nav className="navbar navbar-light bg-info navbar-expand-lg row">
      <div className="container align-items-baseline">
        <a
          href="#home"
          className="navbar-brand h1 active poppins-extrabold"
          style={{ fontSize: "2rem", color: "greenYellow" }}
          onClick={handleLinkClick}
        >
          VK
        </a>
        <span>
          <button className="border-0 d-lg-none" style={{ background: "none" }}>
            <img
              src={downloadIcon}
              alt="download-resume"
              width="40px"
              height="40px"
            />
          </button>
          <button
            className="navbar-toggler ml-auto"
            type="button"
            aria-controls="navbarOptions"
            aria-expanded={openMenu}
            onClick={handleToggler}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </span>
        <div
          className={`collapse navbar-collapse ${
            openMenu ? "show" : "hide"
          } gap-4`}
          id="navbarOptions"
        >
          <ul className="navbar-nav ml-auto mb-2 mb-lg-0 text-center text-secondary text-uppercase">
            <li className="nav-item" onClick={handleLinkClick}>
              <a href="#home" className="nav-link poppins-bold">
                Home
              </a>
            </li>
            <li className="nav-item" onClick={handleLinkClick}>
              <a href="#about" className="nav-link poppins-bold">
                About
              </a>
            </li>
            <li className="nav-item" onClick={handleLinkClick}>
              <a href="#skills" className="nav-link poppins-bold">
                Skills
              </a>
            </li>
            <li className="nav-item" onClick={handleLinkClick}>
              <a href="#experience" className="nav-link poppins-bold">
                Experience
              </a>
            </li>
            <li className="nav-item" onClick={handleLinkClick}>
              <a href="#projects" className="nav-link poppins-bold">
                Projects
              </a>
            </li>
            <li className="nav-item" onClick={handleLinkClick}>
              <a href="#contact" className="nav-link poppins-bold">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <button
          className="border-0 d-none d-lg-block"
          style={{ background: "none" }}
        >
          <img
            src={downloadIcon}
            alt="download-resume"
            width="40px"
            height="40px"
          />
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
