import React, { useEffect, useState } from "react";
import "./Admin.css";
import axios from "axios";

const Admin = () => {
  const [messages, setMessages] = useState([]);

  const handleGoHome = () => {
    window.location.href = "/";
  };

  const getDbData = async () => {
    const response = await axios.get(
      "https://vimal-portfolio-backend.onrender.com/api/download"
    );
    setMessages(response.data);
  };

  useEffect(() => {
    getDbData();
  }, []);

  return (
    <div className="container mt-5">
      <div
        className="mb-4"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <h2 className="text-white">
          Details of Users who Downloaded My Resume
        </h2>
        <button
          className="btn btn-warning backBtn"
          onClick={handleGoHome}
          style={{ borderRadius: "15px" }}
        >
          Back to Home
        </button>
      </div>
      <div className="table-responsive">
        <table className="table table-striped table-bordered bg-white">
          <thead className="table-dark">
            <tr>
              <th>Name</th>
              <th>Mobile</th>
              <th>Message</th>
              <th>Date & Time</th>
            </tr>
          </thead>
          <tbody>
            {messages.map((msg) => (
              <tr key={msg._id}>
                <td>{msg.name}</td>
                <td>{msg.mobile}</td>
                <td>{msg.message || "-"}</td>
                <td>{msg.dateTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Admin;
