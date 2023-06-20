import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Doctor.css";

function DoctorCheck() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  const checkAccess = async (e) => {
    e.preventDefault();
    const body = {
      email
    };

    try {
      const result = await axios.post("http://localhost:8000/accessDoctor", body);
      toast.success(result.data.message);
      setTimeout(() => {
        navigate('/login-doctor');
      }, 1500);
      
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className='b1' style={{height:"100vh"}}>
      <ToastContainer />
      <label htmlFor="">Enter the email id</label>

      <div className="input-group">
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          className="input"
          id="Email"
          name="Email"
          placeholder="Type here..."
          autoComplete="off"
        />
        <input
          onClick={checkAccess}
          className="button--submit"
          value="verify"
          type="submit"
        />
      </div>
    </div>
  );
}

export default DoctorCheck;
