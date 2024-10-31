import React, { useState } from "react";
import "./NavBar.css";
import { TbFileDownload } from "react-icons/tb";
import { IoMenuOutline } from "react-icons/io5";
import brandLogo from "../../../assets/images/brand-logo.png";
const NavBar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleToggler = () => {
    setOpenMenu(!openMenu);
  };

  const handleLinkClick = () => {
    setOpenMenu(false);
  };

  return (
    <>
      <nav
        className="navbar navbar-light navbar-expand-lg row navCard mx-0 sticky-top"
        style={{
          backgroundColor: "#C1E2A4",
          borderBottom: "1px solid white",
        }}
      >
        <div className="container align-items-baseline">
          <a
            href="#home"
            className="navbar-brand h1 active poppins-extrabold logo-font"
            style={{
              fontSize: "2rem",
              color: "greenYellow",
            }}
            onClick={handleLinkClick}
          >
            <img
              src={brandLogo}
              alt="brand-logo"
              width={"50px"}
              height={"auto"}
              className="brand-logo"
            />
          </a>
          <span
            style={{ fontWeight: "bold", color: "#006a67" }}
            className="d-block d-lg-none"
          >
            VIMAL PORTFOLIO
          </span>
          <span>
            <a href="#resume" className="border-0 d-lg-none">
              <TbFileDownload
                style={{ width: "40px", height: "40px", color: "#006a67" }}
              />
            </a>
            <button
              className="navbar-toggler ml-auto"
              type="button"
              aria-controls="navbarOptions"
              aria-expanded={openMenu}
              onClick={handleToggler}
            >
              <IoMenuOutline
                style={{
                  width: "40px",
                  height: "40px",
                  color: "#006a67",
                }}
              />
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
          <a href="#resume" className="border-0 d-none d-lg-block">
            <TbFileDownload
              style={{ width: "40px", height: "40px", color: "#006a67" }}
              data-toggle="tooltip"
              title="Download Resume"
            />
          </a>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
