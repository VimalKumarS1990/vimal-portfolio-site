import React from "react";
import "./Experience.css";
import posterExp from "../../../assets/images/experience/posterExp.png";
import RoadMap from "../../RoadMap/RoadMap";
const Experience = () => {
  return (
    <section className="container-fluid col py-5" id="experience">
      <div className="row">
        <div className="col m-auto">
          <h1
            className="header row m-auto align-items-center justify-content-center display-4 poppins-semibold"
            style={{ textShadow: "5px 3px 2px black", color: "white" }}
          >
            EXPERIENCE
          </h1>
          <div className="row mt-3" style={{ justifyContent: "space-between" }}>
            <div className="col-12 col-md-6 text-white align-content-center">
              <img src={posterExp} alt="exp-poster" className="img-fluid" />
            </div>
            <div className="col-12 col-md-6 text-center">
              <RoadMap />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
