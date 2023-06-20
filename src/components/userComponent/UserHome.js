import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Userhome.css";
import Mycarousel from "../Mycarousel";
import Description from "../Description";

function UserHome() {
  const today = new Date().toISOString().split("T")[0];
  const email = localStorage.getItem("email");
  const [Doctor, setDoctor] = useState([]);
  const [date, setSelectedDate] = useState(null);
  const [time, SetTime] = useState(null);

  //api call
  const getDoctors = async () => {
    const result = await axios.get("http://localhost:8000/getDoctors");
    setDoctor(result.data.message);
    console.log(result.data);
    console.log(Doctor);
  };

  useEffect(() => {
    getDoctors();
  }, []);

  /////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////

  const checkAvailability = async (id) => {
    const body = {
      id,
      email,
      date,
      time,
    };

    try {
      const result = await axios.post(
        "http://localhost:8000/checkAvailability",
        body
      );
      if (result.data.status) {
        alert(result.data.message);
      } else {
        alert(result.data.message);
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        alert(error.response.data.message);
      } else {
        alert("Error checking availability");
      }
    }
  };

  return (
    <div>
      <Mycarousel />
      <Description/>
      <div className="top-right">
        <Link to={`bookingdetails/${email}`}>
          <button className="bg-danger">
            <i className="fa-solid fa-pencil"></i>
            <a style={{ textDecoration: "none" }} href="">
              Booking Details
            </a>
          </button>
        </Link>
      </div>
      <div className="page">
        <div className="container mt-5">
          <div className="box-container">
            {Doctor?.map((Doctor, index) => (
              <div className="box" key={index}>
                <article className="cta">
                  <img
                    src="doctor_1196-269.avif"
                    style={{ width: "30%", height: "100%" }}
                    alt="Doctor Avatar"
                  />
                  <div
                    className="cta__text-column"
                    style={{ width: "70%", textAlign: "center" }}
                  >
                    <h2>{Doctor.name}</h2>
                    <h3>{Doctor.specialization}</h3>
                    <h5>{Doctor.time}</h5>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        marginBottom: "10px",
                      }}
                    >
                      <label htmlFor="date" style={{ marginRight: "5px" }}>
                        Select date:
                      </label>
                      <input
                        id="date"
                        onChange={(e) => setSelectedDate(e.target.value)}
                        type="date"
                        min={today}
                      />
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        marginBottom: "10px",
                      }}
                    >
                      <label htmlFor="time" style={{ marginRight: "5px" }}>
                        Select time:
                      </label>
                      <select
                        id="time"
                        onChange={(e) => SetTime(e.target.value)}
                      >
                        <option value="">Select Time</option>
                        <option value="9:00">9:00 am</option>
                        <option value="10:00">10:00 am</option>
                        <option value="3:00">3:00 pm</option>
                        <option value="4:00">4:00 pm</option>
                      </select>
                    </div>
                    <button onClick={() => checkAvailability(Doctor.id)}>
                      Check availability
                    </button>
                    <br />
                    <Link to={`user-book/${Doctor.id}`}>
                      <button>Book doctor</button>
                    </Link>
                  </div>
                </article>-
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserHome;
