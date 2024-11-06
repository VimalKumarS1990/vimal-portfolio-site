import React from "react";
import projPoster from "../../../assets/images/projects/projectPoster.png";
import SwiperCard from "../reusable/Swiper/SwiperCard";
const projects = [
  {
    logo: "bnsf_logo",
    clientName: "BNSF Railway",
    location: " - (Texas)",
    projectName: "BNSF-FinOptimo",
    role: "Cloud FinOps Engineer",
    techUsed: [
      {
        name: "React",
        logo: "react_logo",
      },
      {
        name: "Azure DevOps",
        logo: "azuredevops_logo",
      },
    ],
    description:
      "FinOps tool for BNSF's Azure environment, providing cost data, optimization opportunities, anomaly detection, and chargeback reports.",
  },
  {
    logo: "wbg_logo",
    clientName: "WBG - World Bank Global",
    location: " - (Canada)",
    projectName: "AIMM",
    role: "Frontend Developer & UI Lead",
    techUsed: [
      {
        name: "React",
        logo: "react_logo",
      },
      {
        name: "MUI",
        logo: "mui_logo",
      },
      {
        name: "Jest",
        logo: "jest_logo",
      },
      {
        name: "Azure DevOps",
        logo: "azuredevops_logo",
      },
    ],
    description:
      "Designed and implemented reusable UI components, integrated APIs, wrote test cases, and led the UI team to meet project goals.",
  },
  {
    logo: "kpmg_logo",
    clientName: "KPMG",
    location: " - (Canada)",
    projectName: "One Port – Tax Filing",
    role: "Frontend Developer",
    techUsed: [
      {
        name: "Vue JS",
        logo: "vue_logo",
      },
      {
        name: "Pinia Store",
        logo: "pinia_logo",
      },
      {
        name: "Tailwind CSS",
        logo: "tailwind_logo",
      },
      {
        name: "Azure DevOps",
        logo: "azuredevops_logo",
      },
    ],
    description:
      "Creating reusable UI components, integrated APIs for seamless data flow, and wrote test cases to ensure application reliability and performance.",
  },
  {
    logo: "shaz_logo",
    clientName: "Shaz Fotos",
    location: " - (Chennai)",
    projectName: "Shaz Fotos – Portfolio",
    role: "Ui/Ux & Frontend Developer",
    techUsed: [
      {
        name: "React",
        logo: "react_logo",
      },
      {
        name: "MUI",
        logo: "mui_logo",
      },
      {
        name: "Git Hub",
        logo: "github_logo",
      },
    ],
    description:
      "Designed a responsive layout, optimized images, developed interactive features, and collaborated with the client to refine design concepts and meet requirements.",
  },
];

const Projects = () => {
  return (
    <section className="container-fluid col py-5" id="projects">
      <div className="row">
        <div className="col m-auto">
          <h1
            className="header row m-auto align-items-center justify-content-center display-4 poppins-semibold"
            style={{ textShadow: "5px 3px 2px black", color: "white" }}
          >
            PROJECTS
          </h1>
          <div className="row mt-3" style={{ justifyContent: "space-between" }}>
            <div className="col-12 col-md-6 text-white">
              <img
                src={projPoster}
                alt="proj-poster"
                className="img-fluid pt-5"
              />
            </div>
            <div className="col-12 col-md-6 text-white pt-3">
              <h2
                className="col-12 m-auto text-center"
                style={{
                  textShadow: "2px 2px 2px black",
                  paddingBottom: "2rem",
                  color: "#C4DAD2",
                  textAlign: "center",
                }}
              >
                Projects Worked
              </h2>
              <SwiperCard cardData={projects} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
