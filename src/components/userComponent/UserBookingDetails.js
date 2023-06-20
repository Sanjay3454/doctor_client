import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import "./Userbookings.css";

function UserBookingDetails() {
  const { email } = useParams();
  const [bookingDetails, setBookingDetails] = useState([]);
  const [loading, setLoading] = useState(true);



  useEffect(() => {
    const fetchBookingDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/bookingDetails/${email}`);
        console.log("response", response);
        setBookingDetails(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fetchBookingDetails();
  }, [email]);

  return (
    <div className='u1'>

<button><a href="/user-home">Back</a></button>
      <h1>Booking Details</h1>
      {loading ? (
        <p>Loading booking details...</p>
      ) : (
        <div>
          {bookingDetails.length > 0 ? (
            bookingDetails.map((booking, index) => (
              <div id="home" className="first_page" key={index}>
                <div className="wrapper">
                  <div className="header header_home">Doctor Name: {booking.doctorName}</div>
                  <div className="content content_home">User Name: {booking.uname}</div>
                  <h5>Booked date: {booking.availability}</h5>
                  <h6>Booked Time: {booking.time}</h6>
                  <div className="image"></div>
                </div>
              </div>
            ))
          ) : (
            <p>No booking details found.</p>
          )}
        </div>
      )}
    </div>
  );
}

export default UserBookingDetails;
