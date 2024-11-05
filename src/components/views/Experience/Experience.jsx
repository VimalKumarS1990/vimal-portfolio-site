import React from "react";
import "./Experience.css";
import posterExp from "../../../assets/images/experience/posterExp.png";
import RoadMap from "../../RoadMap/RoadMap";
import awardIcon from "../../../assets/images/experience/award.png";
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
              <RoadMap />
            </div>
            <div className="col-12 col-md-6 text-center">
              <img
                src={posterExp}
                alt="exp-poster"
                className="img-fluid pt-5 mt-5"
              />
              <h2
                className="col-12 m-auto text-center"
                style={{
                  textShadow: "2px 2px 2px black",
                  paddingBottom: "2rem",
                  color: "#C4DAD2",
                  textAlign: "center",
                }}
              >
                Awards & Recognitions
              </h2>
              <div className="card glow">
                <div className="card-body">
                  <div className="row mx-3 p-3">
                    <ul className="text-light text-left list-unstyled">
                      <li className="pt-4">
                        <span>
                          <img
                            src={awardIcon}
                            alt="award-1"
                            style={{
                              width: "30px",
                              height: "30px",
                              margin: "4px",
                            }}
                          />
                        </span>
                        Received Site level R&R award continuously for three
                        times from 2016 to 2018 in the categories “Focus on
                        Efficiency” and “Think Technology” for three different
                        automation projects which reduces manual work and saves
                        time to a large extent in Reed Elsevier India Pvt Ltd
                        (RELX).
                      </li>
                      <li className="pt-4">
                        <span>
                          <img
                            src={awardIcon}
                            alt="award-1"
                            style={{
                              width: "30px",
                              height: "30px",
                              margin: "4px",
                            }}
                          />
                        </span>
                        Received Best Performer award in Production & Quality in
                        2013 in Dell International Services.
                      </li>
                    </ul>
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

export default Experience;
