import React, { useState } from "react";
import "./Contact.css";
import { SiGmail } from "react-icons/si";
import { BsLinkedin } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Contact = () => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");

  const setDefault = () => {
    setName("");
    setMobile("");
    setEmail("");
  };

  const submitFormData = async () => {
    const resumePath = `https://drive.google.com/file/d/1Jzdk1mgM0IGdLkJNvQUEDanCzBJxnK7r/view?usp=sharing`;
    const currentDateTime = new Date().toLocaleString();

    const userData = {
      Name: name,
      Mobile: mobile,
      Email: email,
      Downloaded_Date_Time: currentDateTime,
    };

    try {
      const response = await axios.post(
        "https://api.sheetbest.com/sheets/2a377bb6-f892-4051-aff9-2a0a7b2866c0",
        userData
      );
      response.data &&
        toast.success("Thanks for Downloading!", {
          position: "bottom-right",
        });
      window.open(resumePath, "_blank");
    } catch (error) {
      console.error("Error fetching data:", error);
      toast.error("Sorry! Unable to Download!", {
        position: "bottom-right",
      });
    }
  };

  const handleValueFields = () => {
    toast.warning(
      "Please Enter Your Name, Mobile Number & Email to View / Download Resume",
      {
        position: "bottom-right",
      }
    );
  };

  const handleResumeDownload = (event) => {
    event.preventDefault();
    const nameIsValid = /^[A-Za-z\s]+$/.test(name);
    const mobileIsValid = /^\d{10}$/.test(mobile);

    if (nameIsValid && mobileIsValid) {
      submitFormData();
      setDefault();
    } else {
      handleValueFields();
    }
  };

  return (
    <section className="container col py-5" id="contact">
      <ToastContainer />
      <div className="row">
        <div className="col m-auto">
          <h1
            className="header row m-auto align-items-center justify-content-center display-4 poppins-semibold"
            style={{ textShadow: "5px 2px 2px #EDDFE0" }}
          >
            Contact
          </h1>
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="row p-4 mt-4 card bg-light">
                <div className="col-12 col-md-6">
                  <div className="row p-1 align-items-baseline m-auto">
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
                <div className="col-12 col-md-6">
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
            <div className="col-12 col-md-6">
              <div className="row p-4 mt-4 card bg-light">
                <form className="p-md-2 p-lg-4" id="resume">
                  <div className="form-group">
                    <label htmlFor="name">
                      Name<span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Please enter your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
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
                      placeholder="Please enter your mobile number"
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Please enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
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
