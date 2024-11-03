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
  return (
    <section className="container-fluid col py-5" id="skills">
      <div className="row">
        <div className="col m-auto">
          <h1
            className="header row m-auto align-items-center justify-content-center display-4 poppins-semibold"
            style={{ textShadow: "5px 3px 2px black", color: "white" }}
          >
            SKILLS
          </h1>
          <div className="row mt-3" style={{ justifyContent: "space-between" }}>
            <h2
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
            <div className="col-12 col-md-6 text-white align-content-center">
              <div className="card glow">
                <div className="card-body">
                  <div class="row mx-3 p-3">
                    <Pill pillData={webSkills} />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <img src={posterWeb} alt="skills-web" className="img-fluid" />
            </div>
            <h2
              className="col-12 m-auto text-center"
              style={{
                textShadow: "2px 2px 2px black",
                paddingBottom: "1rem",
                color: "#C4DAD2",
                textAlign: "center",
              }}
            >
              Other Skills
            </h2>
            <div className="col-12 col-md-6">
              <img src={posterOther} alt="skills-other" className="img-fluid" />
            </div>
            <div className="col-12 col-md-6 text-white align-content-center">
              <div className="card glow">
                <div className="card-body">
                  <div class="row mx-3 p-3">
                    <Pill pillData={otherSkills} />
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
