import React from "react";
import projPoster from "../../../assets/images/projects/projectPoster.png";
import SwiperCard from "../reusable/Swiper/SwiperCard";

const projects = [
  {
    logo: "wbg",
    projName: "AIMM",
    projectType: "Organization Project",
    description: "an app from the scratch which was build",
  },
  {
    logo: "wbg",
    projName: "AIMM",
    projectType: "Freelancing Project",
    description: "an app from the scratch which was build",
  },
  {
    logo: "wbg",
    projName: "AIMM",
    projectType: "Organization Project",
    description: "an app from the scratch which was build",
  },
  {
    logo: "wbg",
    projName: "AIMM",
    projectType: "Freelancing Project",
    description: "an app from the scratch which was build",
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
              <img src={projPoster} alt="proj-poster" className="img-fluid " />
            </div>
            <div className="col-12 col-md-6 text-white pt-3">
              <SwiperCard cardData={projects} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
