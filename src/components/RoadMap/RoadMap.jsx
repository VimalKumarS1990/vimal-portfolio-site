import React from "react";
import "./RoadMap.css";
import techm_logo from "../../assets/images/experience/techm_logo.png";
import brainscale_logo from "../../assets/images/experience/brainscale_logo.png";
import wns_logo from "../../assets/images/experience/wns_logo.png";
import relx_logo from "../../assets/images/experience/relx_logo.png";
import dell_logo from "../../assets/images/experience/dell_logo.png";

const RoadMap = () => {
  return (
    <div className="container pt-4">
      <h2
        className="col-12 m-auto text-center"
        style={{
          textShadow: "2px 2px 2px black",
          paddingBottom: "2rem",
          color: "#C4DAD2",
          textAlign: "center",
        }}
      >
        <span>Overall Experience - 14 Years</span>
        <ul style={{ textAlign: "left", fontSize: "0.7em" }}>
          <li className="pt-4">IT Experience - 10 Years</li>
          <li className="pt-4">Web Development Experience - 4 Years</li>
        </ul>
      </h2>
      <div className="row">
        <div className="col">
          <div className="main-timeline">
            <div className="timeline">
              <div className="timeline-content">
                <span className="timeline-year">
                  <img
                    src={techm_logo}
                    alt="dell-logo"
                    className="comp-logo m-3"
                  />
                </span>
                <div className="timeline-icon">
                  <i className="fa fa-rocket" aria-hidden="true"></i>
                </div>
                <div className="content">
                  <h3 className="title">Tech Mahindra - Chennai</h3>
                  <h4 className="title text-warning">Sr.Software Engineer</h4>
                  <h5 className="title text-dark">
                    From Oct 2021 to Present
                    <span className="online-status">
                      <div
                        className="online-dot"
                        style={{ backgroundColor: "rgb(6, 240, 6)" }}
                      ></div>
                    </span>
                  </h5>
                  <p className="description">
                    Build responsive React pages, optimize performance,
                    integrate APIs, and test.
                  </p>
                </div>
              </div>
            </div>
            <div className="timeline">
              <div className="timeline-content sec-child">
                <span className="timeline-year">
                  <img
                    src={brainscale_logo}
                    alt="brainscale-logo"
                    className="comp-logo m-3"
                  />
                </span>
                <div className="timeline-icon">
                  <i className="fa fa-users" aria-hidden="true"></i>
                </div>
                <div className="content">
                  <h3 className="title">Brain Scale Inc - Bangalore</h3>
                  <h4 className="title text-warning">Cloud Developer</h4>
                  <h5 className="title text-dark">
                    From Mar 2021 to Oct 2021
                    <span className="online-status">
                      <div
                        className="online-dot-noBlink"
                        style={{ backgroundColor: "red" }}
                      ></div>
                    </span>
                  </h5>
                  <p className="description">
                    Develop responsive UIs, write clean HTML/CSS, implement
                    interactivity, and test.
                  </p>
                </div>
              </div>
            </div>
            <div className="timeline">
              <div className="timeline-content">
                <span className="timeline-year">
                  <img
                    src={wns_logo}
                    alt="brainscale-logo"
                    className="comp-logo m-3"
                  />
                </span>
                <div className="timeline-icon">
                  <i className="fa fa-cog" aria-hidden="true"></i>
                </div>
                <div className="content">
                  <h3 className="title">WNS Global Services - Bangalore</h3>
                  <h4 className="title text-warning">
                    Senior Software Analyst
                  </h4>
                  <h5 className="title text-dark">
                    From Aug 2019 to Feb 2021
                    <span className="online-status">
                      <div
                        className="online-dot-noBlink"
                        style={{ backgroundColor: "red" }}
                      ></div>
                    </span>
                  </h5>
                  <p className="description">
                    Identify automation opportunities, optimize workflows, debug
                    VBA, and analyze data.
                  </p>
                </div>
              </div>
            </div>
            <div className="timeline">
              <div className="timeline-content sec-child">
                <span className="timeline-year">
                  <img
                    src={relx_logo}
                    alt="wns_logo"
                    className="comp-logo m-3"
                  />
                </span>
                <div className="timeline-icon">
                  <i className="fa fa-heart" aria-hidden="true"></i>
                </div>
                <div className="content">
                  <h3 className="title">
                    Reed Elsevier India Pvt Ltd. (RELX) - Chennai
                  </h3>
                  <h4 className="title text-warning">Application Specialist</h4>
                  <h5 className="title text-dark">
                    From Aug 2014 to May 2019
                    <span className="online-status">
                      <div
                        className="online-dot-noBlink"
                        style={{ backgroundColor: "red" }}
                      ></div>
                    </span>
                  </h5>
                  <p className="description">
                    Offer software support, troubleshoot issues, document bugs,
                    and assist users.
                  </p>
                </div>
              </div>
            </div>
            <div className="timeline">
              <div className="timeline-content">
                <span className="timeline-year">
                  <img
                    src={dell_logo}
                    alt="relx_logo"
                    className="comp-logo m-3"
                  />
                </span>
                <div className="timeline-icon">
                  <i className="fa fa-globe" aria-hidden="true"></i>
                </div>
                <div className="content">
                  <h3 className="title">
                    Dell International Services - Chennai
                  </h3>
                  <h4 className="title text-warning">
                    HC & Ins. Ops Senior. Rep
                  </h4>
                  <h5 className="title text-dark">
                    From May 2010 to Apr 2014
                    <span className="online-status">
                      <div
                        className="online-dot-noBlink"
                        style={{ backgroundColor: "red" }}
                      ></div>
                    </span>
                  </h5>
                  <p className="description">
                    Analyze insurance requests, ensure timely transactions,
                    perform quality checks, and improve efficiency.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoadMap;
