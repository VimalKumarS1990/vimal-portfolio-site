import "./About.css";
import myPic from "../../../assets/images/about-img.png";
import Chip from "../reusable/Chip/Chip";
import degree from "../../../assets/images/experience/degree.png";

const About = ({ scrollToSection }) => {
  const hobbies = [
    "🎮 Video Games",
    "🎵 Listening Music",
    "💻⚙️ Fixing Gadgets",
    "🎭 Watching Movies",
  ];

  return (
    <section className="container-fluid col py-5" id="about">
      <div className="row">
        <div className="col m-auto">
          <h1
            data-aos="fade-down"
            data-aos-easing="linear"
            className="header row m-auto align-items-center justify-content-center display-4 poppins-semibold"
            style={{ textShadow: "5px 3px 2px black", color: "white" }}
          >
            ABOUT
          </h1>
          <h2
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            className="row m-auto justify-content-center pt-4 abt-header"
            style={{
              textShadow: "2px 2px 2px black",
              paddingBottom: "1rem",
              color: "#C4DAD2",
              textAlign: "center",
            }}
          >
            <span>Passionate about &nbsp;</span>
            <span style={{ color: "yellow" }}>Web Developer</span>
          </h2>
          <div
            className="row py-4 mt-3 m-auto"
            style={{ borderRadius: "15px" }}
          >
            <div
              data-aos="zoom-in-right"
              className="col-12 col-md-4 sec-1 text-white bg-secondary card glowBlack mb-2 py-4"
              style={{ borderRadius: "15px", border: "2px solid yellowgreen" }}
            >
              <div
                className="p-4"
                style={{
                  borderRadius: "15px",
                  fontSize: "0.80em",
                }}
              >
                <h4
                  style={{
                    textAlign: "center",
                    color: "white",
                    textShadow: "2px 2px 0px blue",
                    paddingBottom: "1rem",
                  }}
                >
                  Web Development
                </h4>
                <ul style={{ listStyleType: "circle" }}>
                  <li>
                    Dedicated Frontend Developer with 4 years of experience in
                    React.js.
                  </li>
                  <li>
                    Additional experience with Angular and Vue.js frameworks.
                  </li>
                  <li>
                    Skilled in creating interactive, responsive web
                    applications.
                  </li>
                  <li>
                    Proficient in HTML, CSS, JavaScript, and modern web
                    development practices.
                  </li>
                  <li>
                    Passionate about innovation and staying updated with
                    emerging technologies.
                  </li>
                  <li>
                    Strong collaborator, committed to delivering exceptional
                    user experiences.
                  </li>
                </ul>
              </div>

              <button
                type="button"
                className="btn btn-primary text-white>Download"
                style={{
                  maxWidth: "8rem",
                  borderRadius: "25px",
                  margin: "2rem auto 2em",
                }}
                onClick={() => scrollToSection("contact")}
              >
                My Resume
              </button>
            </div>

            <div className="col-12 col-md-4 sec-2 mb-2 py-2">
              <img
                data-aos="zoom-out"
                src={myPic}
                alt="myPic-aboutme"
                className="img-fluid about-img"
              />
            </div>

            <div
              data-aos="zoom-in-left"
              className="col-12 col-md-4 sec-3 text-white bg-secondary card glowBlack mb-2 py-4"
              style={{
                borderRadius: "15px",
                border: "2px solid yellowgreen",
              }}
            >
              <div className="pt-4">
                <h4
                  style={{
                    textAlign: "center",
                    color: "white",
                    textShadow: "2px 2px 0px blue",
                    paddingBottom: "1rem",
                  }}
                >
                  A Bit About Me
                </h4>
                <p className="mx-4" style={{ fontSize: "0.80em" }}>
                  I am a jovial person who enjoys working both in teams and
                  independently. With 14 years of experience across various tech
                  areas, including VBA and RPA, I have successfully transitioned
                  into web development—my ultimate goal. My journey began with
                  VBA, progressed to RPA, and has now led me to become a web
                  developer. I strive to create engaging and user-friendly
                  experiences. I enjoy tackling challenges and finding
                  innovative solutions, which keeps my work exciting and
                  fulfilling. When I’m not coding, I love to repair gadgets,
                  indulging my curiosity and technical skills.
                </p>
                <div className="row mx-3 p-3 justify-content-center">
                  <h4
                    style={{
                      color: "white",
                      textShadow: "2px 2px 0px blue",
                      textAlign: "center",
                    }}
                  >
                    My Academics
                  </h4>
                  <ul
                    className="text-light text-left listing list-unstyled"
                    style={{ fontSize: "0.80em" }}
                  >
                    <li className="pt-4">
                      <span>
                        <img
                          src={degree}
                          alt="degree"
                          style={{
                            width: "35px",
                            height: "30px",
                            margin: "0px",
                          }}
                        />
                      </span>
                      Bachelor of Computer Application B.C.A with aggregate of
                      78 % from IIETM, Chennai in the year 2010
                    </li>
                  </ul>
                </div>
                <div
                  className="p-1 pt-3"
                  style={{
                    borderRadius: "15px",
                    fontSize: "0.80em",
                    alignContent: "left",
                    color: "#0D92F4",
                  }}
                >
                  <h4
                    style={{
                      color: "white",
                      textShadow: "2px 2px 0px blue",
                      textAlign: "center",
                      paddingBottom: "1rem",
                    }}
                  >
                    My Hobbies
                  </h4>
                  <Chip content={hobbies} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
