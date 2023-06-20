import axios from 'axios';
import React, { useState} from 'react';
import { useParams } from 'react-router-dom';

function UserBook() {
  const today = new Date().toISOString().split('T')[0];
  const email = localStorage.getItem('email');
  const params = useParams();
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [place, setPlace] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  



  // useEffect(() => {
  //   const fetchBookedTimes = async () => {
  //     try {
  //       const response = await axios.post('http://localhost:8000/getAvailableTimes', body)
  //       if(response){
  //         console.log("response",response.data.time);
  //         const bookedTimes = response.data.time;
  //         const filteredTimes = availableTimes.filter((time) => !bookedTimes.includes(time));
  //         setAvailableTimes(filteredTimes);
  //       }
     
  //     } catch (error) {
  //       console.error('Error fetching booked times:', error);
  //     }
  //   };

  //   if (date) {
  //     fetchBookedTimes();
  //   } else {
  //     setAvailableTimes(['09:00', '12:00', '15:00', '17:00']);
  //   }
  // }, [date, params.id]);





  //////////////////////////////////////////////////////////////////

  const bookDoctor = async (e) => {
    e.preventDefault();
    const body = {
      id: params.id,
      name,
      age,
      place,
      phone,
      email,
      date,
      time,
    };
  
    try {
      const result = await axios.post('http://localhost:8000/bookDoctor', body);
      if (result.data.status) {
        alert(result.data.message);
      } else {
        alert(result.data.message);
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        alert(error.response.data.message);
      } else {
        alert('Error booking appointment');
      }
    }
  };
  return (
    <div>

      <button><a href="/user-home">Back</a></button>

<form
  action=""
  style={{
    backgroundColor:"aliceblue",
    width: "500px",
    margin: "0 auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "5px",
  }}
>
  <label htmlFor="name">Patient name</label>
  <br />
  <input
    id="name"
    onChange={(e) => setName(e.target.value)}
    type="text"
    style={{
      width: "100%",
      padding: "10px",
      border: "1px solid #ccc",
      borderRadius: "3px",
    }}
  />
  <br />
  <br />

  <label htmlFor="age">Patient age</label>
  <br />
  <input
    id="age"
    onChange={(e) => setAge(e.target.value)}
    type="text"
    style={{
      width: "100%",
      padding: "10px",
      border: "1px solid #ccc",
      borderRadius: "3px",
    }}
  />
  <br />
  <br />

  <label htmlFor="place">Place</label>
  <br />
  <input
    id="place"
    onChange={(e) => setPlace(e.target.value)}
    type="text"
    style={{
      width: "100%",
      padding: "10px",
      border: "1px solid #ccc",
      borderRadius: "3px",
    }}
  />
  <br />
  <br />

  <label htmlFor="phone">Phone number</label>
  <br />
  <input
    id="phone"
    onChange={(e) => setPhone(e.target.value)}
    type="text"
    style={{
      width: "100%",
      padding: "10px",
      border: "1px solid #ccc",
      borderRadius: "3px",
    }}
  />
  <br />
  <br />

  <label htmlFor="date">Select date</label>
  <br />
  <input
    id="date"
    onChange={(e) => setDate(e.target.value)}
    type="date"
    min={today}
    style={{
      width: "100%",
      padding: "10px",
      border: "1px solid #ccc",
      borderRadius: "3px",
    }}
  />
  <br />
  <br />

  <label htmlFor="time">Select time</label>
  <br />
  <select
    id="time"
    onChange={(e) => setTime(e.target.value)}
    style={{
      width: "100%",
      padding: "10px",
      border: "1px solid #ccc",
      borderRadius: "3px",
    }}
  >
    <option value="">Select Time</option>
    <option value="9:00">9:00 am</option>
    <option value="10:00">10:00 am</option>
    <option value="3:00">3:00 pm</option>
    <option value="4:00">4:00 pm</option>
  </select>
  <br />
  <br />

  <button
    onClick={bookDoctor}
    style={{
      width: "100%",
      padding: "10px",
      backgroundColor: "#007bff",
      color: "#fff",
      border: "none",
      borderRadius: "3px",
      cursor: "pointer",
    }}
  >
    Book Now
  </button>
</form>

    </div>
  );
}

export default UserBook;
