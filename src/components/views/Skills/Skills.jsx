import React from "react";
import "./Skills.css";
import posterWeb from "../../../assets/images/posterWeb.png";
import posterOther from "../../../assets/images/posterOther.png";
import Pill from "../reusable/Pill/Pill";

const Skills = () => {
  const webSkills = [
    {
      name: "HTML",
      logo: "html_logo",
    },
    {
      name: "CSS",
      logo: "css_logo",
    },
    {
      name: "JavaScript",
      logo: "js_logo",
    },
    {
      name: "TypeScript",
      logo: "ts_logo",
    },
    {
      name: "React",
      logo: "react_logo",
    },
    {
      name: "Angular",
      logo: "angular_logo",
    },
    {
      name: "Vue JS",
      logo: "vue_logo",
    },
    {
      name: "Redux",
      logo: "redux_logo",
    },
    {
      name: "Pinia Store",
      logo: "pinia_logo",
    },
    {
      name: "MUI",
      logo: "mui_logo",
    },
    {
      name: "Tailwind CSS",
      logo: "tailwind_logo",
    },
    {
      name: "Bootstrap",
      logo: "bootstrap_logo",
    },
    {
      name: "Jest",
      logo: "jest_logo",
    },
    {
      name: "Node JS",
      logo: "nodejs_logo",
    },
    {
      name: "Git Hub",
      logo: "github_logo",
    },
    {
      name: "Azure DevOps",
      logo: "azuredevops_logo",
    },
  ];
  const otherSkills = [
    {
      name: "VBA Automation",
      logo: "vba_logo",
    },
    {
      name: "Advanced Excel",
      logo: "excel_logo",
    },
    {
      name: "RPA - Blue Prism",
      logo: "rpa_logo",
    },
    {
      name: "Photoshop",
      logo: "pshop_logo",
    },
    {
      name: "Video Editing",
      logo: "videoediting_logo",
    },
    {
      name: "Hardware Services",
      logo: "hardware_logo",
    },
  ];
  const certificates = [
    {
      name: "Microsoft Azure AZ900 - Certified ",
      logo: "az900_logo",
      size: "30px",
      left: "10px",
    },
    {
      name: "BluePrism Developer - Certified ",
      logo: "rpa_logo",
      size: "30px",
      left: "10px",
    },
    {
      name: "Hardware & Networking - Certified ",
      logo: "hardNet_logo",
      size: "30px",
      left: "10px",
    },
  ];
  return (
    <section className="container-fluid col py-5" id="skills">
      <div className="row">
        <div className="col m-auto">
          <h1
            data-aos="fade-down"
            data-aos-easing="linear"
            className="header row m-auto align-items-center justify-content-center display-4 poppins-semibold"
            style={{ textShadow: "5px 3px 2px black", color: "white" }}
          >
            SKILLS
          </h1>
          <div className="row mt-3" style={{ justifyContent: "space-between" }}>
            <h2
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              className="col-12 m-auto text-center"
              style={{
                textShadow: "2px 2px 2px black",
                paddingBottom: "1rem",
                color: "#C4DAD2",
                textAlign: "center",
              }}
            >
              Web Development Skills
            </h2>
            <div
              data-aos="zoom-in-down"
              className="col-12 col-md-6 text-white align-content-center"
            >
              <div className="card glow">
                <div className="card-body">
                  <div className="row mx-3 ">
                    <Pill pillData={webSkills} />
                  </div>
                </div>
              </div>
            </div>
            <div data-aos="zoom-in-up" className="col-12 col-md-6">
              <img src={posterWeb} alt="skills-web" className="img-fluid" />
            </div>
            <h2
              data-aos="zoom-in-up"
              data-aos-anchor-placement="top-bottom"
              className="col-12 m-auto text-center"
              style={{
                textShadow: "2px 2px 2px black",
                paddingBottom: "1rem",
                color: "#C4DAD2",
                textAlign: "center",
              }}
            >
              Other Technical Skills & Certifications
            </h2>
            <div data-aos="zoom-in-down" className="col-12 col-md-6">
              <img src={posterOther} alt="skills-other" className="img-fluid" />
            </div>
            <div
              data-aos="zoom-in-left"
              className="col-12 col-md-6 text-white align-content-center"
            >
              <div className="card glow">
                <div className="card-body">
                  <div className="row mx-3">
                    <p style={{ color: "#C4DAD2", fontWeight: "600" }}>
                      Other Technical Skills:
                    </p>
                    <span>
                      <Pill pillData={otherSkills} />
                    </span>
                  </div>
                  <div className="row mx-3">
                    <p style={{ color: "#C4DAD2", fontWeight: "600" }}>
                      Certifications:
                    </p>
                    <span
                      style={{
                        overflowX: "scroll",
                        scrollbarWidth: "none",
                        msOverflowStyle: "none",
                        WebkitOverflowScrolling: "touch",
                      }}
                    >
                      <Pill pillData={certificates} />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
