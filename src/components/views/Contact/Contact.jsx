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
  const [message, setMessage] = useState("");

  const setDefault = () => {
    setName("");
    setMobile("");
    setMessage("");
  };

  const submitFormData = async () => {
    const resumePath = `https://drive.google.com/file/d/1Jzdk1mgM0IGdLkJNvQUEDanCzBJxnK7r/view?usp=sharing`;
    const currentDateTime = new Date().toLocaleString();

    const userData = {
      Name: name,
      Mobile: mobile,
      Message: message,
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
    toast.error(
      "Please Enter Your Name, Mobile Number & Message to View / Download Resume",
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
    <section className="container-fluid col py-5" id="contact">
      <ToastContainer />
      <div className="row">
        <div className="col m-auto">
          <h1
            className="header row m-auto align-items-center justify-content-center display-4 poppins-semibold"
            style={{ textShadow: "5px 3px 2px black", color: "white" }}
          >
            CONTACT
          </h1>
          <div className="row mt-3" style={{ justifyContent: "space-between" }}>
            <div className="col-12 col-md-6 sec-2">
              <div
                className="p-1 mt-4 card text-white glow"
                style={{ height: "100%" }}
              >
                <div className="container m-auto">
                  <ul
                    className="text-white list-unstyled"
                    style={{ margin: "1em" }}
                  >
                    <li className="d-flex flex-wrap align-items-center">
                      <span>
                        <SiGmail
                          style={{
                            color: "red",
                            backgroundColor: "white",
                            borderRadius: "5px 0px",
                            fontSize: "1.5em",
                          }}
                        />
                      </span>
                      <span className="m-2" style={{ fontSize: "1.2em" }}>
                        Email:
                      </span>
                      <a
                        href="mailto:svimalkumar2@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="url p-1"
                      >
                        svimalkumar2@gmail.com
                      </a>
                    </li>
                    <li className="d-flex flex-wrap align-items-center">
                      <span>
                        <BsLinkedin
                          className="text-primary"
                          style={{
                            backgroundColor: "white",
                            borderRadius: "5px 0px",
                            fontSize: "1.5em",
                          }}
                        />
                      </span>
                      <span className="m-2" style={{ fontSize: "1.2em" }}>
                        LinkedIn:
                      </span>
                      <a
                        href="https://www.linkedin.com/messaging/compose/?recipientId=svimalkumar2"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="url p-1"
                      >
                        svimalkumar2@gmail.com
                      </a>
                    </li>
                    <li className="d-flex flex-wrap align-items-center">
                      <span>
                        <FaWhatsapp
                          className="text-white bg-success rounded-circle"
                          style={{
                            backgroundColor: "white",
                            borderRadius: "5px 0px",
                            fontSize: "1.5em",
                          }}
                        />
                      </span>
                      <span className="m-2" style={{ fontSize: "1.2em" }}>
                        WhatsApp:
                      </span>
                      <a
                        href="https://wa.me/919791110494"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="url p-1"
                      >
                        +91 9791110494
                      </a>
                    </li>
                    <li className="d-flex flex-wrap align-items-center">
                      <span>
                        <FaMobileAlt
                          className="text-white"
                          style={{ borderRadius: "5px 0px", fontSize: "1.5em" }}
                        />
                      </span>
                      <span className="m-2" style={{ fontSize: "1.2em" }}>
                        Mobile:
                      </span>
                      <h1 className="url p-1">+91 9791110494</h1>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 sec-2">
              <div
                className="p-1 mt-4 card text-white glow"
                style={{ height: "100%" }}
              >
                <form className="p-md-2 p-lg-3 p-4" id="resume">
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
                    <label htmlFor="msg">Message</label>
                    <textarea
                      className="form-control"
                      id="msg"
                      placeholder="Please enter your message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </div>
                  <div className="row justify-content-center pt-4">
                    <button
                      type="submit"
                      className="btn btn-primary"
                      onClick={handleResumeDownload}
                      style={{ borderRadius: "15px" }}
                    >
                      View / Download Resume
                    </button>
                  </div>
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
