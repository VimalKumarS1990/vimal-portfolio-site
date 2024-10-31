import React, { useState } from "react";
import "./Contact.css";
import { SiGmail } from "react-icons/si";
import { BsLinkedin } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");

  const handleResumeDownload = (event) => {
    const resumePath = `https://drive.google.com/file/d/1Jzdk1mgM0IGdLkJNvQUEDanCzBJxnK7r/view?usp=sharing`;

    event.preventDefault();
    window.open(resumePath, "_blank");
  };

  return (
    <section className="container col py-5" id="contact">
      <div className="row">
        <div className="col m-auto">
          <h1
            className="header row m-auto align-items-center justify-content-center display-4 poppins-semibold"
            style={{ textShadow: "5px 2px 2px #EDDFE0" }}
          >
            Contact
          </h1>
          <div class="row">
            <div class="col-12 col-md-6">
              <div class="row p-4 mt-4 card bg-light">
                <div class="col-12 col-md-6">
                  <div class="row p-1 align-items-baseline m-auto">
                    <h3>
                      <SiGmail style={{ color: "red" }} /> Email: &nbsp;
                    </h3>
                    <a
                      href="mailto:svimalkumar2@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <h1 className="url">svimalkumar2@gmail.com</h1>
                    </a>
                  </div>
                  <div className="row p-1 align-items-baseline m-auto">
                    <h3>
                      <BsLinkedin className="text-primary" /> LinkedIn: &nbsp;
                    </h3>
                    <a
                      href="https://www.linkedin.com/messaging/compose/?recipientId=svimalkumar2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <h1 className="url">svimalkumar2</h1>
                    </a>
                  </div>
                </div>
                <div class="col-12 col-md-6">
                  <div className="row p-1 align-items-baseline m-auto">
                    <h3>
                      <FaWhatsapp className="text-white bg-success rounded-circle" />{" "}
                      WhatsApp: &nbsp;
                    </h3>
                    <a
                      href="https://wa.me/919791110494"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <h1 className="url">+91 9791110494</h1>
                    </a>
                  </div>
                  <div className="row p-1 align-items-baseline m-auto">
                    <h3>
                      <FaMobileAlt className="text-secondary" /> Mobile: &nbsp;
                    </h3>
                    <h1 className="url">+91 9791110494</h1>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6">
              <div class="row p-4 mt-4 card bg-light">
                <form className="p-md-2 p-lg-4" id="resume">
                  <div className="form-group">
                    <label htmlFor="name">
                      Name<span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Enter your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">
                      Email<span className="text-danger">*</span>
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="mobile">
                      Mobile Number<span className="text-danger">*</span>
                    </label>
                    <input
                      type="tel"
                      className="form-control"
                      id="mobile"
                      placeholder="Enter your mobile number"
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)}
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={handleResumeDownload}
                  >
                    View / Download Resume
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
