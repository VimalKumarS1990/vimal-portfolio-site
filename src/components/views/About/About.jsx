import "./About.css";
import myPic from "../../../assets/images/about-img.png";

const About = () => {
  return (
    <section className="container-fluid col py-5" id="about">
      <div className="row">
        <div className="col m-auto">
          <h1
            className="header row m-auto align-items-center justify-content-center display-4 poppins-semibold"
            style={{ textShadow: "5px 3px 2px black", color: "white" }}
          >
            About me
          </h1>
          <h1
            className="row m-auto justify-content-center pt-4"
            style={{
              textShadow: "2px 2px 2px black",
              lineHeight: "0.7",
              paddingBottom: "1rem",
              color: "#C4DAD2",
            }}
          >
            Passionate about &nbsp;
            <span style={{ color: "yellow" }}>Web Developer</span>
          </h1>
          <div
            className="row py-4 mt-3 m-auto"
            style={{ borderRadius: "15px" }}
          >
            <div
              className="col-12 col-md-4 sec-1 text-white bg-secondary glowBlack mb-2 py-4"
              style={{ borderRadius: "15px", border: "2px solid yellowgreen" }}
            >
              <div
                className="p-4"
                style={{
                  borderRadius: "15px",
                  fontSize: "0.80em",
                }}
              >
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
            </div>

            <div className="col-12 col-md-4 sec-2 mb-2 py-2">
              <img
                src={myPic}
                alt="myPic-aboutme"
                className="img-fluid about-img"
              />
            </div>

            <div
              className="col-12 col-md-4 sec-3 text-white bg-secondary glowBlack mb-2 py-4"
              style={{ borderRadius: "15px", border: "2px solid yellowgreen" }}
            >
              <div
                className="p-4"
                style={{
                  borderRadius: "15px",
                  fontSize: "0.80em",
                  alignContent: "left",
                }}
              >
                <h4>My Hobbies:</h4>
                <ul
                  style={{ listStyleType: "none", paddingLeft: 0 }}
                  className="pt-2"
                >
                  <li style={{ fontSize: "1.2em", margin: "5px 0" }}>
                    🎵 Listening Music
                  </li>
                  <li style={{ fontSize: "1.2em", margin: "5px 0" }}>
                    🎮 Video Games
                  </li>
                  <li style={{ fontSize: "1.2em", margin: "5px 0" }}>
                    💻⚙️ Fixing Gadgets
                  </li>
                  <li style={{ fontSize: "1.2em", margin: "5px 0" }}>
                    🎭 Watching Movies
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
