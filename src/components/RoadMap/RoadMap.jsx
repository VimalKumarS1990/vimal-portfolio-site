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
                  <h3 className="title">Tech Mahindra</h3>
                  <h4 className="title text-warning">Sr.Software Engineer</h4>
                  <h5 className="title text-dark">From Oct 2021 to Present</h5>
                  <p className="description">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
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
                  <h3 className="title">Tech Mahindra</h3>
                  <h4 className="title text-warning">Sr.Software Engineer</h4>
                  <h5 className="title text-dark">From Oct 2021 to Present</h5>
                  <p className="description">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
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
                  <h3 className="title">Tech Mahindra</h3>
                  <h4 className="title text-warning">Sr.Software Engineer</h4>
                  <h5 className="title text-dark">From Oct 2021 to Present</h5>
                  <p className="description">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
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
                  <h3 className="title">Tech Mahindra</h3>
                  <h4 className="title text-warning">Sr.Software Engineer</h4>
                  <h5 className="title text-dark">From Oct 2021 to Present</h5>
                  <p className="description">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
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
                  <h3 className="title">Tech Mahindra</h3>
                  <h4 className="title text-warning">Sr.Software Engineer</h4>
                  <h5 className="title text-dark">From Oct 2021 to Present</h5>
                  <p className="description">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
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
