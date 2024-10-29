import React from "react";
import "./Banner.css";
import bannerImg1 from "../../../assets/images/banner-img1.png";
import { TypeAnimation } from "react-type-animation";

const Banner = () => {
  return (
    <section className="container bg-light bg-gradient" id="#home">
      <div className="row p-5 align-content-center justify-content-center">
        <div className="col-12 col-md-6 text-left align-content-center">
          <p
            className="display-3 row fw-bold poppins-semibold fs-20-lg justify-content-center text-center"
            style={{ color: "black" }}
          >
            Hi there!
            <span style={{ fontSize: "0.45em", alignContent: "center" }}>
              👋
            </span>
          </p>

          <span className="row align-items-baseline justify-content-center">
            <p className="poppins-semibold" style={{ fontSize: "2em" }}>
              I'm &nbsp;
            </p>
            <h1
              className="display-3 poppins-extrabold"
              style={{ color: "maroon" }}
            >
              Vimal
            </h1>
          </span>
          <div className="row2">
            <p
              className="row poppins-bold justify-content-center text-center"
              style={{ fontSize: "2em" }}
            >
              Welcome to my portfolio!
            </p>
            <p
              className="poppins-semibold row justify-content-center"
              style={{ fontSize: "2em" }}
            >
              I'm a &nbsp;
              <span className="fw-bold text-success justify-content-center text-center">
                Frontend Developer
              </span>
            </p>
            <div
              className="row text-center justify-content-center"
              style={{ height: "90px" }}
            >
              <TypeAnimation
                className="typing"
                sequence={[
                  "Who is specialized in React",
                  1000,
                  "And having hands-on experience with Angular & Vue",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                style={{
                  color: "#5D0E41",
                  fontSize: "2em",
                  display: "inline-block",
                  textAlign: "center",
                }}
                repeat={Infinity}
              />
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 text-center ">
          <img src={bannerImg1} alt="banner-img" className="banner-img" />
        </div>
      </div>
      <hr />
    </section>
  );
};

export default Banner;
